
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const Convert = () => {
  const [result, setResult] = useState<string | null>(null);
  const [convertTo, setConvertTo] = useState<string>("docx");
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

    const file = files[0];
    
    // Validate PDF file - use more permissive validation for file types
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      toast({
        title: "Error",
        description: `${file.name} is not a supported file type. Please upload a PDF file.`,
        variant: "destructive",
      });
      return;
    }

    // Simulate conversion
    toast({
      title: "Processing",
      description: `Converting your PDF to ${getFormatName(convertTo)}...`,
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const fileName = file.name.split('.')[0];
    setResult(`${fileName}.${convertTo}`);
    
    toast({
      title: "Success!",
      description: `Your PDF has been converted to ${getFormatName(convertTo)}. You can now download the result.`,
    });
  };

  const getFormatName = (format: string) => {
    switch(format) {
      case "docx": return "Word";
      case "xlsx": return "Excel";
      case "pptx": return "PowerPoint";
      case "jpg": return "JPG";
      case "png": return "PNG";
      case "txt": return "Text";
      default: return format.toUpperCase();
    }
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result, 'convert');
      toast({
        title: "Downloaded",
        description: `Your converted file has been downloaded.`,
      });
    }
  };

  return (
    <ToolLayout
      title="Convert Files"
      description="Convert PDF to various document formats"
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Convert File"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Conversion Options</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">Convert to:</span>
          <Select value={convertTo} onValueChange={setConvertTo}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="docx">Word (.docx)</SelectItem>
              <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
              <SelectItem value="pptx">PowerPoint (.pptx)</SelectItem>
              <SelectItem value="jpg">JPG Image</SelectItem>
              <SelectItem value="png">PNG Image</SelectItem>
              <SelectItem value="txt">Text File</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your file has been converted successfully to {getFormatName(convertTo)}.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download Converted File
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Convert;
