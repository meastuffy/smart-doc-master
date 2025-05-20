
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const PdfToExcel = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConvert = async (files: File[]) => {
    // Simulate conversion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("converted-file.xlsx");
    
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
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been converted to Excel successfully.</p>
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
