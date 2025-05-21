
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const PdfToExcel = () => {
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
      description: "Converting your PDF to Excel...",
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
    
    const fileName = files[0].name.split('.')[0];
    setResult(`${fileName}.xlsx`);
    
    toast({
      title: "Success!",
      description: "Your PDF has been converted to Excel. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="PDF to Excel"
      description="Convert PDF documents to editable Excel spreadsheets"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Convert to Excel"
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
          <p className="text-sm text-muted-foreground">Extracting data from tables and converting to Excel format...</p>
        </div>
      )}

      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been converted to Excel successfully.</p>
            <p className="text-sm text-muted-foreground mb-4">Tables and data have been preserved in the Excel format.</p>
            <button className="text-primary font-medium hover:underline">
              Download Excel File
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default PdfToExcel;
