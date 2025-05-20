import { v4 as uuidv4 } from 'uuid';

// Interface for recently processed files
export interface RecentFile {
  id: string;
  name: string;
  operation: string;
  timestamp: number;
  size: number;
  url?: string;
}

// Get Recent Files from localStorage
export const getRecentFiles = (): RecentFile[] => {
  try {
    const storedFiles = localStorage.getItem("recentFiles");
    if (storedFiles) {
      return JSON.parse(storedFiles);
    }
  } catch (error) {
    console.error("Failed to load recent files:", error);
  }
  return [];
};

// Save a processed file to recent files
export const saveToRecentFiles = (file: {
  name: string;
  operation: string;
  size: number;
  url?: string;
}): void => {
  try {
    const recentFiles = getRecentFiles();
    
    // Create new entry
    const newFile: RecentFile = {
      id: uuidv4(),
      name: file.name,
      operation: file.operation,
      timestamp: Date.now(),
      size: file.size,
      url: file.url,
    };
    
    // Add to beginning of array
    recentFiles.unshift(newFile);
    
    // Keep only the last 20 files
    const trimmedFiles = recentFiles.slice(0, 20);
    
    // Save to localStorage
    localStorage.setItem("recentFiles", JSON.stringify(trimmedFiles));
  } catch (error) {
    console.error("Failed to save to recent files:", error);
  }
};

// Create downloadable URL for a processed file
export const createDownloadableUrl = (data: Blob, fileName: string): string => {
  return URL.createObjectURL(data);
};

// Format file size for display
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Check if a file is PDF
export const isPdfFile = (file: File): boolean => {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
};

// Check if a file is an image
export const isImageFile = (file: File): boolean => {
  return file.type.startsWith('image/');
};

// Check if a file is a document (Word, Excel, PowerPoint)
export const isDocumentFile = (file: File): boolean => {
  const name = file.name.toLowerCase();
  return (
    name.endsWith('.doc') || 
    name.endsWith('.docx') || 
    name.endsWith('.xls') || 
    name.endsWith('.xlsx') || 
    name.endsWith('.ppt') || 
    name.endsWith('.pptx')
  );
};

// Generate a safe download filename
export const generateSafeFilename = (
  originalName: string, 
  operation: string,
  extension: string = ''
): string => {
  // Extract base filename without extension
  const nameParts = originalName.split('.');
  let baseName;
  
  if (nameParts.length > 1) {
    // Remove the last part (extension)
    nameParts.pop();
    baseName = nameParts.join('.');
  } else {
    baseName = originalName;
  }
  
  // Clean up the name
  baseName = baseName.replace(/[^a-zA-Z0-9_\s-]/g, '');
  
  // Add operation suffix and extension
  return `${baseName}-${operation}${extension ? `.${extension}` : ''}`;
};
