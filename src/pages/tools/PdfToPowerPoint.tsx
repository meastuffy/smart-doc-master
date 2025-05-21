
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const PdfToPowerPoint = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConvert = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to convert.",
        variant: "destructive",
      });
      return;
    }

    // Validate PDF file
    if (!validatePdfFile(files[0], toast)) return;

    // Simulate conversion
    toast({
      title: "Processing",
      description: "Converting your PDF to PowerPoint...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const fileName = files[0].name.split('.')[0];
    setResult(`${fileName}.pptx`);
    
    toast({
      title: "Success!",
      description: "Your PDF has been converted to PowerPoint. You can now download the result.",
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result);
      toast({
        title: "Downloaded",
        description: "Your PowerPoint presentation has been downloaded.",
      });
    }
  };

  return (
    <ToolLayout
      title="PDF to PowerPoint"
      description="Convert PDF documents to editable PowerPoint presentations"
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Convert to PowerPoint"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been converted to PowerPoint successfully.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download PowerPoint Presentation
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default PdfToPowerPoint;
