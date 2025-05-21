
import React from "react";
import Layout from "@/components/layout/Layout";
import { Info, Users, Check, Star, Shield, Globe, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Info className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">About Smart Doc Master</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive online document management tool designed to make working with PDFs and other document formats simple and efficient.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                Our mission is to provide accessible, user-friendly tools that empower individuals and businesses to manage their documents efficiently without requiring specialized software or technical expertise.
              </p>
            </div>
          </Card>
        </div>
        
        {/* Features Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">PDF Processing</h3>
                    <p className="text-muted-foreground">PDF merging, splitting, and compression to optimize your documents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Format Conversion</h3>
                    <p className="text-muted-foreground">Convert between PDF, Word, Excel, PowerPoint, and other formats easily</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Document Protection</h3>
                    <p className="text-muted-foreground">Editing, protection, and digital signing functionality for your documents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">OCR Technology</h3>
                    <p className="text-muted-foreground">Extract text from scanned documents with Optical Character Recognition</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Page Management</h3>
                    <p className="text-muted-foreground">Organization, rotation, and watermarking tools for document pages</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Advantages Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Advantage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-medium mb-2">Privacy</h3>
                  <p className="text-muted-foreground">Your documents are processed securely and are not stored permanently on our servers.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-medium mb-2">Ease of Use</h3>
                  <p className="text-muted-foreground">Our intuitive interface makes complex document tasks simple for anyone to complete.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-medium mb-2">Accessibility</h3>
                  <p className="text-muted-foreground">Our tools are available from any device with an internet connection, with no downloads required.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-medium mb-2">Quality</h3>
                  <p className="text-muted-foreground">We maintain the highest standards for output quality, ensuring your documents look professional.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="text-lg mb-6">
                Smart Doc Master is developed by a dedicated team of software engineers and document management specialists who are passionate about creating tools that make people's work lives easier and more productive.
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg max-h-60 object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-primary/5 border border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg mb-6">
                We welcome your feedback and questions. Get in touch with our team to learn more about our services.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
