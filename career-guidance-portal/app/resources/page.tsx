'use client';

import { useState } from 'react';

const resources = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive course.',
    type: 'course',
    category: 'Technology',
    duration: '40 hours',
    difficulty: 'Beginner',
    link: '#',
  },
  {
    id: '2',
    title: 'Data Science with Python',
    description: 'Learn data analysis, visualization, and machine learning with Python and popular libraries.',
    type: 'course',
    category: 'Data Science',
    duration: '35 hours',
    difficulty: 'Intermediate',
    link: '#',
  },
  {
    id: '3',
    title: 'Professional Resume Template',
    description: 'Modern, ATS-friendly resume template that helps you stand out to recruiters.',
    type: 'template',
    category: 'Career Tools',
    difficulty: 'Beginner',
    link: '#',
  },
  {
    id: '4',
    title: 'UX Design Fundamentals',
    description: 'Learn user research, wireframing, prototyping, and design thinking principles.',
    type: 'course',
    category: 'Design',
    duration: '25 hours',
    difficulty: 'Beginner',
    link: '#',
  },
  {
    id: '5',
    title: 'Ace Your Technical Interview',
    description: 'Comprehensive guide to preparing for coding interviews with practice problems and solutions.',
    type: 'guide',
    category: 'Interview Prep',
    difficulty: 'Intermediate',
    link: '#',
  },
  {
    id: '6',
    title: 'Digital Marketing Masterclass',
    description: 'Learn SEO, social media marketing, content strategy, and analytics.',
    type: 'course',
    category: 'Marketing',
    duration: '30 hours',
    difficulty: 'Beginner',
    link: '#',
  },
  {
    id: '7',
    title: 'Cover Letter Writing Guide',
    description: 'Step-by-step guide to writing compelling cover letters that get you interviews.',
    type: 'article',
    category: 'Career Tools',
    difficulty: 'Beginner',
    link: '#',
  },
  {
    id: '8',
    title: 'SQL for Data Analysis',
    description: 'Master SQL queries, joins, aggregations, and database design for data analysis.',
    type: 'course',
    category: 'Data Science',
    duration: '20 hours',
    difficulty: 'Beginner',
    link: '#',
  },
  {
    id: '9',
    title: 'Behavioral Interview Questions',
    description: 'Common behavioral interview questions with example answers using the STAR method.',
    type: 'guide',
    category: 'Interview Prep',
    difficulty: 'Beginner',
    link: '#',
  },
];

const categories = ['All', 'Technology', 'Data Science', 'Design', 'Marketing', 'Career Tools', 'Interview Prep'];
const types = ['All', 'course', 'template', 'guide', 'article'];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesSearch =
      searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  const typeColors: Record<string, string> = {
    course: 'bg-blue-100 text-blue-800',
    template: 'bg-green-100 text-green-800',
    guide: 'bg-purple-100 text-purple-800',
    article: 'bg-orange-100 text-orange-800',
  };

  const difficultyColors: Record<string, string> = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Learning Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated courses, templates, guides, and articles to help you build skills and advance your career
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap capitalize transition-all ${
                        selectedType === type
                          ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-purple-600">{filteredResources.length}</span> resource
              {filteredResources.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                          typeColors[resource.type]
                        }`}
                      >
                        {resource.type}
                      </span>
                      {resource.difficulty && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            difficultyColors[resource.difficulty]
                          }`}
                        >
                          {resource.difficulty}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{resource.category}</span>
                      {resource.duration && (
                        <span className="text-sm font-medium text-purple-600">{resource.duration}</span>
                      )}
                    </div>

                    <a
                      href={resource.link}
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Access Resource
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Resume Templates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Resume Templates
            </h2>
            <p className="text-xl text-gray-600">
              Professional, ATS-friendly templates to help you land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Modern Professional', 'Creative Designer', 'Tech Minimalist'].map((template, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-full h-64 bg-white rounded-lg shadow-md mb-6 flex items-center justify-center">
                  <div className="text-gray-400 text-6xl">📄</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{template}</h3>
                <p className="text-gray-600 mb-4">Perfect for {template.toLowerCase()} roles</p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Download Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
