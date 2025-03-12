'use client';

import { LighthouseAnalyzer } from '@/utils/lighthouseAnalyzer';
import ScoreCard from '@/components/audit/ScoreCard';
import RecommendationList from '@/components/audit/RecommendationList';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Copyright from "@/components/ui/Copyright";
import { convertUrlsToLinks } from '@/utils/textUtils';
import AuditPDF from '@/components/audit/AuditPDF';
import { useState } from 'react';

import sampleData from '@/scans/audit-data.json';

export default function AuditReport() {
  const [showPDF, setShowPDF] = useState(false);
  const analyzer = new LighthouseAnalyzer(sampleData);
  const requestedUrl = analyzer.getRequestedUrl();
  const scores = analyzer.generateScoreCards();
  const recommendations = analyzer.generateRecommendations();

  return (
    <div className="min-h-screen bg-blue-900/30">
      {showPDF ? (
        <div className="fixed inset-0 z-50 bg-white">
          <button
            onClick={() => setShowPDF(false)}
            className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close PDF
          </button>
          <AuditPDF
            requestedUrl={requestedUrl}
            scores={scores}
            recommendations={recommendations}
          />
        </div>
      ) : (
        <>
          <FloatingNav navItems={navItems} alwaysVisible={true} />
          <div className="container mx-auto px-4 sm:px-6 py-24">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3 break-words">
                  Website Audit Report - {' '}
                  <span className="text-2xl text-white">
                    {convertUrlsToLinks({ text: requestedUrl, isLight: true })}
                  </span>
                </h1>
                <button
                  onClick={() => setShowPDF(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Export PDF
                </button>
              </div>
              <p className="text-sm sm:text-base text-gray-400 max-w-3xl break-words">
                Comprehensive analysis of your website&apos;s performance, accessibility, best practices, and SEO.
              </p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {scores.map((metric, index) => (
                <ScoreCard key={index} metric={metric} />
              ))}
            </div>

            {/* Recommendations */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4 sm:mb-6 break-words">
                Recommendations
              </h2>
              <RecommendationList recommendations={recommendations} />
            </div>

            {/* Summary */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 break-words">Summary</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">
                Based on the Lighthouse audit results, here are the key areas that need attention:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
                {recommendations.slice(0, 3).map((rec, index) => (
                  <li key={index} className="text-gray-600">
                    <div className="inline-block">
                      <span className="font-medium break-words">{convertUrlsToLinks({ text: rec.title })}</span>
                      <br className="sm:hidden" />
                      <span className="block sm:inline ml-0 sm:ml-2 break-words">{convertUrlsToLinks({ text: rec.impact })}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Copyright />
        </>
      )}
    </div>
  );
} 