
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const JpgToPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConvert = async (files: File[]) => {
    // Simulate conversion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real implementation, we would convert JPGs to PDF here
    
    setResult("converted-images.pdf");
    
    toast({
      title: "Success!",
      description: "Your images have been converted to PDF. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="JPG to PDF"
      description="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
      acceptedFileTypes={["image/jpeg", "image/jpg", "image/png"]}
      maxFiles={20}
      buttonText="Convert to PDF"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your images have been converted to PDF successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default JpgToPdf;
