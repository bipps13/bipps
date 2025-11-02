'use client';

import Link from 'next/link';

interface CareerCardProps {
  career: {
    _id?: string;
    title: string;
    description: string;
    category: string;
    salaryRange: {
      min: number;
      max: number;
      currency: string;
    };
    requiredSkills: string[];
    demandLevel: string;
    growthRate?: string;
  };
}

export default function CareerCard({ career }: CareerCardProps) {
  const demandColors = {
    'Very High': 'bg-green-100 text-green-800',
    'High': 'bg-blue-100 text-blue-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Low': 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{career.title}</h3>
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {career.category}
            </span>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              demandColors[career.demandLevel as keyof typeof demandColors] || demandColors.Medium
            }`}
          >
            {career.demandLevel} Demand
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{career.description}</p>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Salary Range</span>
            {career.growthRate && (
              <span className="text-sm text-green-600 font-medium">↑ {career.growthRate}</span>
            )}
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ${career.salaryRange.min.toLocaleString()} - ${career.salaryRange.max.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">per year</div>
        </div>

        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-700 mb-2">Key Skills</div>
          <div className="flex flex-wrap gap-2">
            {career.requiredSkills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
            {career.requiredSkills.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                +{career.requiredSkills.length - 4} more
              </span>
            )}
          </div>
        </div>

        <Link
          href={`/careers/${career._id || career.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          View Career Path
        </Link>
      </div>
    </div>
  );
}
