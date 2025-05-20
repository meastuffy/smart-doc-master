
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const ComparePdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCompare = async (files: File[]) => {
    // Simulate comparison
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("comparison-results.pdf");
    
    toast({
      title: "Success!",
      description: "PDFs have been compared. You can now view the differences.",
    });
  };

  return (
    <ToolLayout
      title="Compare PDF"
      description="Compare two PDF documents and highlight differences"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={2}
      buttonText="Compare PDFs"
      processingText="Comparing PDFs..."
      onProcess={handleCompare}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Comparison Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">The PDFs have been compared successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Comparison Results
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default ComparePdf;
