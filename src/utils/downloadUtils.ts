
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

// Function to simulate downloading a file - for demo purposes
export const simulateDownload = (filename: string) => {
  // For a real app, this would be replaced with actual file data
  // For now, we'll create a small PDF-like file for demonstration
  const dummyContent = "%PDF-1.7\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources 4 0 R /MediaBox [0 0 612 792] /Contents 5 0 R >>\nendobj\n4 0 obj\n<< /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >>\nendobj\n5 0 obj\n<< /Length 68 >>\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(This is a simulated PDF file.) Tj\nET\nendstream\nendobj\nxref\n0 6\n0000000000 65535 f\n0000000009 00000 n\n0000000058 00000 n\n0000000115 00000 n\n0000000216 00000 n\n0000000300 00000 n\ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n420\n%%EOF";
  
  const blob = new Blob([dummyContent], { type: 'application/pdf' });
  FileSaver.saveAs(blob, filename);
};
