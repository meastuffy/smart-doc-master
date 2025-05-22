
import FileSaver from 'file-saver';

export const downloadFile = (filename: string, content: Blob | string) => {
  // If content is a string, convert it to a blob
  let blob: Blob;
  if (typeof content === 'string') {
    blob = new Blob([content], { type: 'application/octet-stream' });
  } else {
    blob = content;
  }
  
  FileSaver.saveAs(blob, filename);
};

// Function to simulate downloading a file with more realistic content based on tool type
export const simulateDownload = (filename: string, toolType?: string) => {
  // Create a more realistic PDF-like content based on the tool type
  let dummyContent = "%PDF-1.7\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources 4 0 R /MediaBox [0 0 612 792] /Contents 5 0 R >>\nendobj\n4 0 obj\n<< /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >>\nendobj\n5 0 obj\n<< /Length 68 >>";
  
  // Add different content based on tool type
  if (toolType === 'compress') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This PDF has been successfully compressed.) Tj\n100 650 Td\n/F1 16 Tf\n(File size reduced by approximately 35%) Tj\nET\nendstream";
  } else if (toolType === 'convert') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This PDF has been successfully converted.) Tj\n100 650 Td\n/F1 16 Tf\n(Format conversion completed with high fidelity) Tj\nET\nendstream";
  } else if (toolType === 'rotate') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This PDF has been rotated successfully.) Tj\n100 650 Td\n/F1 16 Tf\n(Pages have been rotated to the specified orientation) Tj\nET\nendstream";
  } else if (toolType === 'watermark') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This PDF has been watermarked.) Tj\n100 650 Td\n/F1 16 Tf\n(CONFIDENTIAL DOCUMENT - WATERMARKED) Tj\n200 400 Td\n/F1 48 Tf\n0.9 0.9 0.9 rg\n(CONFIDENTIAL) Tj\nET\nendstream";
  } else if (toolType === 'protect' || toolType === 'security') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This PDF has been password protected.) Tj\n100 650 Td\n/F1 16 Tf\n(Security features have been applied to this document) Tj\nET\nendstream";
  } else if (toolType === 'unlock') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This PDF has been unlocked successfully.) Tj\n100 650 Td\n/F1 16 Tf\n(Password protection has been removed) Tj\nET\nendstream";
  } else if (toolType === 'edit') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This PDF has been edited successfully.) Tj\n100 650 Td\n/F1 16 Tf\n(Text, images, and formatting have been modified) Tj\nET\nendstream";
  } else if (toolType === 'toword') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This file has been converted to Word format.) Tj\n100 650 Td\n/F1 16 Tf\n(Document is now editable in Microsoft Word) Tj\nET\nendstream";
  } else if (toolType === 'toexcel') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This file has been converted to Excel format.) Tj\n100 650 Td\n/F1 16 Tf\n(Data has been organized into spreadsheet format) Tj\nET\nendstream";
  } else if (toolType === 'toppt') {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This file has been converted to PowerPoint format.) Tj\n100 650 Td\n/F1 16 Tf\n(Slides have been created from the PDF content) Tj\nET\nendstream";
  } else {
    dummyContent += "\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This file has been processed successfully.) Tj\n100 650 Td\n/F1 16 Tf\n(Operation completed - " + (filename || "Output file") + ") Tj\nET\nendstream";
  }
  
  // Add footer to PDF
  dummyContent += "\nendobj\nxref\n0 6\n0000000000 65535 f\n0000000009 00000 n\n0000000058 00000 n\n0000000115 00000 n\n0000000216 00000 n\n0000000300 00000 n\ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n420\n%%EOF";
  
  // Create appropriate MIME type
  let mimeType = 'application/pdf';
  if (filename.endsWith('.docx')) {
    mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  } else if (filename.endsWith('.xlsx')) {
    mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  } else if (filename.endsWith('.pptx')) {
    mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
  }
  
  const blob = new Blob([dummyContent], { type: mimeType });
  FileSaver.saveAs(blob, filename);
};

