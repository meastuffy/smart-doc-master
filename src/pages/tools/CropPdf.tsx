
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const CropPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCrop = async (files: File[]) => {
    // Simulate cropping
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("cropped-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been cropped. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Crop PDF"
      description="Crop or resize PDF page dimensions"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Crop PDF"
      processingText="Processing..."
      onProcess={handleCrop}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Cropped</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been cropped successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Cropped PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default CropPdf;
