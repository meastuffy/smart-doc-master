
import React from "react";
import Layout from "@/components/layout/Layout";
import { Info } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Info className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">About Smart Doc Master</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Smart Doc Master is a comprehensive online document management tool designed to make working with PDFs and other document formats simple and efficient.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide accessible, user-friendly tools that empower individuals and businesses to manage their documents efficiently without requiring specialized software or technical expertise.
          </p>
          
          <h2>What We Offer</h2>
          <p>
            Smart Doc Master provides a wide range of document management tools, including:
          </p>
          <ul>
            <li>PDF merging, splitting, and compression</li>
            <li>File format conversion (PDF to Word, Excel, PowerPoint, and more)</li>
            <li>Document editing, protection, and signing</li>
            <li>OCR (Optical Character Recognition) for scanned documents</li>
            <li>Page organization, rotation, and watermarking</li>
          </ul>
          
          <h2>Our Advantage</h2>
          <p>
            What sets Smart Doc Master apart is our commitment to:
          </p>
          <ul>
            <li><strong>Privacy:</strong> Your documents are processed securely and are not stored permanently on our servers.</li>
            <li><strong>Ease of Use:</strong> Our intuitive interface makes complex document tasks simple for anyone to complete.</li>
            <li><strong>Accessibility:</strong> Our tools are available from any device with an internet connection, with no downloads or installations required.</li>
            <li><strong>Quality:</strong> We maintain the highest standards for output quality, ensuring your documents look professional.</li>
          </ul>
          
          <h2>Our Team</h2>
          <p>
            Smart Doc Master is developed by a dedicated team of software engineers and document management specialists who are passionate about creating tools that make people's work lives easier and more productive.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            We welcome your feedback and questions. Please visit our <a href="/contact" className="text-primary hover:underline">Contact page</a> to get in touch with our team.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
