export interface LighthouseReport {
  requestedUrl: string;
  categories: {
    performance: CategoryData;
    accessibility: CategoryData;
    'best-practices': CategoryData;
    seo: CategoryData;
    pwa?: CategoryData;
  };
  audits: Record<string, AuditResult>;
}

export interface CategoryData {
  id: string;
  title: string;
  score: number;
  description?: string;
  manualDescription?: string;
  auditRefs: AuditRef[];
}

export interface AuditResult {
  id: string;
  title: string;
  description: string;
  score: number | null;
  scoreDisplayMode: string;
  displayValue?: string;
  details?: {
    type: string;
    items?: any[];
    overallSavingsMs?: number;
  };
}

export interface AuditRef {
  id: string;
  weight: number;
  group?: string;
}

export interface ScoreMetric {
  score: number;
  displayScore: number;
  label: string;
  color: string;
}

export interface Recommendation {
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  impact: string;
  description: string;
  title: string;
} 