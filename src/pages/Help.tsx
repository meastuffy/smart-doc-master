
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { 
  HelpCircle, 
  ChevronRight, 
  Search,
  FileText,
  Scissors,
  FileOutput,
  FileDigit,
  PenTool
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("general");

  const faqCategories = [
    {
      id: "general",
      name: "General Questions",
      faqs: [
        {
          id: "security",
          question: "How secure are my documents?",
          answer: "Your documents are processed securely on our servers and are automatically deleted within 24 hours. We do not access or store your files permanently, and all uploads use encrypted connections."
        },
        {
          id: "size-limit",
          question: "Is there a file size limit?",
          answer: "Yes, our free service has a limit of 100MB per file. For larger files, consider splitting your PDF first or compressing it before uploading."
        },
        {
          id: "free",
          question: "Is Smart Doc Master free to use?",
          answer: "Yes, most of our basic tools are free to use. We may offer premium features or higher limits for paid subscriptions in the future, but our core functionality will always have a free tier."
        },
        {
          id: "supported-formats",
          question: "What file formats do you support?",
          answer: "We support a wide range of formats including PDF, DOCX, XLSX, PPTX, JPG, PNG, and many more. Check our conversion tools for the full list of supported formats."
        }
      ]
    },
    {
      id: "tools",
      name: "Tool Usage",
      faqs: [
        {
          id: "merge",
          question: "How do I merge multiple PDF files?",
          answer: "To merge PDFs, navigate to our Merge PDF tool, upload the files you want to combine, arrange them in the desired order by dragging and dropping, and then click the \"Merge\" button. The combined PDF will be generated for you to download."
        },
        {
          id: "convert",
          question: "Can I convert PDFs to editable formats?",
          answer: "Yes, you can convert PDFs to Word, Excel, PowerPoint, and other formats. Simply use the appropriate conversion tool, upload your PDF, and wait for the conversion to complete. The quality of the conversion depends on the structure and content of your original PDF."
        },
        {
          id: "compress",
          question: "How much can I compress my PDF files?",
          answer: "Our compression tool typically reduces file sizes by 30-70%, depending on the content of your PDF. Documents with many images can achieve higher compression rates compared to text-only documents."
        },
        {
          id: "ocr",
          question: "How accurate is the OCR feature?",
          answer: "Our OCR (Optical Character Recognition) feature has an accuracy rate of approximately 95-98% for clear, high-quality scans. The accuracy may decrease for low-quality scans, unusual fonts, or complex layouts."
        }
      ]
    },
    {
      id: "account",
      name: "Account & Privacy",
      faqs: [
        {
          id: "account-needed",
          question: "Do I need to create an account?",
          answer: "No, you can use most of our tools without creating an account. However, creating a free account gives you access to your document history and allows you to save frequently used settings."
        },
        {
          id: "data-retention",
          question: "How long do you keep my files?",
          answer: "Files are automatically deleted from our servers within 24 hours after processing unless you have an account and explicitly choose to save them. Even then, you have full control over deleting them anytime."
        }
      ]
    }
  ];

  const filteredFAQs = searchQuery.trim() ? 
    faqCategories.map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.faqs.length > 0) : 
    faqCategories;

  const popularTools = [
    { name: "Merge PDF", description: "Combine multiple PDF files into a single document.", path: "/tools/merge", icon: <FileText className="h-5 w-5 text-primary" /> },
    { name: "Split PDF", description: "Extract pages or split a PDF into multiple files.", path: "/tools/split", icon: <Scissors className="h-5 w-5 text-primary" /> },
    { name: "PDF to Word", description: "Convert PDF documents to editable Word files.", path: "/tools/pdf-to-word", icon: <FileOutput className="h-5 w-5 text-primary" /> },
    { name: "Compress PDF", description: "Reduce the file size of your PDF documents.", path: "/tools/compress", icon: <FileDigit className="h-5 w-5 text-primary" /> },
    { name: "Edit PDF", description: "Make changes to your PDF files online.", path: "/tools/edit-pdf", icon: <PenTool className="h-5 w-5 text-primary" /> }
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Help Center</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions about using Smart Doc Master's tools and features.
          </p>
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for answers..."
              className="pl-10 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {faqCategories.map((category) => (
                <Button 
                  key={category.id}
                  variant={expandedCategory === category.id ? "default" : "outline"}
                  onClick={() => setExpandedCategory(category.id)}
                  className="mb-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* FAQ Accordions */}
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category) => (
                (expandedCategory === category.id || searchQuery.trim() !== "") && category.faqs.length > 0 ? (
                  <div key={category.id} className="mb-8">
                    {searchQuery.trim() !== "" && <h3 className="text-lg font-medium mb-4">{category.name}</h3>}
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6 mb-3 bg-card">
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ) : null
              ))
            ) : (
              <div className="text-center py-12 border rounded-lg bg-muted/20">
                <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground mb-4">Try a different search term or browse the categories</p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </div>
            )}
          </div>
          
          {/* Side Panel */}
          <div className="space-y-8">
            {/* Popular Tools */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Popular Tools</h2>
              <div className="space-y-4">
                {popularTools.map((tool, index) => (
                  <Card key={index} className="transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <a href={tool.path} className="flex items-start gap-3">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full">
                          {tool.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{tool.name}</h3>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </div>
                        <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground self-center" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="text-center pt-4">
                  <a href="/tools" className="text-primary hover:underline inline-flex items-center">
                    View all tools
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Support */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
                <p className="mb-6">If you couldn't find the answer you're looking for, feel free to contact our support team.</p>
                <Button asChild className="w-full">
                  <a href="/contact" className="inline-flex items-center justify-center">
                    Contact Support
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
