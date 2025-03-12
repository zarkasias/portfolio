'use client';

import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import { ScoreMetric, Recommendation } from '@/types/lighthouse';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 15,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    width: 100,
    alignItems: 'flex-end',
  },
  logo: {
    width: 60,
    objectFit: 'contain',
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    color: '#1a365d',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 15,
  },
  url: {
    fontSize: 12,
    color: '#4a5568',
    backgroundColor: '#f7fafc',
    padding: 6,
    borderRadius: 4,
    marginBottom: 0,
  },
  urlText: {
    color: '#2563eb',
    textDecoration: 'underline',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#2d3748',
    fontWeight: 'bold',
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 10,
  },
  scoreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  scoreCard: {
    width: '45%',
    backgroundColor: '#f8fafc',
    padding: 15,
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  scoreIndicator: {
    width: 4,
    height: 45,
    marginRight: 12,
    borderRadius: 2,
  },
  scoreContent: {
    flex: 1,
    flexDirection: 'column',
  },
  scoreLabel: {
    fontSize: 13,
    color: '#4a5568',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  scoreValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  recommendation: {
    backgroundColor: '#f8fafc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  recommendationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  recommendationTitle: {
    fontSize: 14,
    color: '#2d3748',
    flex: 1,
    fontWeight: 'bold',
  },
  priorityBadge: {
    fontSize: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: '#ffffff',
  },
  recommendationDescription: {
    fontSize: 12,
    color: '#4a5568',
    marginBottom: 10,
    lineHeight: 1.5,
    wordBreak: 'normal',
  },
  recommendationImpact: {
    fontSize: 12,
    color: '#2b6cb0',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#718096',
    fontSize: 10,
    borderTop: '1 solid #e5e7eb',
    paddingTop: 20,
  },
});

const getScoreColor = (score: number) => {
  if (score >= 90) return '#22c55e';  // bright green
  if (score >= 75) return '#84cc16';  // lime green
  if (score >= 50) return '#eab308';  // yellow
  if (score >= 25) return '#f97316';  // orange
  return '#ef4444';  // red
};

const getPriorityColor = (priority: 'High' | 'Medium' | 'Low') => {
  switch (priority) {
    case 'High': return '#dc2626';    // darker red
    case 'Medium': return '#f97316';  // darker orange
    case 'Low': return '#22c55e';     // darker green
  }
};

interface PDFContentProps {
  requestedUrl: string;
  scores: ScoreMetric[];
  recommendations: Recommendation[];
  logoBase64: string | null;
}

// Helper function to preserve URLs
const preserveUrls = (text: string): (string | JSX.Element)[] => {
  // Match URLs but don't include trailing punctuation
  const urlRegex = /(https?:\/\/[^\s)]+)([.,;:)])?/g;
  const parts = text.split(urlRegex);
  const result: (string | JSX.Element)[] = [];
  
  for (let i = 0; i < parts.length; i += 3) {
    // Add regular text
    if (parts[i]) {
      result.push(parts[i]);
    }
    
    // Add URL if exists
    if (parts[i + 1]) {
      const url = parts[i + 1];
      result.push(
        <Link key={i} src={url}>
          <Text style={styles.urlText}>{url}</Text>
        </Link>
      );
      
      // Add trailing punctuation if exists
      if (parts[i + 2]) {
        result.push(parts[i + 2]);
      }
    }
  }
  
  return result;
};

export default function PDFContent(props: PDFContentProps) {
  const [isClient, setIsClient] = React.useState(false);
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="text-gray-600">Loading PDF viewer...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-white">
      <PDFViewer style={{ width: '100%', height: '100%', border: 'none' }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Text style={styles.title}>Website Audit Report</Text>
                <Text style={styles.subtitle}>
                  A detailed analysis of your website&apos;s performance and recommendations for improvement
                </Text>
                <Text style={styles.url}>URL: {props.requestedUrl}</Text>
              </View>
              <View style={styles.headerRight}>
                {props.logoBase64 && (
                  <Image 
                    source={props.logoBase64}
                    style={styles.logo}
                  />
                )}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Performance Metrics</Text>
              <View style={styles.scoreGrid}>
                {props.scores.map((metric, index) => {
                  const scoreColor = getScoreColor(metric.score * 100);
                  return (
                    <View key={index} style={styles.scoreCard}>
                      <View style={styles.scoreRow}>
                        <View style={[styles.scoreIndicator, { backgroundColor: scoreColor }]} />
                        <View style={styles.scoreContent}>
                          <Text style={styles.scoreLabel}>{metric.label}</Text>
                          <Text style={[styles.scoreValue, { color: scoreColor }]}>
                            {Math.round(metric.score * 100)}%
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Key Recommendations</Text>
              {props.recommendations.slice(0, 5).map((rec, index) => (
                <View key={index} style={styles.recommendation}>
                  <View style={styles.recommendationHeader}>
                    <Text style={styles.recommendationTitle}>
                      {preserveUrls(rec.title)}
                    </Text>
                    <Text style={[styles.priorityBadge, { backgroundColor: getPriorityColor(rec.priority) }]}>
                      {rec.priority}
                    </Text>
                  </View>
                  <Text style={styles.recommendationDescription}>
                    {preserveUrls(rec.description)}
                  </Text>
                  <Text style={styles.recommendationImpact}>
                    Impact: {preserveUrls(rec.impact)}
                  </Text>
                </View>
              ))}
            </View>

            <Text style={styles.footer}>
              Generated by Website Audit Tool • {currentDate}
            </Text>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
} 