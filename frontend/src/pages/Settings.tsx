import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Import data
import contextQueries from '../../../output/context_queries.json';
import productKeys from '../../../output/product_keys.json';

// Thay thế phần import worker cũ bằng dòng này
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PdfViewerProps {
  fileUrl: string;
  searchTexts: string[];
  targetText?: string;
  onTextFound?: (found: boolean) => void;
}

interface ContextQuery {
  ten_san_pham: string;
  ten_hang_hoa: string;
  value: string;
  yeu_cau_ky_thuat_chi_tiet: string;
  yeu_cau_ky_thuat: string | null;
  kha_nang_dap_ung: string;
  tai_lieu_tham_chieu: {
    file: string;
    section: string;
    table_or_figure: string;
    page: number;
    evidence: string;
  };
  adapt_or_not: string;
}

function PdfViewer({ fileUrl, searchTexts, targetText, onTextFound }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagesRendered, setPagesRendered] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
    setPagesRendered(new Set());
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading PDF:", error);
    setError(`Không thể tải PDF: ${error.message}`);
    setLoading(false);
  };

  // Tự động cập nhật width theo container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // trừ padding 32px (p-4)
        setContainerWidth(containerRef.current.clientWidth - 32);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Highlight text sau khi page render xong
  useEffect(() => {
    if (searchTexts.length > 0 && pagesRendered.size > 0) {
      const timeoutId = setTimeout(() => {
        highlightSearchTexts();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [searchTexts, pagesRendered]);

  // Hàm tách text thành từ + ký tự đặc biệt
  const splitText = (text: string): string[] => {
    return (
      text.match(/[A-Za-z0-9]+|[^A-Za-z0-9\s]+/g) || []
    ).map((t) => t.trim()).filter((t) => t.length > 0);
  };

  const highlightSearchTexts = () => {
    if (!containerRef.current) return;

    const spans = Array.from(
      containerRef.current.querySelectorAll<HTMLSpanElement>(
        ".react-pdf__Page__textContent span"
      )
    );

    // Reset style
    spans.forEach((span) => {
      span.style.removeProperty("color");
      span.style.removeProperty("background");
      span.style.removeProperty("box-shadow");
      span.style.removeProperty("font-weight");
      span.style.removeProperty("text-shadow");
      span.classList.remove("highlighted-text");
    });

    if (!spans.length) return;

    // Gom span thành dòng theo tọa độ top
    const lines: { top: number; spans: HTMLSpanElement[]; text: string }[] = [];
    spans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const top = Math.round(rect.top); // làm tròn để gom nhóm
      let line = lines.find((l) => Math.abs(l.top - top) < 5); // cùng dòng nếu lệch < 5px
      if (!line) {
        line = { top, spans: [], text: "" };
        lines.push(line);
      }
      line.spans.push(span);
      line.text += " " + (span.textContent || "");
    });

    // Tách searchTexts thành các word (bao gồm ký tự đặc biệt)
    const searchWords = searchTexts
      .map((t) => splitText(t))
      .flat();

    console.log("Search words:", searchWords);

    // Tìm dòng có nhiều từ khớp nhất
    let bestLine: typeof lines[0] | null = null;
    let maxMatches = 0;

    lines.forEach((line) => {
      const lineWords = splitText(line.text);
      let count = 0;

      searchWords.forEach((word) => {
        if (lineWords.includes(word)) count++;
      });

      console.log("Line:", line.text, "=> matches:", count);

      if (count > maxMatches) {
        maxMatches = count;
        bestLine = line;
      }
    });

    if (bestLine && maxMatches > 0) {
      console.log("✅ Best line:", bestLine.text, "matches:", maxMatches);
      // highlight tất cả span trong dòng
      bestLine.spans.forEach((span) => {
        span.style.color = "#FFA500";
        span.style.fontWeight = "bold";
      });

      // Scroll đến dòng
      const spanRect = bestLine.spans[0].getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const currentScrollTop = containerRef.current.scrollTop;
      const spanTop = spanRect.top - containerRect.top + currentScrollTop;
      const targetScrollTop = spanTop - 200;
      containerRef.current.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: "smooth",
      });

      onTextFound?.(true);
    } else {
      console.log("❌ Không tìm thấy dòng nào khớp:", searchTexts);
    }
  };

  const onPageRenderSuccess = (pageNumber: number) => {
    setPagesRendered(prev => new Set([...prev, pageNumber]));
  };

  // Render tất cả các trang
  const renderAllPages = () => {
    if (!numPages) return null;

    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <div key={i} className="mb-6 border-b pb-4" id={`page-${i}`}>
          <div className="text-center text-sm text-gray-600 mb-2 sticky top-0 bg-white z-10 py-1 border-b">
            Trang {i} / {numPages}
          </div>
          <Page 
            pageNumber={i} 
            width={containerWidth > 0 ? containerWidth : undefined}
            loading={<div className="text-center py-4">Đang tải trang {i}...</div>}
            error={<div className="text-center py-4 text-red-500">Không thể tải trang {i}</div>}
            onRenderSuccess={() => onPageRenderSuccess(i)}
          />
        </div>
      );
    }
    return pages;
  };

  return (
    <div className="border rounded-lg shadow-sm h-full">
      <div 
        ref={containerRef}
        className="p-4 h-full overflow-y-auto"
        style={{
          height: '100%',
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto'
        }}
      >
        {loading && !error && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2">Đang tải PDF...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8 text-red-500 bg-red-50 rounded-lg">
            <p className="font-semibold">Lỗi:</p>
            <p>{error}</p>
          </div>
        )}

        {!error && (
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="text-center py-4">Đang tải PDF...</div>}
            error={<div className="text-center py-4 text-red-500">Không thể tải PDF</div>}
          >
            {renderAllPages()}
          </Document>
        )}
      </div>
    </div>
  );
}

const Settings = () => {
  // return <div className="p-4">Chức năng đang được phát triển...</div>;
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [searchTexts, setSearchTexts] = useState<string[]>([]);
  const [targetText, setTargetText] = useState<string | undefined>(undefined);

  // Helper function để tìm đường dẫn PDF
  const findPdfPath = (filename: string): string => {
    // Mapping các file PDF với đường dẫn thực tế
    const pdfMappings: { [key: string]: string } = {
      'Netsure_731_A41_Usermanual.pdf': '/docs/Netsure 731 A41 Usermanual.pdf',
      'NetSure_-731_A41_Brochure.pdf': '/docs/NetSure -731 A41 Brochure.pdf',
      'R48-3000e3_Brochure.pdf': '/docs/R48-3000e3 Brochure.pdf',
      'M830B_Brochure.pdf': '/docs/NetSure™ Control Unit (NCU)/M830B Brochure.pdf',
      // Thêm các mapping khác nếu cần
    };
    if (pdfMappings[filename]) {
      return pdfMappings[filename];
    }
    return `/downloads/${filename}`;
  };

  const handleEvidenceClick = (contextQuery: ContextQuery) => {
    const { tai_lieu_tham_chieu } = contextQuery;
    if (tai_lieu_tham_chieu.file && tai_lieu_tham_chieu.evidence) {
      const pdfPath = findPdfPath(tai_lieu_tham_chieu.file);
      console.log('Trying to load PDF:', pdfPath, 'for file:', tai_lieu_tham_chieu.file);
      console.log('Highlighting evidence:', tai_lieu_tham_chieu.evidence);
      setSelectedPdf(pdfPath);
      setSearchTexts([tai_lieu_tham_chieu.evidence]);
      setTargetText(tai_lieu_tham_chieu.evidence);
    }
  };

  // Tạo dữ liệu cho bảng giống Excel
  const createTableData = () => {
    const tableData: any[] = [];
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    
    let productCounter = 0;
    
    Object.entries(productKeys as { [key: string]: { [key: string]: string[] } }).forEach(([productName, hangHoaDict]) => {
      // Header sản phẩm
      tableData.push({
        type: 'product',
        hangMucSo: romanNumerals[productCounter] || (productCounter + 1).toString(),
        tenHangHoa: productName,
        thongSoHSMT: '',
        thongSoHSDT: '',
        hoSoThamChieu: '',
        tinhDapUng: ''
      });
      productCounter++;
      
      // Các hàng hóa con
      let hangHoaCounter = 1;
      Object.entries(hangHoaDict).forEach(([tenHangHoa, items]) => {
        const itemIds = items as string[];
        
        // Lấy thông tin của tất cả items
        const itemInfos = itemIds.map(id => (contextQueries as any)[id]).filter(Boolean);
        
        if (itemInfos.length > 0) {
          // Thêm từng spec thành một hàng riêng biệt
          itemInfos.forEach((item: ContextQuery, index: number) => {
            tableData.push({
              type: 'item',
              hangMucSo: index === 0 ? hangHoaCounter.toString() : '',
              tenHangHoa: index === 0 ? tenHangHoa : '',
              thongSoHSMT: item.yeu_cau_ky_thuat_chi_tiet,
              thongSoHSDT: item.kha_nang_dap_ung || '',
              hoSoThamChieu: item.tai_lieu_tham_chieu.evidence ? 
                `${item.tai_lieu_tham_chieu.file} - Trang ${item.tai_lieu_tham_chieu.page}: ${item.tai_lieu_tham_chieu.evidence}` : '',
              tinhDapUng: item.adapt_or_not === "1" ? "Đáp ứng" : "Không đáp ứng",
              contextQuery: item
            });
          });
          hangHoaCounter++;
        }
      });
    });
    
    return tableData;
  };

  const tableData = createTableData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 h-screen">
      {/* Bảng Excel bên trái */}
      <div className="border rounded-lg shadow-sm h-full">
        <div 
          className="p-4 h-full overflow-y-auto"
          style={{
            maxHeight: 'calc(100vh - 32px)' // tạo scroll riêng cho bảng
          }}
        >
          <h2 className="text-lg font-bold text-center mb-4">BẢNG TUYÊN BỐ ĐÁP ỨNG VỀ KỸ THUẬT</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-center font-bold">Hạng mục số</th>
                  <th className="border border-gray-300 p-2 text-center font-bold">Tên hàng hoá</th>
                  <th className="border border-gray-300 p-2 text-center font-bold">Thông số kỹ thuật E-HSMT</th>
                  <th className="border border-gray-300 p-2 text-center font-bold">Thông số kỹ thuật E-HSDT</th>
                  <th className="border border-gray-300 p-2 text-center font-bold">Hồ sơ tham chiếu</th>
                  <th className="border border-gray-300 p-2 text-center font-bold">Tính đáp ứng</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className={row.type === 'product' ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                    <td className="border border-gray-300 p-2 text-center">
                      {row.hangMucSo}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.type === 'product' ? (
                        <span className="font-bold">{row.tenHangHoa}</span>
                      ) : (
                        row.tenHangHoa
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.thongSoHSMT}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.thongSoHSDT}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.hoSoThamChieu && row.contextQuery && (
                        <button
                          className="text-blue-600 hover:text-blue-800 underline text-left break-words"
                          onClick={() => handleEvidenceClick(row.contextQuery)}
                        >
                          {row.hoSoThamChieu}
                        </button>
                      )}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <span className={
                        row.tinhDapUng === 'Đáp ứng' ? 'text-green-600 font-semibold' : 
                        row.tinhDapUng === 'Không đáp ứng' ? 'text-red-600 font-semibold' : ''
                      }>
                        {row.tinhDapUng}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* PDF Viewer bên phải */}
      <div className="h-full">
        {selectedPdf ? (
          <PdfViewer 
            fileUrl={selectedPdf} 
            searchTexts={searchTexts}
            targetText={targetText}
            onTextFound={(found) => {
              if (found) {
                console.log('Text found and scrolled to');
              }
            }}
          />
        ) : (
          <div className="border rounded-lg shadow-sm h-full flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p className="text-lg mb-2">📄 PDF Viewer</p>
              <p>Click vào "Hồ sơ tham chiếu" bên trái để xem PDF</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;