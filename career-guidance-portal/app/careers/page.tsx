'use client';

import { useState } from 'react';
import CareerCard from '@/components/career/CareerCard';

const sampleCareers = [
  {
    _id: '1',
    title: 'Software Engineer',
    description: 'Design, develop, and maintain software applications. Work with cutting-edge technologies to solve complex problems and create innovative solutions.',
    category: 'Technology',
    salaryRange: { min: 80000, max: 150000, currency: 'USD' },
    requiredSkills: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git'],
    demandLevel: 'Very High',
    growthRate: '22%',
  },
  {
    _id: '2',
    title: 'Data Analyst',
    description: 'Analyze complex data sets to help organizations make informed business decisions. Use statistical tools and visualization techniques.',
    category: 'Data Science',
    salaryRange: { min: 65000, max: 110000, currency: 'USD' },
    requiredSkills: ['Python', 'SQL', 'Excel', 'Tableau', 'Statistics', 'Power BI'],
    demandLevel: 'Very High',
    growthRate: '25%',
  },
  {
    _id: '3',
    title: 'UX/UI Designer',
    description: 'Create intuitive and visually appealing user interfaces. Conduct user research and design seamless digital experiences.',
    category: 'Design',
    salaryRange: { min: 70000, max: 120000, currency: 'USD' },
    requiredSkills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'HTML/CSS', 'Design Thinking'],
    demandLevel: 'High',
    growthRate: '18%',
  },
  {
    _id: '4',
    title: 'Digital Marketing Manager',
    description: 'Develop and execute digital marketing strategies across multiple channels. Drive brand awareness and customer engagement.',
    category: 'Marketing',
    salaryRange: { min: 60000, max: 100000, currency: 'USD' },
    requiredSkills: ['SEO', 'Google Analytics', 'Social Media', 'Content Marketing', 'PPC', 'Email Marketing'],
    demandLevel: 'High',
    growthRate: '15%',
  },
  {
    _id: '5',
    title: 'Product Manager',
    description: 'Lead product development from conception to launch. Work with cross-functional teams to deliver products that meet customer needs.',
    category: 'Management',
    salaryRange: { min: 90000, max: 160000, currency: 'USD' },
    requiredSkills: ['Product Strategy', 'Agile', 'User Stories', 'Analytics', 'Communication', 'Leadership'],
    demandLevel: 'Very High',
    growthRate: '20%',
  },
  {
    _id: '6',
    title: 'Content Writer',
    description: 'Create engaging content for various platforms including blogs, websites, and social media. Tell compelling stories that resonate with audiences.',
    category: 'Creative',
    salaryRange: { min: 45000, max: 75000, currency: 'USD' },
    requiredSkills: ['Writing', 'SEO', 'Research', 'Editing', 'Content Strategy', 'WordPress'],
    demandLevel: 'Medium',
    growthRate: '12%',
  },
  {
    _id: '7',
    title: 'Cybersecurity Analyst',
    description: 'Protect organizations from cyber threats. Monitor networks, investigate security breaches, and implement security measures.',
    category: 'Technology',
    salaryRange: { min: 75000, max: 130000, currency: 'USD' },
    requiredSkills: ['Network Security', 'Ethical Hacking', 'Firewalls', 'Risk Assessment', 'Linux', 'Python'],
    demandLevel: 'Very High',
    growthRate: '31%',
  },
  {
    _id: '8',
    title: 'Business Analyst',
    description: 'Bridge the gap between IT and business. Analyze business processes and recommend solutions to improve efficiency.',
    category: 'Business',
    salaryRange: { min: 65000, max: 105000, currency: 'USD' },
    requiredSkills: ['Requirements Analysis', 'SQL', 'Process Modeling', 'Stakeholder Management', 'Excel', 'Agile'],
    demandLevel: 'High',
    growthRate: '14%',
  },
];

const categories = ['All', 'Technology', 'Data Science', 'Design', 'Marketing', 'Management', 'Creative', 'Business'];

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCareers = (() => {
    let filtered = sampleCareers;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((career) => career.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (career) =>
          career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          career.requiredSkills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    return filtered;
  })();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Explore Career Paths
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your ideal career with detailed insights on roles, salaries, required skills, and growth opportunities
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search careers, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-purple-600">{filteredCareers.length}</span> career
              {filteredCareers.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Career Cards Grid */}
          {filteredCareers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCareers.map((career) => (
                <CareerCard key={career._id} career={career} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No careers found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Career is Right for You?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take our comprehensive career assessment to get personalized recommendations
          </p>
          <a
            href="/assessment"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Take Assessment Now
          </a>
        </div>
      </section>
    </div>
  );
}
