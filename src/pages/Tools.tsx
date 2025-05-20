
import React from "react";
import Layout from "@/components/layout/Layout";
import ToolCard from "@/components/ToolCard";

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
              title="Convert PDF"
              description="Convert PDF to Word, Excel, and other formats"
              to="/tools/convert"
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
                  <path d="M7 10 3 6 7 2" />
                  <path d="m21 20-4 4-4-4" />
                  <path d="M9 6H3" />
                  <path d="M13 20h8" />
                  <path d="M7 16v6" />
                  <path d="M17 14V2" />
                </svg>
              }
              color="bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400"
            />
            
            <ToolCard
              title="Rotate PDF"
              description="Rotate PDF pages to the correct orientation"
              to="/tools/rotate"
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
                  <path d="M9 18 2 12l7-6" />
                  <path d="M19 6v6c0 3.3-2.7 6-6 6H2" />
                </svg>
              }
              color="bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
            
            <ToolCard
              title="Watermark"
              description="Add text or image watermarks to protect documents"
              to="/tools/watermark"
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
                  <path d="M9 15 3 9l6-6" />
                  <path d="M14 15h1a6 6 0 0 0 0-12h-1" />
                </svg>
              }
              color="bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
