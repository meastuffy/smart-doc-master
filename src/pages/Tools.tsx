
import React from "react";
import Layout from "@/components/layout/Layout";
import ToolCard from "@/components/ToolCard";
import { 
  File, 
  Scissors,
  ArrowDown
} from "lucide-react";

const Tools = () => {
  return (
    <Layout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">PDF Tools</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ToolCard
            title="Merge PDF"
            description="Combine multiple PDFs into one document"
            icon={<File className="h-6 w-6" />}
            to="/tools/merge"
          />
          
          <ToolCard
            title="Split PDF"
            description="Extract pages or split PDF into multiple files"
            icon={<Scissors className="h-6 w-6" />}
            to="/tools/split"
          />
          
          <ToolCard
            title="Compress PDF"
            description="Reduce PDF file size without losing quality"
            icon={<ArrowDown className="h-6 w-6" />}
            to="/tools/compress"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
