import { Recommendation } from '@/types/lighthouse';
import { convertUrlsToLinks } from '@/utils/textUtils';

interface RecommendationListProps {
  recommendations: Recommendation[];
}

export default function RecommendationList({ recommendations }: RecommendationListProps) {
  const getPriorityColor = (priority: 'High' | 'Medium' | 'Low') => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {recommendations.map((rec, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-300 hover:bg-white/95"
        >
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 break-words">
            {convertUrlsToLinks({ text: rec.title })}
          </h3>

          {/* Description */}
          <div className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 break-words">
            {convertUrlsToLinks({ text: rec.description })}
          </div>

          {/* Impact */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Impact
              </span>
            </div>
            <p className="ml-2 text-sm sm:text-base text-gray-600 break-words">
              {convertUrlsToLinks({ text: rec.impact })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 