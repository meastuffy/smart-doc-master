import React, { useState } from "react";
import ToolLayout from "@/components/layout/ToolLayout";
import { useToast } from "@/hooks/use-toast";
import { Edit, ImagePlus, Type, Shapes } from "lucide-react";
import { simulateDownload } from "@/utils/downloadUtils";
import { validatePdfFile } from "@/utils/pdfUtils";

const EditPdf = () => {
  const [result, setResult] = useState<string | null>(null);
  const [editorVisible, setEditorVisible] = useState(false);
  const [originalFilename, setOriginalFilename] = useState<string>("");
  const { toast } = useToast();

  const handleEdit = async (files: File[]) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to edit.",
        variant: "destructive",
      });
      return;
    }

    // Validate PDF file
    if (!validatePdfFile(files[0], toast)) return;

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setEditorVisible(true);
    setOriginalFilename(files[0].name);
    
    toast({
      title: "Success!",
      description: "Your PDF has been prepared for editing. You can now make changes and save the result.",
    });
  };

  const handleSave = () => {
    setResult("edited-" + originalFilename);
    toast({
      title: "PDF Saved",
      description: "Your edited PDF is ready to download.",
    });
  };

  const handleDownload = () => {
    if (result) {
      simulateDownload(result, 'edit');
      toast({
        title: "Downloaded",
        description: "Your edited PDF has been downloaded.",
      });
    }
  };

  return (
    <ToolLayout
      title="Edit PDF"
      description="Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content."
      acceptedFileTypes={["application/pdf", ".pdf"]}
      maxFiles={1}
      buttonText="Edit PDF"
      processingText="Loading PDF editor..."
      onProcess={handleEdit}
    >
      {editorVisible && (
        <div className="bg-card border rounded-lg shadow-sm p-6 text-center">
          <h3 className="text-lg font-medium mb-4">PDF Editor</h3>
          
          <div className="flex justify-center space-x-4 mb-6">
            <button className="flex flex-col items-center p-3 bg-muted rounded-md hover:bg-primary/10 transition-colors">
              <Type size={24} className="mb-1" />
              <span className="text-xs">Text</span>
            </button>
            <button className="flex flex-col items-center p-3 bg-muted rounded-md hover:bg-primary/10 transition-colors">
              <ImagePlus size={24} className="mb-1" />
              <span className="text-xs">Image</span>
            </button>
            <button className="flex flex-col items-center p-3 bg-muted rounded-md hover:bg-primary/10 transition-colors">
              <Shapes size={24} className="mb-1" />
              <span className="text-xs">Shape</span>
            </button>
            <button className="flex flex-col items-center p-3 bg-muted rounded-md hover:bg-primary/10 transition-colors">
              <Edit size={24} className="mb-1" />
              <span className="text-xs">Draw</span>
            </button>
          </div>
          
          <div className="p-10 border-2 border-dashed rounded-md text-muted-foreground mb-4">
            PDF Editor Preview - Document loaded and ready to edit
          </div>
          
          <button 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      )}

      {result && (
        <div className="bg-card border rounded-lg shadow-sm p-6 mt-6">
          <h3 className="text-lg font-medium mb-4">PDF Edited</h3>
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="mb-2">Your PDF has been edited successfully.</p>
            <button 
              onClick={handleDownload}
              className="text-primary font-medium hover:underline"
            >
              Download Edited PDF
            </button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default EditPdf;
