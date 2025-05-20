
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const SignPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSign = async (files: File[]) => {
    // Simulate signing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("signed-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been signed. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Sign PDF"
      description="Add your digital signature to PDF documents"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Sign PDF"
      processingText="Signing..."
      onProcess={handleSign}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Signed</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been signed successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Signed PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default SignPdf;
