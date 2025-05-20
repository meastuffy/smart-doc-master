
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const Compress = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCompress = async (files: File[]) => {
    // Simulate compression
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real implementation, we would compress the PDF here
    
    setResult("compressed-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been compressed. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce PDF file size while maintaining quality"
      acceptedFileTypes={["application/pdf"]}
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
            <button className="text-primary font-medium hover:underline">
              Download Compressed PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Compress;
