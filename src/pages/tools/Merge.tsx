
import React, { useState } from "react";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import FileUploader from "@/components/FileUploader";
import FilePreview from "@/components/FilePreview";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';

const Merge = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFilesSelected = (selectedFiles: File[]) => {
    // Filter to only accept PDF files
    const pdfFiles = selectedFiles.filter(file => 
      file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
    );
    
    if (pdfFiles.length < selectedFiles.length) {
      toast.warning("Only PDF files can be merged. Non-PDF files were ignored.");
    }
    
    setFiles(prev => [...prev, ...pdfFiles]);
  };
  
  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleReorderFile = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === files.length - 1)) {
      return;
    }
    
    const newFiles = [...files];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    [newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]];
    setFiles(newFiles);
  };

  const handleMergePDFs = async () => {
    if (files.length < 2) {
      toast.error("Please upload at least 2 PDF files to merge.");
      return;
    }
    
    try {
      setIsProcessing(true);
      
      // Create a new PDF document
      const mergedPdf = await PDFDocument.create();
      
      // Process each file
      for (const file of files) {
        // Convert File to ArrayBuffer
        const arrayBuffer = await file.arrayBuffer();
        
        // Load the PDF document
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        
        // Get all pages from the document
        const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        
        // Add each page to the merged document
        pages.forEach(page => mergedPdf.addPage(page));
      }
      
      // Serialize the merged PDF document
      const mergedPdfBytes = await mergedPdf.save();
      
      // Convert to Blob and download
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      saveAs(blob, 'merged-document.pdf');
      
      toast.success("PDFs successfully merged!");
    } catch (error) {
      console.error('Error merging PDFs:', error);
      toast.error("Failed to merge PDFs. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Merge PDF Files</h1>
            <p className="text-muted-foreground">
              Combine multiple PDF documents into a single file. Drag and drop files to rearrange their order.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload Files</CardTitle>
              <CardDescription>
                Upload the PDF files you want to merge. Maximum 10 files, 50MB each.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUploader
                accept=".pdf"
                multiple={true}
                maxSize={50}
                onFilesSelected={handleFilesSelected}
              />
            </CardContent>
          </Card>
          
          {files.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Selected Files</CardTitle>
                <CardDescription>
                  The files will be merged in the order shown below. Drag to reorder.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex flex-col items-center mr-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleReorderFile(index, 'up')}
                          disabled={index === 0}
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
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleReorderFile(index, 'down')}
                          disabled={index === files.length - 1}
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
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-grow">
                        <FilePreview 
                          file={file} 
                          onRemove={() => handleRemoveFile(index)} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col w-full space-y-2">
                  <Button 
                    onClick={handleMergePDFs} 
                    disabled={isProcessing || files.length < 2}
                    className="w-full"
                  >
                    {isProcessing ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>Merge PDFs</>
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setFiles([])}
                    className="w-full"
                  >
                    Clear All
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Merge;
