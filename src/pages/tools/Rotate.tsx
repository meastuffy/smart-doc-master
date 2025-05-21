
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { RotateCw, RotateCcw } from "lucide-react";

const Rotate = () => {
  const [result, setResult] = useState<string | null>(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const { toast } = useToast();

  const handleLoadPdf = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to rotate.",
        variant: "destructive",
      });
      return;
    }

    // Simulate loading
    toast({
      title: "Processing",
      description: "Loading your PDF document...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setPdfLoaded(true);
    setRotation(0);
    
    toast({
      title: "Success!",
      description: "Your PDF is ready for rotation.",
    });
  };

  const rotateClockwise = () => {
    setRotation((prev) => (prev + 90) % 360);
    toast({
      description: `Rotated 90° clockwise`,
    });
  };

  const rotateCounterClockwise = () => {
    setRotation((prev) => (prev - 90) % 360);
    toast({
      description: `Rotated 90° counter-clockwise`,
    });
  };

  const handleSave = () => {
    setResult("rotated-file.pdf");
    toast({
      title: "Success!",
      description: "Your rotated PDF is ready to download.",
    });
  };

  return (
    <ToolLayout
      title="Rotate PDF"
      description="Rotate PDF pages to correct the orientation"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Load PDF"
      processingText="Loading PDF..."
      onProcess={handleLoadPdf}
    >
      {pdfLoaded && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Rotate PDF Pages</h3>
          
          <div className="flex justify-center space-x-4 mb-6">
            <button 
              className="p-3 bg-muted rounded-md hover:bg-primary/10 transition-colors flex items-center"
              onClick={rotateCounterClockwise}
            >
              <RotateCcw size={20} className="mr-2" />
              <span>Rotate Left</span>
            </button>
            <button 
              className="p-3 bg-muted rounded-md hover:bg-primary/10 transition-colors flex items-center"
              onClick={rotateClockwise}
            >
              <RotateCw size={20} className="mr-2" />
              <span>Rotate Right</span>
            </button>
          </div>
          
          <div 
            className="p-10 border-2 border-dashed rounded-md text-center mb-6 flex items-center justify-center"
            style={{ height: '300px', transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s ease' }}
          >
            <div className="text-muted-foreground">
              PDF Preview - Page rotated {rotation}°
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6 mt-6">
          <h3 className="text-lg font-medium mb-4">Rotation Complete</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been rotated successfully.</p>
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
