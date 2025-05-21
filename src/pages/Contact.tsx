
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { 
  Mail, 
  Send, 
  MessageSquare, 
  Clock, 
  HelpCircle,
  Phone,
  MapPin,
  Inbox
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactChannels = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "support@smartdocmaster.com",
      description: "For general inquiries and support"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Monday to Friday, 9AM-6PM EST"
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      title: "Live Chat",
      value: "Available on website",
      description: "For immediate assistance"
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a question, suggestion, or need help with our tools? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Inbox className="h-5 w-5" />
                    Send Us a Message
                  </h2>
                </div>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-muted/30"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-muted/30"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Help with PDF conversion"
                        required
                        className="bg-muted/30"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your issue or question"
                        rows={6}
                        required
                        className="bg-muted/30"
                      />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full py-6">
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Channels */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Contact Channels</h2>
                  <div className="space-y-6">
                    {contactChannels.map((channel, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full">
                          {channel.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{channel.title}</h3>
                          <p className="text-primary font-medium">{channel.value}</p>
                          <p className="text-sm text-muted-foreground">{channel.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 3:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <div className="pt-2 text-sm text-muted-foreground">
                      Response time: We aim to respond to all inquiries within 24-48 hours during business days.
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Help Center Link */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Find answers to common questions in our help center before contacting support.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/help" className="inline-flex items-center">
                          Visit Help Center
                          <HelpCircle className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Office Location */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Office Location
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    123 Tech Boulevard, Suite 456<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
