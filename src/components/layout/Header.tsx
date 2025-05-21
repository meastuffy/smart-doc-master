
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span className="font-bold text-xl">Smart Doc Master</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              to="/tools"
              className="transition-colors hover:text-primary"
            >
              Tools
            </Link>
            <Link
              to="/recent"
              className="transition-colors hover:text-primary"
            >
              Recent Files
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link to="/tools">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
