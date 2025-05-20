
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const RedactPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRedact = async (files: File[]) => {
    // Simulate redaction
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("redacted-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been redacted. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Redact PDF"
      description="Permanently remove sensitive information from PDF documents"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Redact PDF"
      processingText="Processing..."
      onProcess={handleRedact}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Redaction Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been redacted successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Redacted PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default RedactPdf;
