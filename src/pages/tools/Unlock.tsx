
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Unlock } from "lucide-react";

const UnlockPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleLoadPdf = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to unlock.",
        variant: "destructive",
      });
      return;
    }

    // Simulate loading
    toast({
      title: "Processing",
      description: "Loading your protected PDF document...",
    });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setPdfLoaded(true);
    
    toast({
      title: "Password Required",
      description: "Please enter the password to unlock this PDF.",
    });
  };

  const handleUnlock = async () => {
    if (!password) {
      toast({
        title: "Error",
        description: "Please enter the password.",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate unlocking process
    toast({
      title: "Processing",
      description: "Attempting to unlock PDF...",
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setResult("unlocked-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been unlocked successfully.",
    });
  };

  return (
    <ToolLayout
      title="Unlock PDF"
      description="Remove password protection from PDF files"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Load PDF"
      processingText="Loading PDF..."
      onProcess={handleLoadPdf}
    >
      {pdfLoaded && !result && (
        <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Unlock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">PDF Unlock</h3>
              <p className="text-muted-foreground mb-4">Enter the password to unlock this protected PDF</p>
            </div>
          </div>
          
          <div className="space-y-6 mt-6">
            <div className="grid gap-3">
              <Label htmlFor="unlock-password">Password</Label>
              <Input 
                id="unlock-password" 
                type="password" 
                placeholder="Enter PDF password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="text-center pt-4">
              <button 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                onClick={handleUnlock}
                disabled={isProcessing}
              >
                {isProcessing ? "Unlocking..." : "Unlock PDF"}
              </button>
            </div>
          </div>
        </div>
      )}

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

export default UnlockPdf;
