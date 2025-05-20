
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const ScanToPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleScanToPdf = async (files: File[]) => {
    // Simulate scan processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("scanned-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your images have been converted to a PDF. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Scan to PDF"
      description="Convert scanned images to PDF format"
      acceptedFileTypes={["image/jpeg", "image/png", "image/tiff"]}
      maxFiles={10}
      buttonText="Create PDF from Scans"
      processingText="Processing scans..."
      onProcess={handleScanToPdf}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Scan to PDF Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your scanned images have been converted to PDF successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Scanned PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default ScanToPdf;
