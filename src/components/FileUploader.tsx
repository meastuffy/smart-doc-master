
import React, { useState, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface FileUploaderProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onFilesSelected: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  accept = ".pdf",
  multiple = false,
  maxSize = 10, // Default max size: 10MB
  onFilesSelected,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const simulateUploadProgress = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  const processFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    let validFiles: File[] = [];
    let hasErrors = false;

    // Parse the accepted types string into an array for easier checking
    const acceptTypes = accept.split(',').map(type => type.trim().toLowerCase());

    // Validate file types and sizes
    for (const file of fileArray) {
      // File extension with dot
      const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
      
      // Check MIME type match or extension match
      const isValidType = acceptTypes.some(acceptType => {
        // Check direct MIME type match
        if (acceptType === file.type) return true;
        
        // Check file extension match
        if (acceptType === fileExtension) return true;
        
        // Special case for PDF files: handle both MIME type and extension
        if ((acceptType === '.pdf' || acceptType === 'application/pdf') && 
            (file.type === 'application/pdf' || fileExtension === '.pdf')) {
          return true;
        }
        
        return false;
      });
      
      const isValidSize = file.size <= maxSize * 1024 * 1024; // Convert MB to bytes
      
      if (!isValidType) {
        toast.error(`${file.name} is not a supported file type`);
        console.log(`Invalid file type: ${file.type}, extension: ${fileExtension}, accepted types: ${accept}`);
        hasErrors = true;
      } else if (!isValidSize) {
        toast.error(`${file.name} exceeds the maximum file size of ${maxSize}MB`);
        hasErrors = true;
      } else {
        validFiles.push(file);
      }
    }

    if (validFiles.length > 0) {
      simulateUploadProgress();
      setTimeout(() => {
        onFilesSelected(validFiles);
      }, 1000);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    processFiles(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    processFiles(files);
  };

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging 
            ? "border-primary bg-primary/5" 
            : "border-gray-300 dark:border-gray-700 hover:border-primary/50"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInputChange}
        />
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full p-3 bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M7 16.5v-1.5" />
              <path d="M15.778 15.156v1.374h2.357c2.684 0 4.865-2.241 4.865-5.001 0-2.325-1.559-4.277-3.673-4.819l-2.299-.577a5.038 5.038 0 0 1-3.844-4.889v-5.244" />
              <path d="M10 9h4" />
              <path d="M13 6h-3" />
              <path d="M12 22v-8" />
              <path d="m9 17 3-3 3 3" />
              <path d="M3 7v9a3 3 0 0 0 3 3h4" />
              <path d="M3 16V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-lg">
              {isDragging ? "Drop files here" : "Drag and drop files here"}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              or <span className="text-primary">browse</span> to upload
            </p>
          </div>
          <div className="text-xs text-muted-foreground">
            {multiple ? "Upload multiple files up to " : "Maximum file size: "}
            {maxSize}MB
            <br />
            Allowed types: {accept.replace(/\./g, "").toUpperCase()}
          </div>
        </div>
        
        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
            <div className="w-2/3">
              <Progress value={uploadProgress} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">Uploading... {uploadProgress}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
