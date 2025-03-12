'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ScoreMetric, Recommendation } from '@/types/lighthouse';
import { Style } from '@react-pdf/types';

// Dynamically import the entire PDF viewer component
const PDFReport = dynamic(
  () => import('./PDFReport'),
  {
    ssr: false,
    loading: () => <div className="w-full h-screen flex items-center justify-center">Loading PDF viewer...</div>
  }
);

interface AuditPDFProps {
  requestedUrl: string;
  scores: ScoreMetric[];
  recommendations: Recommendation[];
}

export default function AuditPDF(props: AuditPDFProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-screen flex items-center justify-center">Loading PDF viewer...</div>;
  }

  return (
    <React.Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading PDF viewer...</div>}>
      <PDFReport {...props} />
    </React.Suspense>
  );
} 