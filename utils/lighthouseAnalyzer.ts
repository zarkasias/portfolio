import { LighthouseReport, ScoreMetric, Recommendation } from '../types/lighthouse';

export class LighthouseAnalyzer {
  private data: LighthouseReport;

  constructor(lighthouseData: LighthouseReport) {
    this.data = lighthouseData;
  }

  public getRequestedUrl(): string {
    return this.data.requestedUrl;
  }

  public generateScoreCards(): ScoreMetric[] {
    return [
      this.formatScore('performance'),
      this.formatScore('accessibility'),
      this.formatScore('best-practices'),
      this.formatScore('seo')
    ].filter((score): score is ScoreMetric => score !== null);
  }

  private formatScore(category: keyof LighthouseReport['categories']): ScoreMetric | null {
    const categoryData = this.data.categories[category];
    if (!categoryData) return null;
    
    const score = categoryData.score;
    return {
      score,
      displayScore: Math.round(score * 100),
      label: categoryData.title,
      color: this.getScoreColor(score)
    };
  }

  private getScoreColor(score: number): string {
    if (score >= 0.9) return '#0CCE6B';  // Green
    if (score >= 0.5) return '#FFA400';  // Orange
    return '#FF4E42';  // Red
  }

  public generateRecommendations(): Recommendation[] {
    const recommendations: Recommendation[] = [];

    Object.entries(this.data.audits)
      .filter(([_, audit]) => audit.score !== null && audit.score < 1)
      .forEach(([id, audit]) => {
        const category = this.getCategoryForAudit(id);
        if (category) {
          recommendations.push({
            category,
            priority: this.calculatePriority(audit.score || 0),
            impact: audit.details?.overallSavingsMs 
              ? `${Math.round(audit.details.overallSavingsMs)}ms improvement possible`
              : 'Impact not quantified',
            description: audit.description,
            title: audit.title
          });
        }
      });

    return recommendations.sort((a, b) => 
      this.getPriorityWeight(b.priority) - this.getPriorityWeight(a.priority)
    );
  }

  private getCategoryForAudit(auditId: string): string {
    for (const [category, data] of Object.entries(this.data.categories)) {
      if (data.auditRefs.some(ref => ref.id === auditId)) {
        return data.title;
      }
    }
    return 'Other';
  }

  private calculatePriority(score: number): 'High' | 'Medium' | 'Low' {
    if (score < 0.5) return 'High';
    if (score < 0.8) return 'Medium';
    return 'Low';
  }

  private getPriorityWeight(priority: 'High' | 'Medium' | 'Low'): number {
    switch (priority) {
      case 'High': return 3;
      case 'Medium': return 2;
      case 'Low': return 1;
    }
  }
} 