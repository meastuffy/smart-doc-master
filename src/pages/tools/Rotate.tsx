
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const Rotate = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRotate = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to rotate.",
        variant: "destructive",
      });
      return;
    }

    // Validate PDF file
    if (!validatePdfFile(files[0], toast)) return;

    // Simulate rotation
    toast({
      title: "Processing",
      description: "Rotating your PDF pages...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("rotated-" + files[0].name);
    
    toast({
      title: "Success!",
      description: "Your PDF has been rotated. You can now download the result.",
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result, 'rotate');
      toast({
        title: "Downloaded",
        description: "Your rotated PDF has been downloaded.",
      });
    }
  };

  return (
    <ToolLayout
      title="Rotate PDF"
      description="Rotate PDF pages or the entire document"
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Rotate PDF"
      processingText="Rotating..."
      onProcess={handleRotate}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Rotation Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been rotated successfully.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download Rotated PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Rotate;
