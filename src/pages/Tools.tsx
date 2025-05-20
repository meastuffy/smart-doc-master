
import React from "react";
import Layout from "@/components/layout/Layout";
import ToolCard from "@/components/ToolCard";
import { 
  File, 
  FileText, 
  Image, 
  RotateCw, 
  Lock, 
  Unlock,
  Scissors,
  ArrowDown
} from "lucide-react";

const Tools = () => {
  return (
    <Layout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">PDF Tools</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ToolCard
            title="Merge PDF"
            description="Combine multiple PDFs into one document"
            icon={<File className="h-6 w-6" />}
            path="/tools/merge"
          />
          
          <ToolCard
            title="Split PDF"
            description="Extract pages or split PDF into multiple files"
            icon={<Scissors className="h-6 w-6" />}
            path="/tools/split"
          />
          
          <ToolCard
            title="Compress PDF"
            description="Reduce PDF file size without losing quality"
            icon={<ArrowDown className="h-6 w-6" />}
            path="/tools/compress"
          />
          
          <ToolCard
            title="Convert PDF"
            description="Convert PDFs to Word, Excel, PowerPoint & more"
            icon={<FileText className="h-6 w-6" />}
            path="/tools/convert"
          />
          
          <ToolCard
            title="Rotate PDF"
            description="Rotate PDF pages as needed"
            icon={<RotateCw className="h-6 w-6" />}
            path="/tools/rotate"
          />
          
          <ToolCard
            title="Watermark"
            description="Add a watermark text or image to your PDF"
            icon={<Image className="h-6 w-6" />}
            path="/tools/watermark"
          />
          
          <ToolCard
            title="Protect PDF"
            description="Password protect your PDF files"
            icon={<Lock className="h-6 w-6" />}
            path="/tools/protect"
          />
          
          <ToolCard
            title="Unlock PDF"
            description="Remove password protection from PDFs"
            icon={<Unlock className="h-6 w-6" />}
            path="/tools/unlock"
          />
          
          <ToolCard
            title="Edit PDF"
            description="Add text, images, shapes or annotations"
            icon={<FileText className="h-6 w-6" />}
            path="/tools/edit-pdf"
          />
          
          <ToolCard
            title="PDF to Word"
            description="Convert PDF to editable Word documents"
            icon={<FileText className="h-6 w-6" />}
            path="/tools/pdf-to-word"
          />
          
          <ToolCard
            title="PDF to Excel"
            description="Convert PDF to editable Excel spreadsheets"
            icon={<FileText className="h-6 w-6" />}
            path="/tools/pdf-to-excel"
          />
          
          <ToolCard
            title="PDF to PowerPoint"
            description="Convert PDF to PowerPoint presentations"
            icon={<FileText className="h-6 w-6" />}
            path="/tools/pdf-to-powerpoint"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
