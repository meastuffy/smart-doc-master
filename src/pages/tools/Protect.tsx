
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock } from "lucide-react";

const Protect = () => {
  const [result, setResult] = useState<string | null>(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [restrictEditing, setRestrictEditing] = useState(true);
  const [restrictPrinting, setRestrictPrinting] = useState(false);
  const { toast } = useToast();

  const handleLoadPdf = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to protect.",
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
      description: "Your PDF is ready to be password protected.",
    });
  };

  const handleProtect = () => {
    if (!password) {
      toast({
        title: "Error",
        description: "Please enter a password.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    setResult("protected-file.pdf");
    toast({
      title: "Success!",
      description: "Your PDF has been password protected.",
    });
  };

  return (
    <ToolLayout
      title="Protect PDF"
      description="Add password protection to your PDF files"
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Load PDF"
      processingText="Loading PDF..."
      onProcess={handleLoadPdf}
    >
      {pdfLoaded && (
        <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Lock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">PDF Protection Settings</h3>
              <p className="text-muted-foreground mb-4">Add a password to restrict access to your document</p>
            </div>
          </div>
          
          <div className="space-y-6 mt-6">
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="grid gap-3">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="Confirm password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Permissions</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="restrict-editing" 
                    checked={restrictEditing}
                    onCheckedChange={(checked) => setRestrictEditing(checked as boolean)}
                  />
                  <Label htmlFor="restrict-editing">Restrict editing</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="restrict-printing" 
                    checked={restrictPrinting}
                    onCheckedChange={(checked) => setRestrictPrinting(checked as boolean)}
                  />
                  <Label htmlFor="restrict-printing">Restrict printing</Label>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <button 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                onClick={handleProtect}
              >
                Protect PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Protected</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been password protected successfully.</p>
            <button className="text-primary font-medium hover:underline">
              Download Protected PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default Protect;
