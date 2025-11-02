'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      title: 'Career Exploration',
      description: 'Discover diverse career paths with detailed insights on roles, salaries, and growth opportunities.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Aptitude Tests',
      description: 'Take personalized assessments to identify your strengths and find careers that match your skills.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Skill Development',
      description: 'Access curated courses, tutorials, and resources to build the skills you need for your dream career.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Job Opportunities',
      description: 'Browse internships and job listings tailored to your interests and career goals.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const popularCareers = [
    'Software Engineer',
    'Data Analyst',
    'UX Designer',
    'Digital Marketer',
    'Product Manager',
    'Content Writer',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/careers?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Find Your Perfect
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Career Path
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover your potential, explore career opportunities, and build the future you deserve
              with personalized guidance and expert resources.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for careers, skills, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg shadow-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <span className="text-gray-600 font-medium">Popular:</span>
              {popularCareers.map((career) => (
                <Link
                  key={career}
                  href={`/careers?search=${encodeURIComponent(career)}`}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors shadow-sm"
                >
                  {career}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessment"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Take Career Assessment
              </Link>
              <Link
                href="/careers"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources to guide you through every step of your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl opacity-90">Students Guided</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Career Paths</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-xl opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey to the perfect career in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Take Assessment',
                description: 'Complete our comprehensive aptitude and interest tests to understand your strengths and preferences.',
              },
              {
                step: '02',
                title: 'Explore Careers',
                description: 'Browse personalized career recommendations with detailed insights on roles, salaries, and requirements.',
              },
              {
                step: '03',
                title: 'Start Learning',
                description: 'Access curated resources, courses, and mentorship to build skills and achieve your career goals.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-6xl font-bold text-purple-100 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students and professionals who have found their perfect career path
          </p>
          <Link
            href="/auth/register"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
