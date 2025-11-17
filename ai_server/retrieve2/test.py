from ai_server.retrieve2.step7_write_on_excel import create_json_to_excel

if __name__ == "__main__":
    # Thư mục PDF bạn cung cấp
    pdf_folder = "D:/AI_Projects/AI_Server/ai_server/retrieve2/sample_pdfs"
    filename_ids = []
    collection_name = "HuyenThyNguyen"

    create_json_to_excel(pdf_folder, filename_ids, collection_name)