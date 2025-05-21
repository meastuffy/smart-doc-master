
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const Unlock = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleUnlock = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to unlock.",
        variant: "destructive",
      });
      return;
    }

    // Validate PDF file
    if (!validatePdfFile(files[0], toast)) return;

    // Simulate unlocking
    toast({
      title: "Processing",
      description: "Removing password protection from your PDF...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("unlocked-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been unlocked. You can now download the result.",
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result);
      toast({
        title: "Downloaded",
        description: "Your unlocked PDF has been downloaded.",
      });
    }
  };

  return (
    <ToolLayout
      title="Unlock PDF"
      description="Remove password protection from PDF documents"
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Unlock PDF"
      processingText="Unlocking..."
      onProcess={handleUnlock}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Unlocked</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been unlocked successfully.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download Unlocked PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Unlock;
