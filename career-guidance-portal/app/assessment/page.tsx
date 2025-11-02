'use client';

import { useState } from 'react';

interface Question {
  id: string;
  question: string;
  options: {
    text: string;
    category: string;
    value: number;
  }[];
}

const assessmentQuestions: Question[] = [
  {
    id: '1',
    question: 'What type of tasks do you enjoy most?',
    options: [
      { text: 'Solving complex technical problems', category: 'Technology', value: 5 },
      { text: 'Analyzing data and finding patterns', category: 'Data', value: 5 },
      { text: 'Creating visual designs and art', category: 'Creative', value: 5 },
      { text: 'Communicating and persuading others', category: 'Business', value: 5 },
    ],
  },
  {
    id: '2',
    question: 'Which work environment appeals to you?',
    options: [
      { text: 'Working independently on coding projects', category: 'Technology', value: 4 },
      { text: 'Collaborating with teams on data insights', category: 'Data', value: 4 },
      { text: 'Brainstorming creative ideas with designers', category: 'Creative', value: 4 },
      { text: 'Meeting clients and stakeholders', category: 'Business', value: 4 },
    ],
  },
  {
    id: '3',
    question: 'What skills do you want to develop?',
    options: [
      { text: 'Programming and software development', category: 'Technology', value: 5 },
      { text: 'Statistical analysis and machine learning', category: 'Data', value: 5 },
      { text: 'Design thinking and user experience', category: 'Creative', value: 5 },
      { text: 'Leadership and strategic planning', category: 'Business', value: 5 },
    ],
  },
  {
    id: '4',
    question: 'How do you prefer to solve problems?',
    options: [
      { text: 'Writing code and building solutions', category: 'Technology', value: 4 },
      { text: 'Using data and analytics', category: 'Data', value: 4 },
      { text: 'Through creative and visual approaches', category: 'Creative', value: 4 },
      { text: 'Through negotiation and communication', category: 'Business', value: 4 },
    ],
  },
  {
    id: '5',
    question: 'What motivates you most in your career?',
    options: [
      { text: 'Building innovative technology', category: 'Technology', value: 5 },
      { text: 'Discovering insights from data', category: 'Data', value: 5 },
      { text: 'Creating beautiful and functional designs', category: 'Creative', value: 5 },
      { text: 'Growing businesses and leading teams', category: 'Business', value: 5 },
    ],
  },
  {
    id: '6',
    question: 'Which subject did you enjoy most in school?',
    options: [
      { text: 'Computer Science and Mathematics', category: 'Technology', value: 4 },
      { text: 'Statistics and Research Methods', category: 'Data', value: 4 },
      { text: 'Art and Design', category: 'Creative', value: 4 },
      { text: 'Business and Economics', category: 'Business', value: 4 },
    ],
  },
  {
    id: '7',
    question: 'How do you like to spend your free time?',
    options: [
      { text: 'Learning new programming languages', category: 'Technology', value: 3 },
      { text: 'Analyzing trends and statistics', category: 'Data', value: 3 },
      { text: 'Drawing, designing, or creating content', category: 'Creative', value: 3 },
      { text: 'Reading business books or networking', category: 'Business', value: 3 },
    ],
  },
  {
    id: '8',
    question: 'What type of projects excite you?',
    options: [
      { text: 'Building apps and software systems', category: 'Technology', value: 5 },
      { text: 'Creating data visualizations and reports', category: 'Data', value: 5 },
      { text: 'Designing user interfaces and experiences', category: 'Creative', value: 5 },
      { text: 'Developing business strategies', category: 'Business', value: 5 },
    ],
  },
];

const careerRecommendations: Record<string, string[]> = {
  Technology: ['Software Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Mobile App Developer'],
  Data: ['Data Analyst', 'Data Scientist', 'Business Intelligence Analyst', 'Machine Learning Engineer'],
  Creative: ['UX/UI Designer', 'Graphic Designer', 'Content Creator', 'Product Designer'],
  Business: ['Product Manager', 'Business Analyst', 'Digital Marketing Manager', 'Consultant'],
};

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { category: string; value: number }>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{ category: string; score: number }[]>([]);

  const handleAnswer = (questionId: string, category: string, value: number) => {
    setAnswers({ ...answers, [questionId]: { category, value } });
    
    if (currentQuestion < assessmentQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    
    Object.values(answers).forEach(({ category, value }) => {
      scores[category] = (scores[category] || 0) + value;
    });

    const sortedResults = Object.entries(scores)
      .map(([category, score]) => ({ category, score }))
      .sort((a, b) => b.score - a.score);

    setResults(sortedResults);
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults([]);
  };

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  if (showResults) {
    const topCategory = results[0];
    const recommendedCareers = careerRecommendations[topCategory.category] || [];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Assessment Complete!
              </h1>
              <p className="text-xl text-gray-600">
                Here are your personalized career recommendations
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Career Profile</h2>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={result.category} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">{result.category}</span>
                      <span className="text-purple-600 font-bold">{result.score} points</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          index === 0
                            ? 'bg-gradient-to-r from-purple-600 to-blue-500'
                            : index === 1
                            ? 'bg-gradient-to-r from-blue-500 to-teal-500'
                            : 'bg-gray-400'
                        }`}
                        style={{ width: `${(result.score / results[0].score) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Recommended Careers for You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedCareers.map((career, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-800">{career}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/careers"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 rounded-lg text-center font-semibold hover:shadow-lg transition-all"
              >
                Explore These Careers
              </a>
              <button
                onClick={resetAssessment}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = assessmentQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Career Assessment</h1>
            <span className="text-gray-600 font-medium">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">{question.question}</h2>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, option.category, option.value)}
                className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold mr-4">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg text-gray-700">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {currentQuestion > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Previous Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
