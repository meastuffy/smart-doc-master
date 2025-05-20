
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { RotateCw, RotateCcw } from "lucide-react";

const Rotate = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRotate = async (files: File[]) => {
    if (rotation === 0) {
      toast({
        title: "No rotation selected",
        description: "Please select a rotation angle first.",
        variant: "destructive",
      });
      throw new Error("No rotation selected");
    }
    
    // Simulate rotation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real implementation, we would rotate the PDF here using pdf-lib
    
    setResult("rotated-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been rotated. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Rotate PDF"
      description="Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={5}
      buttonText="Rotate PDF"
      processingText="Rotating..."
      onProcess={handleRotate}
    >
      <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Rotation Options</h3>
        <div className="flex space-x-4 justify-center">
          <Button
            variant={rotation === -90 ? "default" : "outline"}
            onClick={() => setRotation(-90)}
            className="flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>90° Left</span>
          </Button>
          <Button
            variant={rotation === 90 ? "default" : "outline"}
            onClick={() => setRotation(90)}
            className="flex items-center space-x-2"
          >
            <RotateCw className="w-4 h-4" />
            <span>90° Right</span>
          </Button>
          <Button
            variant={rotation === 180 ? "default" : "outline"}
            onClick={() => setRotation(180)}
            className="flex items-center space-x-2"
          >
            <span>180°</span>
          </Button>
        </div>
      </div>
      
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Rotation Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your file has been rotated successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Rotated PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Rotate;
