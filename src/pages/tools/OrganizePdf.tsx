
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const OrganizePdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleOrganize = async (files: File[]) => {
    // Simulate organizing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("organized-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been organized. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Organize PDF"
      description="Rearrange, delete, or rotate pages in your PDF"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Organize PDF"
      processingText="Loading PDF..."
      onProcess={handleOrganize}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Organized</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been organized successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Organized PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default OrganizePdf;
