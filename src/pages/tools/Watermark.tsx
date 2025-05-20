
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const Watermark = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleWatermark = async (files: File[]) => {
    // Simulate watermarking
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("watermarked-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been watermarked. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Add Watermark to PDF"
      description="Add text or image watermarks to your PDF documents"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Add Watermark"
      processingText="Adding watermark..."
      onProcess={handleWatermark}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Watermark Added</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your file has been watermarked successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Watermarked PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Watermark;
