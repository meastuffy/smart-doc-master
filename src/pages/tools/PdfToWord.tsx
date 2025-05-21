
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { simulateDownload } from "@/utils/downloadUtils";

const PdfToWord = () => {
  const [result, setResult] = useState<string | null>(null);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [isConverting, setIsConverting] = useState(false);
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

    // Simulate conversion with progress
    setIsConverting(true);
    setConversionProgress(0);
    
    toast({
      title: "Processing",
      description: "Converting your PDF to Word...",
    });

    const interval = setInterval(() => {
      setConversionProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 100);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearInterval(interval);
    setConversionProgress(100);
    setIsConverting(false);
    
    const fileName = files[0].name.split('.')[0] + ".docx";
    setResult(fileName);
    
    toast({
      title: "Success!",
      description: "Your PDF has been converted to Word. You can now download the result.",
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result);
      
      toast({
        title: "Downloading",
        description: `Your file ${result} is being downloaded.`,
      });
    }
  };

  return (
    <ToolLayout
      title="PDF to Word"
      description="Convert PDF documents to editable Word format"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Convert to Word"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      {isConverting && (
        <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Conversion in Progress</h3>
          <div className="w-full bg-muted rounded-full h-2.5 mb-2">
            <div 
              className="bg-primary h-2.5 rounded-full transition-all duration-300" 
              style={{width: `${conversionProgress}%`}}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">Extracting content and formatting from PDF...</p>
        </div>
      )}

      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been converted to Word successfully.</p>
            <p className="text-sm text-muted-foreground mb-4">Text formatting and layout have been preserved.</p>
            <button 
              className="text-primary font-medium hover:underline"
              onClick={handleDownload}
            >
              Download Word Document
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default PdfToWord;
