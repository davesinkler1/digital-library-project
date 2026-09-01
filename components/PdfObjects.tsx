"use client";

import { useEffect, useRef } from "react";
import PDFObject from "pdfobject";

interface PdfViewerProps {
  url: string;
}

export default function PdfObjects({ url }: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the container element exists before embedding
    if (containerRef.current) {
      const options = {
        height: "1500px",
        width: "1500px",
        fallbackLink: "<p>This browser does not support inline PDFs. Please <a href='[url]'>download the PDF</a> to view it.</p>"
      };

      // Embed the PDF into our referenced div container
      PDFObject.embed(url, containerRef.current, options);
    }
  }, [url]);

  console.log('pdf url: ' + url);

  return (
    <div 
      ref={containerRef} 
      className="w-fit h-[80vh] border border-gray-200 rounded-lg"
      style={{ minHeight: "1500px", minWidth: "1500px" }} // Fallback height fallback if Tailwind isn't fully loaded
    />
  );
}