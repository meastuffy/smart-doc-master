
import React from "react";
import Layout from "@/components/layout/Layout";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Help Center</h1>
        </div>
        
        <div className="mb-10">
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about using Smart Doc Master's tools and features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How secure are my documents?</AccordionTrigger>
                <AccordionContent>
                  Your documents are processed securely on our servers and are automatically deleted within 24 hours. We do not access or store your files permanently, and all uploads use encrypted connections.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a file size limit?</AccordionTrigger>
                <AccordionContent>
                  Yes, our free service has a limit of 100MB per file. For larger files, consider splitting your PDF first or compressing it before uploading.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I merge multiple PDF files?</AccordionTrigger>
                <AccordionContent>
                  To merge PDFs, navigate to our Merge PDF tool, upload the files you want to combine, arrange them in the desired order by dragging and dropping, and then click the "Merge" button. The combined PDF will be generated for you to download.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I convert PDFs to editable formats?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can convert PDFs to Word, Excel, PowerPoint, and other formats. Simply use the appropriate conversion tool, upload your PDF, and wait for the conversion to complete. The quality of the conversion depends on the structure and content of your original PDF.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Is Smart Doc Master free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, most of our basic tools are free to use. We may offer premium features or higher limits for paid subscriptions in the future, but our core functionality will always have a free tier.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Popular Tools</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Merge PDF</h3>
                <p className="text-sm text-muted-foreground mb-3">Combine multiple PDF files into a single document.</p>
                <a href="/tools/merge" className="text-sm text-primary hover:underline">Use Tool →</a>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Split PDF</h3>
                <p className="text-sm text-muted-foreground mb-3">Extract pages or split a PDF into multiple files.</p>
                <a href="/tools/split" className="text-sm text-primary hover:underline">Use Tool →</a>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">PDF to Word</h3>
                <p className="text-sm text-muted-foreground mb-3">Convert PDF documents to editable Word files.</p>
                <a href="/tools/pdf-to-word" className="text-sm text-primary hover:underline">Use Tool →</a>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Compress PDF</h3>
                <p className="text-sm text-muted-foreground mb-3">Reduce the file size of your PDF documents.</p>
                <a href="/tools/compress" className="text-sm text-primary hover:underline">Use Tool →</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 border rounded-xl bg-muted/20">
          <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
          <p className="mb-4">If you couldn't find the answer you're looking for, feel free to contact our support team.</p>
          <a href="/contact" className="inline-flex items-center text-primary hover:underline">
            Contact Support
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
