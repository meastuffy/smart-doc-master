
import React from "react";
import Layout from "@/components/layout/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>Last updated: May 21, 2025</p>
          
          <p>
            Please read these Terms of Service carefully before using Smart Doc Master. By accessing or using our service, you agree to be bound by these Terms.
          </p>
          
          <h2>1. Use of Service</h2>
          <p>
            Smart Doc Master provides various document management tools. You agree to use these services only for legal, authorized purposes and in accordance with these Terms. You may not use our services:
          </p>
          <ul>
            <li>In any way that violates any applicable law or regulation</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To transmit any harmful code or materials that are harmful, destructive, or invasive</li>
            <li>To attempt to gain unauthorized access to our servers, systems, or networks</li>
          </ul>
          
          <h2>2. Content Ownership</h2>
          <p>
            You retain all ownership rights to the documents you upload to our service. We do not claim ownership of your content. By uploading content to our service, you grant us a limited license to process and manipulate your documents solely for the purpose of providing our services to you.
          </p>
          
          <h2>3. Service Limitations</h2>
          <p>
            Our free service may have limitations on file size, number of conversions, or processing capacity. We reserve the right to change these limitations at any time.
          </p>
          
          <h2>4. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" without any warranty of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free.
          </p>
          
          <h2>5. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service, including loss of profits, data, or other intangible losses.
          </p>
          
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on our website and updating the "last updated" date.
          </p>
          
          <h2>7. Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms.
          </p>
          
          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
