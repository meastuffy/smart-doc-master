
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RecentFile {
  id: string;
  name: string;
  operation: string;
  timestamp: number;
  size: number;
  url?: string;
}

const RecentFiles = () => {
  const [recentFiles, setRecentFiles] = useState<RecentFile[]>([]);

  useEffect(() => {
    // Load recent files from localStorage
    const loadRecentFiles = () => {
      try {
        const storedFiles = localStorage.getItem("recentFiles");
        if (storedFiles) {
          const files = JSON.parse(storedFiles) as RecentFile[];
          // Sort by most recent
          files.sort((a, b) => b.timestamp - a.timestamp);
          setRecentFiles(files);
        }
      } catch (error) {
        console.error("Failed to load recent files:", error);
        toast.error("Failed to load recent files history.");
      }
    };

    loadRecentFiles();
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("recentFiles");
    setRecentFiles([]);
    toast.success("File history cleared successfully.");
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Layout>
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Recent Files</h1>
          <p className="text-muted-foreground">
            View a history of your recently processed files. Files are stored only in your browser and are not uploaded to any server.
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>File History</CardTitle>
              <CardDescription>
                Your recently processed documents
              </CardDescription>
            </div>
            {recentFiles.length > 0 && (
              <Button variant="outline" onClick={clearHistory}>
                Clear History
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {recentFiles.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>File Name</TableHead>
                      <TableHead>Operation</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentFiles.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell className="font-medium">{file.name}</TableCell>
                        <TableCell>{file.operation}</TableCell>
                        <TableCell>{formatTimestamp(file.timestamp)}</TableCell>
                        <TableCell>{formatFileSize(file.size)}</TableCell>
                        <TableCell>
                          {file.url ? (
                            <Button variant="outline" size="sm" asChild>
                              <a href={file.url} download={file.name}>
                                Download
                              </a>
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" disabled>
                              Expired
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="mb-4 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto mb-3"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 3v18" />
                  </svg>
                  <p className="text-lg">No recent files found</p>
                </div>
                <Button asChild>
                  <a href="/tools">Process a Document</a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RecentFiles;
