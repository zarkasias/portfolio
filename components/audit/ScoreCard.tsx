import { ScoreMetric } from '@/types/lighthouse';

interface ScoreCardProps {
  metric: ScoreMetric;
}

export default function ScoreCard({ metric }: ScoreCardProps) {
  return (
    <div className="relative p-4 sm:p-6 bg-white/30 backdrop-blur-sm rounded-lg shadow-xl transition-transform hover:scale-102">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg font-semibold text-white break-words flex-1">{metric.label}</h3>
        <div 
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg flex-shrink-0"
          style={{ backgroundColor: metric.color }}
        >
          {metric.displayScore}
        </div>
      </div>
      <div className="mt-3 sm:mt-4">
        <div className="w-full bg-white/20 rounded-full h-2 sm:h-2.5">
          <div 
            className="h-2 sm:h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ 
              width: `${metric.displayScore}%`,
              backgroundColor: metric.color 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
} 