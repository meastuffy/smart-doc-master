
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const OcrPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleOcr = async (files: File[]) => {
    // Simulate OCR processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("ocr-file.pdf");
    
    toast({
      title: "Success!",
      description: "OCR has been applied to your PDF. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="OCR PDF"
      description="Make scanned PDFs searchable with OCR (Optical Character Recognition)"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Apply OCR"
      processingText="Applying OCR..."
      onProcess={handleOcr}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">OCR Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">OCR has been applied to your PDF successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Searchable PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default OcrPdf;
