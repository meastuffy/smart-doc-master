
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const PdfToJpg = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConvert = async (files: File[]) => {
    // Simulate conversion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("converted-images.zip");
    
    toast({
      title: "Success!",
      description: "Your PDF has been converted to JPG images. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="PDF to JPG"
      description="Convert PDF pages to JPG images"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Convert to JPG"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been converted to JPG images successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download JPG Images (ZIP)
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default PdfToJpg;
