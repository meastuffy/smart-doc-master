
import React from "react";
import Layout from "@/components/layout/Layout";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>Last updated: May 21, 2025</p>
          
          <p>
            At Smart Doc Master, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in various ways:
          </p>
          <ul>
            <li><strong>Documents and Files:</strong> When you upload documents for processing, we temporarily store these files to provide our services.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with our website, including pages visited, time spent, and actions taken.</li>
            <li><strong>Device Information:</strong> We may collect information about your device, including browser type, operating system, and IP address.</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes:
          </p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To improve our website and user experience</li>
            <li>To monitor usage of our services</li>
            <li>To detect and prevent technical issues</li>
          </ul>
          
          <h2>Document Security</h2>
          <p>
            Documents uploaded to Smart Doc Master are processed on our secure servers. We do not permanently store your documents unless explicitly requested. Files are typically deleted from our servers within 24 hours after processing.
          </p>
          
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related services, or assist us in analyzing how our services are used.
          </p>
          
          <h2>Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
