
/**
 * Utility function to validate if a file is a PDF
 * @param file The file to check
 * @returns boolean indicating if the file is a valid PDF
 */
export const isPdfFile = (file: File): boolean => {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
};

/**
 * Validates a PDF file and shows an error toast if invalid
 * @param file The file to validate
 * @param toast Toast function to show errors
 * @returns boolean indicating if the file is valid
 */
export const validatePdfFile = (file: File, toast: any): boolean => {
  if (!isPdfFile(file)) {
    toast({
      title: "Error",
      description: `${file.name} is not a supported file type. Please upload a PDF file.`,
      variant: "destructive",
    });
    return false;
  }
  return true;
};
