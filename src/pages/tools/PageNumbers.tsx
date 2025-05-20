
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const PageNumbers = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAddPageNumbers = async (files: File[]) => {
    // Simulate adding page numbers
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("numbered-file.pdf");
    
    toast({
      title: "Success!",
      description: "Page numbers have been added to your PDF. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Add Page Numbers"
      description="Add page numbers to your PDF documents"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Add Page Numbers"
      processingText="Adding page numbers..."
      onProcess={handleAddPageNumbers}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Page Numbers Added</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Page numbers have been added to your PDF successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download PDF with Page Numbers
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default PageNumbers;
