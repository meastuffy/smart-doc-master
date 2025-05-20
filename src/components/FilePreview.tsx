
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FilePreviewProps {
  file: File;
  onRemove?: () => void;
  showPreview?: boolean;
}

const FilePreview: React.FC<FilePreviewProps> = ({ 
  file, 
  onRemove,
  showPreview = true 
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileType = file.type;
  const fileSize = formatFileSize(file.size);

  useEffect(() => {
    if (!showPreview) return;
    
    // Only create previews for image files
    if (fileType.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [file, fileType, showPreview, preview]);

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function getIconForFile(file: File) {
    const fileType = file.type;
    const fileName = file.name.toLowerCase();
    
    if (fileType.includes('pdf')) {
      return (
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
          className="text-red-500"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    } else if (fileType.includes('word') || fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
      return (
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
          className="text-blue-500"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    } else if (fileType.includes('excel') || fileName.endsWith('.xls') || fileName.endsWith('.xlsx')) {
      return (
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
          className="text-green-500"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    } else if (fileType.includes('image')) {
      return (
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
          className="text-purple-500"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3-3-6 6-3-3-3 3" />
        </svg>
      );
    } else {
      return (
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
          className="text-gray-500"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    }
  }
  
  function getFileType(file: File): string {
    const fileType = file.type;
    const extension = file.name.split('.').pop()?.toUpperCase() || '';
    
    if (fileType.includes('pdf')) {
      return 'PDF';
    } else if (fileType.includes('word') || extension === 'DOC' || extension === 'DOCX') {
      return 'WORD';
    } else if (fileType.includes('excel') || extension === 'XLS' || extension === 'XLSX') {
      return 'EXCEL';
    } else if (fileType.includes('image')) {
      return extension;
    } else {
      return extension || 'FILE';
    }
  }

  return (
    <div className="relative flex items-center p-4 border rounded-lg bg-card">
      <div className="mr-4 flex-shrink-0">
        {preview ? (
          <img src={preview} alt={file.name} className="w-12 h-12 object-cover rounded" />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center bg-muted rounded">
            {getIconForFile(file)}
          </div>
        )}
      </div>
      <div className="flex-grow min-w-0">
        <p className="font-medium truncate" title={file.name}>
          {file.name}
        </p>
        <div className="flex items-center text-xs text-muted-foreground">
          <span>{fileSize}</span>
          <span className="mx-2">•</span>
          <Badge variant="outline" className="text-xs py-0 h-5">
            {getFileType(file)}
          </Badge>
        </div>
      </div>
      {onRemove && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-2"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground hover:text-destructive"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      )}
    </div>
  );
};

export default FilePreview;
