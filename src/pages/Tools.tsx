
import React from "react";
import Layout from "@/components/layout/Layout";
import ToolCard from "@/components/ToolCard";
import { 
  FileWord, 
  FileExcel, 
  FilePowerpoint, 
  FilePdf, 
  FileJpg, 
  RotateCw, 
  Shield, 
  Lock, 
  Unlock, 
  Text, 
  Scan, 
  PageNumbers, 
  Crop
} from "lucide-react";

const Tools = () => {
  return (
    <Layout>
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">PDF Toolkit</h1>
            <p className="text-lg text-muted-foreground">
              Select a tool to begin processing your documents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Conversion Tools */}
            <ToolCard
              title="PDF to Word"
              description="Convert PDF documents to editable Word files"
              to="/tools/pdf-to-word"
              icon={<FileWord className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="PDF to Excel"
              description="Pull data straight from PDFs into Excel spreadsheets"
              to="/tools/pdf-to-excel"
              icon={<FileExcel className="w-6 h-6" />}
              color="bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400"
            />
            
            <ToolCard
              title="PDF to PowerPoint"
              description="Convert PDF files to PowerPoint presentations"
              to="/tools/pdf-to-powerpoint"
              icon={<FilePowerpoint className="w-6 h-6" />}
              color="bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400"
            />
            
            <ToolCard
              title="Word to PDF"
              description="Make DOC and DOCX files easy to read by converting them to PDF"
              to="/tools/word-to-pdf"
              icon={<FileWord className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="Excel to PDF"
              description="Make EXCEL spreadsheets easy to read by converting them to PDF"
              to="/tools/excel-to-pdf"
              icon={<FileExcel className="w-6 h-6" />}
              color="bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400"
            />
            
            <ToolCard
              title="PowerPoint to PDF"
              description="Make PPT and PPTX slideshows easy to view by converting them to PDF"
              to="/tools/powerpoint-to-pdf"
              icon={<FilePowerpoint className="w-6 h-6" />}
              color="bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400"
            />

            <ToolCard
              title="PDF to JPG"
              description="Convert each PDF page into a JPG or extract all images contained in a PDF"
              to="/tools/pdf-to-jpg"
              icon={<FileJpg className="w-6 h-6" />}
              color="bg-yellow-100 dark:bg-yellow-950/50 text-yellow-600 dark:text-yellow-400"
            />
            
            <ToolCard
              title="JPG to PDF"
              description="Convert JPG images to PDF in seconds. Easily adjust orientation and margins"
              to="/tools/jpg-to-pdf"
              icon={<FileJpg className="w-6 h-6" />}
              color="bg-yellow-100 dark:bg-yellow-950/50 text-yellow-600 dark:text-yellow-400"
            />
            
            <ToolCard
              title="HTML to PDF"
              description="Convert webpages in HTML to PDF. Copy and paste the URL of the page you want"
              to="/tools/html-to-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-yellow-100 dark:bg-yellow-950/50 text-yellow-600 dark:text-yellow-400"
            />
            
            {/* Editing Tools */}
            <ToolCard
              title="Merge PDFs"
              description="Combine multiple PDF files into one document"
              to="/tools/merge"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="8" height="8" x="2" y="2" rx="1" />
                  <path d="M14 2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1V3c0-.6.4-1 1-1h4Z" />
                  <path d="M8 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H8Z" />
                  <path d="M14 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4Z" />
                </svg>
              }
            />
            
            <ToolCard
              title="Split PDF"
              description="Extract pages or split PDF into multiple files"
              to="/tools/split"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M15 3v18" />
                </svg>
              }
              color="bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400"
            />
            
            <ToolCard
              title="Compress PDF"
              description="Reduce PDF file size while maintaining quality"
              to="/tools/compress"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="m21 8-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                  <path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9" />
                </svg>
              }
              color="bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400"
            />
            
            <ToolCard
              title="Rotate PDF"
              description="Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once"
              to="/tools/rotate"
              icon={<RotateCw className="w-6 h-6" />}
              color="bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400"
            />
            
            <ToolCard
              title="Edit PDF"
              description="Add text, images, shapes or freehand annotations to a PDF document"
              to="/tools/edit-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400"
            />
            
            <ToolCard
              title="Watermark"
              description="Stamp an image or text over your PDF in seconds"
              to="/tools/watermark"
              icon={<Text className="w-6 h-6" />}
              color="bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400"
            />
            
            <ToolCard
              title="Sign PDF"
              description="Sign yourself or request electronic signatures from others"
              to="/tools/sign-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="Organize PDF"
              description="Sort pages of your PDF file however you like. Delete PDF pages or add PDF pages"
              to="/tools/organize-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400"
            />
            
            {/* Security Tools */}
            <ToolCard
              title="Protect PDF"
              description="Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access"
              to="/tools/protect"
              icon={<Shield className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="Unlock PDF"
              description="Remove PDF password security, giving you the freedom to use your PDFs as you want"
              to="/tools/unlock"
              icon={<Unlock className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            {/* Advanced Tools */}
            <ToolCard
              title="PDF to PDF/A"
              description="Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving"
              to="/tools/pdf-to-pdfa"
              icon={<FilePdf className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="Repair PDF"
              description="Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool"
              to="/tools/repair-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400"
            />
            
            <ToolCard
              title="Page Numbers"
              description="Add page numbers into PDFs with ease. Choose your positions, dimensions, typography"
              to="/tools/page-numbers"
              icon={<PageNumbers className="w-6 h-6" />}
              color="bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400"
            />
            
            <ToolCard
              title="Scan to PDF"
              description="Capture document scans from your mobile device and send them instantly to your browser"
              to="/tools/scan-to-pdf"
              icon={<Scan className="w-6 h-6" />}
              color="bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400"
            />
            
            <ToolCard
              title="OCR PDF"
              description="Easily convert scanned PDF into searchable and selectable documents"
              to="/tools/ocr-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400"
            />
            
            <ToolCard
              title="Compare PDF"
              description="Show a side-by-side document comparison and easily spot changes between different file versions"
              to="/tools/compare-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="Redact PDF"
              description="Redact text and graphics to permanently remove sensitive information from a PDF"
              to="/tools/redact-pdf"
              icon={<Text className="w-6 h-6" />}
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="Crop PDF"
              description="Crop margins of PDF documents or select specific areas, then apply the changes to one page or the whole document"
              to="/tools/crop-pdf"
              icon={<Crop className="w-6 h-6" />}
              color="bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
