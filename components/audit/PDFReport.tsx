'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Font, StyleSheet } from '@react-pdf/renderer';
import { ScoreMetric, Recommendation } from '@/types/lighthouse';

// Register font family
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf' },
    { src: '/fonts/Inter-Bold.ttf', fontWeight: 700 }
  ]
});

// Dynamically import the PDF Viewer component
const PDFContent = dynamic(() => import('./PDFContent'), {
  ssr: false,
  loading: () => <PDFLoading />
});

function PDFLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <p className="text-gray-600">Loading PDF viewer...</p>
    </div>
  );
}

interface PDFReportProps {
  requestedUrl: string;
  scores: ScoreMetric[];
  recommendations: Recommendation[];
}

export default function PDFReport(props: PDFReportProps) {
  const [logoBase64, setLogoBase64] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadLogo = async () => {
      try {
        const response = await fetch('/images/logos/cclogo-new.png');
        const blob = await response.blob();
        const reader = new FileReader();
        
        reader.onloadend = () => {
          setLogoBase64(reader.result as string);
          setIsLoading(false);
        };
        
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error loading logo:', error);
        setIsLoading(false);
      }
    };

    loadLogo();
  }, []);

  if (isLoading) {
    return <PDFLoading />;
  }

  return <PDFContent {...props} logoBase64={logoBase64} />;
} 