
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const PdfToA = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConvert = async (files: File[]) => {
    // Simulate conversion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("pdfa-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been converted to PDF/A format. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="PDF to PDF/A"
      description="Convert PDF documents to PDF/A format for long-term archiving"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Convert to PDF/A"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been converted to PDF/A format successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download PDF/A File
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default PdfToA;
