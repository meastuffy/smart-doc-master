
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const Convert = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConvert = async (files: File[]) => {
    // Simulate conversion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("converted-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your file has been converted. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Convert Files"
      description="Convert between various document formats"
      acceptedFileTypes={["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"]}
      maxFiles={1}
      buttonText="Convert File"
      processingText="Converting..."
      onProcess={handleConvert}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Conversion Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your file has been converted successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Converted File
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Convert;
