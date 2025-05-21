
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

const Watermark = () => {
  const [result, setResult] = useState<string | null>(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [watermarkType, setWatermarkType] = useState<"text" | "image">("text");
  const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState([50]);
  const { toast } = useToast();

  const handleLoadPdf = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to add watermark.",
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
    
    toast({
      title: "Success!",
      description: "Your PDF is ready for watermarking.",
    });
  };

  const handleApplyWatermark = () => {
    setResult("watermarked-file.pdf");
    toast({
      title: "Success!",
      description: "Watermark has been applied to your PDF.",
    });
  };

  return (
    <ToolLayout
      title="Add Watermark to PDF"
      description="Add text or image watermarks to your PDF documents"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Load PDF"
      processingText="Loading PDF..."
      onProcess={handleLoadPdf}
    >
      {pdfLoaded && (
        <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Watermark Options</h3>
          
          <div className="space-y-6">
            <RadioGroup 
              defaultValue="text" 
              value={watermarkType} 
              onValueChange={(value) => setWatermarkType(value as "text" | "image")}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text" id="text" />
                <Label htmlFor="text">Text Watermark</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="image" id="image" />
                <Label htmlFor="image">Image Watermark</Label>
              </div>
            </RadioGroup>
            
            {watermarkType === "text" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="watermark-text">Watermark Text</Label>
                  <Input 
                    id="watermark-text" 
                    value={watermarkText} 
                    onChange={(e) => setWatermarkText(e.target.value)}
                    placeholder="Enter watermark text"
                    className="mt-1"
                  />
                </div>
              </div>
            ) : (
              <div>
                <Label htmlFor="watermark-image">Upload Watermark Image</Label>
                <Input 
                  id="watermark-image" 
                  type="file" 
                  accept="image/*"
                  className="mt-1"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Opacity: {opacity[0]}%</Label>
              </div>
              <Slider 
                defaultValue={[50]} 
                max={100} 
                step={1} 
                value={opacity}
                onValueChange={setOpacity}
              />
            </div>
            
            <div className="bg-muted/30 border border-dashed rounded-md p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="transform rotate-[-30deg] text-4xl font-bold text-gray-400"
                  style={{ opacity: opacity[0] / 100 }}
                >
                  {watermarkText}
                </div>
              </div>
              <div className="relative z-10 py-10">
                PDF Document Preview
              </div>
            </div>
            
            <div className="text-center">
              <button 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                onClick={handleApplyWatermark}
              >
                Apply Watermark
              </button>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Watermark Added</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your file has been watermarked successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Watermarked PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Watermark;
