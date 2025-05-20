
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const ExcelToPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConvert = async (files: File[]) => {
    // Simulate conversion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("converted-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your Excel spreadsheet has been converted to PDF. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Excel to PDF"
      description="Convert Excel spreadsheets to PDF format"
      acceptedFileTypes={["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]}
      maxFiles={1}
      buttonText="Convert to PDF"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your Excel spreadsheet has been converted to PDF successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download PDF File
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default ExcelToPdf;
