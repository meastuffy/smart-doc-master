
import React from "react";
import Layout from "@/components/layout/Layout";
import { Shield, ChevronRight, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 21, 2025</p>
        </div>
        
        {/* Introduction Card */}
        <Card className="mb-10">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-lg">
                  At Smart Doc Master, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <Card className="mb-10 bg-muted/30">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a href="#collect" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Information We Collect
              </a>
              <a href="#use" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                How We Use Your Information
              </a>
              <a href="#security" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Document Security
              </a>
              <a href="#cookies" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Cookies and Tracking
              </a>
              <a href="#thirdparty" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Third-Party Services
              </a>
              <a href="#retention" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Data Retention
              </a>
              <a href="#changes" className="flex items-center gap-1 text-primary hover:underline">
                <ChevronRight className="h-4 w-4" />
                Changes to Privacy Policy
              </a>
            </div>
          </CardContent>
        </Card>
        
        <div className="prose prose-lg max-w-none">
          <h2 id="collect" className="scroll-mt-24">Information We Collect</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We may collect information about you in various ways:
            </p>
            <ul>
              <li><strong>Documents and Files:</strong> When you upload documents for processing, we temporarily store these files to provide our services.</li>
              <li><strong>Usage Data:</strong> We collect information about how you interact with our website, including pages visited, time spent, and actions taken.</li>
              <li><strong>Device Information:</strong> We may collect information about your device, including browser type, operating system, and IP address.</li>
            </ul>
          </div>
          
          <h2 id="use" className="scroll-mt-24">How We Use Your Information</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We may use the information we collect for various purposes:
            </p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To improve our website and user experience</li>
              <li>To monitor usage of our services</li>
              <li>To detect and prevent technical issues</li>
            </ul>
          </div>
          
          <h2 id="security" className="scroll-mt-24">Document Security</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              Documents uploaded to Smart Doc Master are processed on our secure servers. We do not permanently store your documents unless explicitly requested. Files are typically deleted from our servers within 24 hours after processing.
            </p>
          </div>
          
          <h2 id="cookies" className="scroll-mt-24">Cookies and Tracking Technologies</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>
          
          <h2 id="thirdparty" className="scroll-mt-24">Third-Party Services</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related services, or assist us in analyzing how our services are used.
            </p>
          </div>
          
          <h2 id="retention" className="scroll-mt-24">Data Retention</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
          </div>
          
          <h2 id="changes" className="scroll-mt-24">Changes to This Privacy Policy</h2>
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
            </p>
          </div>
          
          <h2 id="contact" className="scroll-mt-24">Contact Us</h2>
          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <p>
              If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-primary hover:underline font-medium">Contact page</a>.
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex justify-between items-center">
          <a href="/terms" className="text-primary hover:underline flex items-center gap-1">
            <ChevronRight className="h-4 w-4 rotate-180" />
            Terms of Service
          </a>
          <a href="/contact" className="text-primary hover:underline flex items-center gap-1">
            Contact Us
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
