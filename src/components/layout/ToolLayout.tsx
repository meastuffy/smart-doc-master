
import React, { ReactNode, useState } from "react";
import Layout from "@/components/layout/Layout";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ToolLayoutProps {
  title: string;
  description: string;
  acceptedFileTypes: string[];
  maxFiles: number;
  buttonText: string;
  processingText: string;
  onProcess: (files: File[]) => Promise<void>;
  children?: ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({
  title,
  description,
  acceptedFileTypes,
  maxFiles,
  buttonText,
  processingText,
  onProcess,
  children,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const handleProcessFiles = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload file(s) to process.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      await onProcess(files);
    } catch (error) {
      console.error(`Error processing files:`, error);
      toast({
        title: "Processing failed",
        description: "An error occurred while processing your file(s). Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Convert acceptedFileTypes array to a comma-separated string for the FileUploader
  const acceptString = acceptedFileTypes.join(',');

  return (
    <Layout>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="bg-card border rounded-lg shadow-sm p-6 mb-6">
            <FileUploader
              accept={acceptString}
              multiple={maxFiles > 1}
              maxSize={100}
              onFilesSelected={handleFileChange}
            />
            
            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Uploaded File{files.length > 1 ? 's' : ''}</h3>
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
                onClick={handleProcessFiles} 
                disabled={isProcessing || files.length === 0}
                className="w-full"
              >
                {isProcessing ? processingText : buttonText}
              </Button>
            </div>
          </div>

          {children}

          <div className="text-center text-sm text-muted-foreground mt-8">
            <p>Your files remain private and are automatically deleted after processing.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ToolLayout;
