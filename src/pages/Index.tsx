
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 -z-10" />
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-5 animate-fade-in">
                  All-in-One Online PDF Tool
                </h1>
                <p className="text-xl text-muted-foreground mb-10 animate-slide-in">
                  Edit, Convert, and Manage Your Documents. Whether you're a student, professional, or business owner, Smart Doc Master helps you handle your documents effortlessly—just like magic.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/tools">
                      Get Started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-5 w-5"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                    alt="PDF Tools"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-bold mb-2">PDF Toolkit</h3>
                      <p>Manage your documents easily and securely</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to work efficiently with PDF files
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              }
              title="Merge PDFs"
              description="Combine multiple PDF files into a single document with ease."
            />
            
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M15 3v18" />
                </svg>
              }
              title="Split PDF"
              description="Extract pages or split large PDFs into smaller documents."
            />
            
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="m7 11 4-7 4 7" />
                  <path d="M4 17a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3H4Z" />
                </svg>
              }
              title="Convert Files"
              description="Convert PDFs to Word, Excel, and other formats, or vice versa."
            />
            
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="m21 8-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                  <path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9" />
                </svg>
              }
              title="Compress PDF"
              description="Reduce file size while maintaining quality for easier sharing."
            />
            
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M4 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
                  <path d="M16 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
                  <path d="M10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
                  <path d="m16 12-2-2" />
                  <path d="m8 12 2-2" />
                </svg>
              }
              title="Rotate & Organize"
              description="Rotate pages, reorder them, or add page numbers to your PDFs."
            />
            
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M5 5v14h14V5H5z" />
                  <path d="M20 9H4" />
                  <path d="m13.006 12-4.4 4.93 7.787.07-3.387-5Z" />
                </svg>
              }
              title="Add Watermark"
              description="Apply text or image watermarks to protect your documents."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Process your first document in seconds. No registration required.
            </p>
            <Button size="lg" asChild>
              <Link to="/tools">
                Try It Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="relative p-6 border rounded-xl transition-all bg-card hover:shadow-md hover:border-primary/50">
      <div className="mb-4 rounded-lg h-12 w-12 flex items-center justify-center bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
