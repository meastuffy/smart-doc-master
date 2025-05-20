
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";

const Unlock = () => {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleUnlock = async (files: File[]) => {
    // Simulate unlocking
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResult("unlocked-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been unlocked. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Unlock PDF"
      description="Remove password protection from PDF files"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Unlock PDF"
      processingText="Unlocking..."
      onProcess={handleUnlock}
    >
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Unlocked</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your file has been unlocked successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Unlocked PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Unlock;
