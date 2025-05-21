
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const Watermark = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleWatermark = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to watermark.",
        variant: "destructive",
      });
      return;
    }

    // Validate PDF file
    if (!validatePdfFile(files[0], toast)) return;

    // Simulate watermark application
    toast({
      title: "Processing",
      description: "Adding watermark to your PDF...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("watermarked-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been watermarked. You can now download the result.",
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result);
      toast({
        title: "Downloaded",
        description: "Your watermarked PDF has been downloaded.",
      });
    }
  };

  return (
    <ToolLayout
      title="Watermark PDF"
      description="Add text or image watermarks to PDF documents"
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Add Watermark"
      processingText="Adding watermark..."
      onProcess={handleWatermark}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Watermark Added</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been watermarked successfully.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download Watermarked PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Watermark;
