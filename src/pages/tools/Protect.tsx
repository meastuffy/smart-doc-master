
import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Protect = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleProtect = async (files: File[]) => {
    // Validate password
    if (!password) {
      toast({
        title: "Password required",
        description: "Please enter a password to protect your PDF.",
        variant: "destructive",
      });
      throw new Error("Password required");
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      throw new Error("Passwords don't match");
    }
    
    // Simulate password protection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real implementation, we would encrypt the PDF here
    
    setResult("protected-file.pdf");
    
    toast({
      title: "Success!",
      description: "Your PDF has been encrypted with a password. You can now download the result.",
    });
  };

  return (
    <ToolLayout
      title="Protect PDF"
      description="Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access."
      acceptedFileTypes={["application/pdf"]}
      maxFiles={1}
      buttonText="Protect PDF"
      processingText="Encrypting..."
      onProcess={handleProtect}
    >
      <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Set Password</h3>
        <div className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input 
              type="password" 
              id="password" 
              placeholder="Enter a password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input 
              type="password" 
              id="confirm-password" 
              placeholder="Confirm your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">PDF Protected</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been successfully encrypted with a password.</p>
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
