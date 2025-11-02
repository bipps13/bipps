'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('careers');
  const [showAddForm, setShowAddForm] = useState(false);

  const [careerForm, setCareerForm] = useState({
    title: '',
    description: '',
    category: 'Technology',
    salaryMin: '',
    salaryMax: '',
    requiredSkills: '',
    demandLevel: 'Medium',
    growthRate: '',
  });

  const handleAddCareer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const careerData = {
      title: careerForm.title,
      description: careerForm.description,
      category: careerForm.category,
      salaryRange: {
        min: parseInt(careerForm.salaryMin),
        max: parseInt(careerForm.salaryMax),
        currency: 'USD',
      },
      requiredSkills: careerForm.requiredSkills.split(',').map(s => s.trim()),
      demandLevel: careerForm.demandLevel,
      growthRate: careerForm.growthRate,
      roadmap: [],
      education: [],
      workEnvironment: '',
      relatedCareers: [],
    };

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(careerData),
      });

      if (response.ok) {
        alert('Career added successfully!');
        setShowAddForm(false);
        setCareerForm({
          title: '',
          description: '',
          category: 'Technology',
          salaryMin: '',
          salaryMax: '',
          requiredSkills: '',
          demandLevel: 'Medium',
          growthRate: '',
        });
      } else {
        alert('Failed to add career');
      }
    } catch {
      alert('Error adding career');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-xl text-gray-600">Manage careers, resources, and content</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">150</div>
            <div className="text-gray-600">Total Careers</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">1,234</div>
            <div className="text-gray-600">Total Users</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">89</div>
            <div className="text-gray-600">Resources</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <div className="text-3xl font-bold text-gray-800 mb-2">456</div>
            <div className="text-gray-600">Active Jobs</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {['careers', 'resources', 'jobs', 'users'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors capitalize ${
                    activeTab === tab
                      ? 'text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Careers Tab */}
            {activeTab === 'careers' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Manage Careers</h2>
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    {showAddForm ? 'Cancel' : 'Add New Career'}
                  </button>
                </div>

                {showAddForm && (
                  <form onSubmit={handleAddCareer} className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Career Title
                        </label>
                        <input
                          type="text"
                          required
                          value={careerForm.title}
                          onChange={(e) => setCareerForm({ ...careerForm, title: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          value={careerForm.category}
                          onChange={(e) => setCareerForm({ ...careerForm, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                        >
                          <option>Technology</option>
                          <option>Data Science</option>
                          <option>Design</option>
                          <option>Marketing</option>
                          <option>Business</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Description
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={careerForm.description}
                          onChange={(e) => setCareerForm({ ...careerForm, description: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Min Salary ($)
                        </label>
                        <input
                          type="number"
                          required
                          value={careerForm.salaryMin}
                          onChange={(e) => setCareerForm({ ...careerForm, salaryMin: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Max Salary ($)
                        </label>
                        <input
                          type="number"
                          required
                          value={careerForm.salaryMax}
                          onChange={(e) => setCareerForm({ ...careerForm, salaryMax: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Required Skills (comma-separated)
                        </label>
                        <input
                          type="text"
                          required
                          value={careerForm.requiredSkills}
                          onChange={(e) => setCareerForm({ ...careerForm, requiredSkills: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                          placeholder="JavaScript, React, Node.js"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Demand Level
                        </label>
                        <select
                          value={careerForm.demandLevel}
                          onChange={(e) => setCareerForm({ ...careerForm, demandLevel: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                        >
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Very High</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Growth Rate
                        </label>
                        <input
                          type="text"
                          value={careerForm.growthRate}
                          onChange={(e) => setCareerForm({ ...careerForm, growthRate: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                          placeholder="e.g., 22%"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        Add Career
                      </button>
                    </div>
                  </form>
                )}

                <div className="space-y-4">
                  <div className="text-gray-600">
                    Career management interface. Add, edit, or remove career paths from the database.
                  </div>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Manage Resources</h2>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Add New Resource
                  </button>
                </div>
                <div className="text-gray-600">
                  Resource management interface. Add courses, templates, guides, and articles.
                </div>
              </div>
            )}

            {/* Jobs Tab */}
            {activeTab === 'jobs' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Manage Jobs</h2>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Add New Job
                  </button>
                </div>
                <div className="text-gray-600">
                  Job listings management. Post internships and job opportunities.
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Users</h2>
                <div className="text-gray-600">
                  User management interface. View and manage user accounts and permissions.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
