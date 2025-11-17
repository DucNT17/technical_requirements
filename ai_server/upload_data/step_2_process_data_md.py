from ai_server.upload_data.step_1_config_parser import config_parser
import re
from ai_server.config_minio import client
import io
import os

PAGE_MARKER_TEMPLATE = "[[__PAGE_{page}__]]"
PAGE_MARKER_RE = re.compile(r"\[\[__PAGE_(\d+)__\]\]")
HEADING_RE = re.compile(r'^\s*(#{1,6})\s+(.*\S)\s*$')

def clean_line(line: str) -> str:
    """
    Lấy phần đầu của dòng trước khi gặp >4 dấu cách liên tiếp.
    Xóa # nếu có ở đầu.
    """
    # Nếu có nhiều hơn 4 dấu cách liên tiếp thì tách
    line = re.split(r'\s{5,}', line, maxsplit=1)[0]
    return line.lstrip('#').strip()

def remove_duplicate_headers(markdown_content):
    lines = markdown_content.splitlines()
    output_lines = []
    seen_headers = set()

    for line in lines:
        if line.startswith('# '):  # Chỉ check header cấp 1
            header_text = line[2:].strip()  # Bỏ '# ' và lấy tên header
            if header_text not in seen_headers:
                seen_headers.add(header_text)
                output_lines.append(line)
        else:
            output_lines.append(line)
    
    return '\n'.join(output_lines)

def merge_markdown_content(parsed_docs):
    parts = []
    product_name = "Unknown Product"
    for i, d in enumerate(parsed_docs, start=1):
        if i == 1:
            content = d.text.split('\n')

            # Tìm dòng đầu tiên hợp lệ
            first_non_empty_line = next(
                (line for line in content if line.strip()),
                None
            )

            if first_non_empty_line:
                product_name = clean_line(first_non_empty_line)

            print("Product name:", product_name)

        parts.append(strip_page_markers(d.text))
        parts.append(f"\n{PAGE_MARKER_TEMPLATE.format(page=i)}\n")

    merged_text = "".join(parts)
    merged_text = remove_duplicate_headers(merged_text)
    return merged_text, product_name

def process_data_md(pdf_path):
    parts = pdf_path.split("/")  
    product_name_file, folder, filename = parts[0], parts[1], parts[2]

    bucket_name = "documents"

    parsed_docs, file_name = config_parser(pdf_path)
    merged_text, product_name = merge_markdown_content(parsed_docs)

    base_name = os.path.splitext(file_name)[0]   # bỏ đuôi .pdf
    md_file_name = f"{base_name}.md"

    # Tạo object_name mới cho file Markdown
    md_object_name = f"{product_name_file}/md/{md_file_name}"

    # Upload trực tiếp merged_text vào MinIO
    client.put_object(
        bucket_name,
        md_object_name,
        io.BytesIO(merged_text.encode("utf-8")),
        length=len(merged_text.encode("utf-8")),
        content_type="text/markdown"
    )
    return merged_text, product_name, file_name


def strip_page_markers(text: str) -> str:
    """Xoá marker trang khỏi text để không ảnh hưởng embedding."""
    cleaned = re.sub(r"```", "", text)
    cleaned = re.sub("markdown", "", cleaned)
    return cleaned.strip("\n\r ")
