
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <span className="font-bold text-xl">PDFWizard</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              PDFWizard provides powerful PDF manipulation tools to help you work more efficiently with documents.
              All processing happens in your browser for enhanced security and privacy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools/merge" className="hover:text-primary">Merge PDFs</Link></li>
              <li><Link to="/tools/split" className="hover:text-primary">Split PDFs</Link></li>
              <li><Link to="/tools/compress" className="hover:text-primary">Compress PDFs</Link></li>
              <li><Link to="/tools/convert" className="hover:text-primary">Convert Files</Link></li>
              <li><Link to="/tools/rotate" className="hover:text-primary">Rotate Pages</Link></li>
              <li><Link to="/tools/watermark" className="hover:text-primary">Add Watermark</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {currentYear} PDFWizard. All rights reserved.</p>
          <div className="mt-2 sm:mt-0">
            <span>Made with ❤️ for productivity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
