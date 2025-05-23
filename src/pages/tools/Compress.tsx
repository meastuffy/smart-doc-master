import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const Compress = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCompress = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to compress.",
        variant: "destructive",
      });
      return;
    }

    // Validate PDF file
    if (!validatePdfFile(files[0], toast)) return;

    // Simulate compression
    toast({
      title: "Processing",
      description: "Compressing your PDF file...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real implementation, we would compress the PDF here
    const originalSize = files[0].size / 1024; // KB
    const compressedSize = originalSize * 0.7; // Simulate 30% compression
    
    setResult("compressed-" + files[0].name);
    
    toast({
      title: "Success!",
      description: `Your PDF has been compressed from ${originalSize.toFixed(2)} KB to ${compressedSize.toFixed(2)} KB (${Math.round((1 - compressedSize/originalSize) * 100)}% reduction).`,
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result, 'compress');
      toast({
        title: "Downloaded",
        description: "Your compressed PDF has been downloaded.",
      });
    }
  };

  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce PDF file size while maintaining quality"
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Compress PDF"
      processingText="Compressing..."
      onProcess={handleCompress}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Compression Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your file has been compressed successfully.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download Compressed PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Compress;
