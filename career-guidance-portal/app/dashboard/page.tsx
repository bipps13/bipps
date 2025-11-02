'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const savedJobs = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $120k',
    },
    {
      id: '2',
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70k - $100k',
    },
  ];

  const careerRoadmap = [
    {
      phase: 'Foundation',
      title: 'Learn Programming Basics',
      status: 'completed',
      progress: 100,
    },
    {
      phase: 'Intermediate',
      title: 'Master React & Frontend',
      status: 'in-progress',
      progress: 65,
    },
    {
      phase: 'Advanced',
      title: 'Build Portfolio Projects',
      status: 'pending',
      progress: 0,
    },
    {
      phase: 'Professional',
      title: 'Apply for Jobs',
      status: 'pending',
      progress: 0,
    },
  ];

  const assessmentHistory = [
    {
      id: '1',
      title: 'Career Interest Assessment',
      date: '2024-10-15',
      score: 85,
      result: 'Technology',
    },
    {
      id: '2',
      title: 'Skills Assessment',
      date: '2024-10-10',
      score: 78,
      result: 'Web Development',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Dashboard
          </h1>
          <p className="text-xl text-gray-600">Track your career journey and progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">3</div>
            <div className="text-gray-600">Assessments Taken</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">12</div>
            <div className="text-gray-600">Courses Enrolled</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">8</div>
            <div className="text-gray-600">Saved Jobs</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">65%</div>
            <div className="text-gray-600">Profile Complete</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {['overview', 'roadmap', 'saved-jobs', 'assessments'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
                  <p className="text-gray-600 mb-6">
                    Continue your journey towards becoming a Software Engineer
                  </p>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Current Focus</h3>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">Master React & Frontend</span>
                        <span className="text-purple-600 font-bold">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Continue Learning
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recommended Actions</h3>
                  <div className="space-y-3">
                    {[
                      'Complete your profile to get better job recommendations',
                      'Take the Skills Assessment to identify areas for improvement',
                      'Apply to 3 new jobs this week',
                    ].map((action, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-4"></div>
                        <span className="text-gray-700">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Roadmap Tab */}
            {activeTab === 'roadmap' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Career Roadmap</h2>
                <div className="space-y-6">
                  {careerRoadmap.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              item.status === 'completed'
                                ? 'bg-green-500'
                                : item.status === 'in-progress'
                                ? 'bg-blue-500'
                                : 'bg-gray-300'
                            }`}
                          >
                            {item.status === 'completed' ? (
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <span className="text-white font-bold">{index + 1}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-purple-600">{item.phase}</span>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  item.status === 'completed'
                                    ? 'bg-green-100 text-green-800'
                                    : item.status === 'in-progress'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {item.status.replace('-', ' ')}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                            {item.progress > 0 && (
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-gray-600">Progress</span>
                                  <span className="text-sm font-semibold text-gray-800">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                                    style={{ width: `${item.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {index < careerRoadmap.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-12 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Jobs Tab */}
            {activeTab === 'saved-jobs' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Saved Jobs</h2>
                <div className="space-y-4">
                  {savedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                          <p className="text-gray-600 mb-2">{job.company}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {job.location}
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                              {job.type}
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                              {job.salary}
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                              Apply Now
                            </button>
                            <button className="text-red-600 hover:text-red-700 font-medium">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Assessments Tab */}
            {activeTab === 'assessments' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Assessment History</h2>
                <div className="space-y-4">
                  {assessmentHistory.map((assessment) => (
                    <div
                      key={assessment.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{assessment.title}</h3>
                          <p className="text-gray-600 mb-2">Completed on {assessment.date}</p>
                          <div className="flex items-center gap-4">
                            <div>
                              <span className="text-sm text-gray-600">Score: </span>
                              <span className="text-lg font-bold text-purple-600">{assessment.score}%</span>
                            </div>
                            <div>
                              <span className="text-sm text-gray-600">Result: </span>
                              <span className="font-semibold text-gray-800">{assessment.result}</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-purple-600 hover:text-purple-700 font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="/assessment"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Take New Assessment
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
