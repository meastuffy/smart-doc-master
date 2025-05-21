
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const Protect = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleProtect = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to password protect.",
        variant: "destructive",
      });
      return;
    }

    // Validate PDF file
    if (!validatePdfFile(files[0], toast)) return;

    // Simulate protection
    toast({
      title: "Processing",
      description: "Adding password protection to your PDF...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("protected-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been password protected. You can now download the result.",
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result);
      toast({
        title: "Downloaded",
        description: "Your protected PDF has been downloaded.",
      });
    }
  };

  return (
    <ToolLayout
      title="Protect PDF"
      description="Add password protection to PDF documents"
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Protect PDF"
      processingText="Protecting..."
      onProcess={handleProtect}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Protected</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been password protected successfully.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download Protected PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Protect;
