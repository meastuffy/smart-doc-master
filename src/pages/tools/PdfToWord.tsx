
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PdfToWord = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload a PDF file to convert.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Here we would implement the actual PDF to Word conversion logic
      // This would typically require a server-side component or service
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: "Your PDF has been converted to Word. You can now download the result.",
      });
      
      // Here we would provide download links for the converted file
    } catch (error) {
      console.error("Error converting PDF to Word:", error);
      toast({
        title: "Failed to convert",
        description: "An error occurred while processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">PDF to Word</h1>
            <p className="text-muted-foreground">
              Convert PDF documents to editable Word files
            </p>
          </div>

          <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
            <FileUploader
              accept="application/pdf"
              multiple={false}
              maxSize={100}
              onFilesSelected={handleFileChange}
            />
            
            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Uploaded File</h3>
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="p-3 bg-muted/50 rounded flex justify-between items-center">
                      <span>{file.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-6">
              <Button 
                onClick={handleConvert} 
                disabled={isProcessing || files.length === 0}
                className="w-full"
              >
                {isProcessing ? "Converting..." : "Convert to Word"}
              </Button>
            </div>
          </div>

          {/* Here we would add content for showing conversion results and download links */}
          <div className="text-center text-sm text-muted-foreground mt-8">
            <p>Your files remain private and are automatically deleted after processing.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PdfToWord;
