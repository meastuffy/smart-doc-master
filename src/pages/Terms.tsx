
import React from "react";
import Layout from "@/components/layout/Layout";
import { FileText, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: May 21, 2025</p>
        </div>
        
        {/* Quick Navigation */}
        <Card className="mb-10 bg-muted/30">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a href="#use" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Use of Service
              </a>
              <a href="#ownership" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Content Ownership
              </a>
              <a href="#limitations" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Service Limitations
              </a>
              <a href="#warranties" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Disclaimer of Warranties
              </a>
              <a href="#liability" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Limitation of Liability
              </a>
              <a href="#changes" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Changes to Terms
              </a>
              <a href="#termination" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Termination
              </a>
              <a href="#law" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Governing Law
              </a>
            </div>
          </CardContent>
        </Card>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Please read these Terms of Service carefully before using Smart Doc Master. By accessing or using our service, you agree to be bound by these Terms.
          </p>
          
          <h2 id="use" className="scroll-mt-24">1. Use of Service</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              Smart Doc Master provides various document management tools. You agree to use these services only for legal, authorized purposes and in accordance with these Terms. You may not use our services:
            </p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To transmit any harmful code or materials that are harmful, destructive, or invasive</li>
              <li>To attempt to gain unauthorized access to our servers, systems, or networks</li>
            </ul>
          </div>
          
          <h2 id="ownership" className="scroll-mt-24">2. Content Ownership</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              You retain all ownership rights to the documents you upload to our service. We do not claim ownership of your content. By uploading content to our service, you grant us a limited license to process and manipulate your documents solely for the purpose of providing our services to you.
            </p>
          </div>
          
          <h2 id="limitations" className="scroll-mt-24">3. Service Limitations</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              Our free service may have limitations on file size, number of conversions, or processing capacity. We reserve the right to change these limitations at any time.
            </p>
          </div>
          
          <h2 id="warranties" className="scroll-mt-24">4. Disclaimer of Warranties</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              Our services are provided "as is" without any warranty of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free.
            </p>
          </div>
          
          <h2 id="liability" className="scroll-mt-24">5. Limitation of Liability</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service, including loss of profits, data, or other intangible losses.
            </p>
          </div>
          
          <h2 id="changes" className="scroll-mt-24">6. Changes to Terms</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on our website and updating the "last updated" date.
            </p>
          </div>
          
          <h2 id="termination" className="scroll-mt-24">7. Termination</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms.
            </p>
          </div>
          
          <h2 id="law" className="scroll-mt-24">8. Governing Law</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </div>
          
          <h2 id="contact" className="scroll-mt-24">9. Contact Us</h2>
          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <p>
              If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-primary hover:underline font-medium">Contact page</a>.
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex justify-between items-center">
          <a href="/privacy" className="text-primary hover:underline flex items-center gap-1">
            <ChevronRight className="h-4 w-4 rotate-180" />
            Privacy Policy
          </a>
          <a href="/help" className="text-primary hover:underline flex items-center gap-1">
            Help Center
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
