'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaLinkedin,
// } from 'react-icons/fa';

const resumeData = {
  name: 'Abhishek Kumar',
  title: 'Senior Software Engineer / Engineer Manager',
  summary:
    'Experienced developer skilled in React, Node.js, and modern web technologies.',
  contact: {
    email: 'abhishek0909kumar@gmail.com',
    phone: '+91-9888630787',
    location: 'Bangalore , India',
    linkedin: 'https://linkedin.com/in/abhishek09',
    github: 'https://github.com/abhishekk09',
  },
  experience: [
    {
      company: 'Tech Corp',
      role: 'Senior Developer',
      duration: '2020 - Present',
      description: 'Developing and maintaining web applications.',
    },
    {
      company: 'Web Solutions',
      role: 'Frontend Developer',
      duration: '2017 - 2020',
      description: 'Worked on UI/UX and front-end development.',
    },
  ],
  education: [
    {
      institution: 'XYZ University',
      degree: 'B.Sc. Computer Science',
      year: '2013 - 2017',
    },
  ],
  skills: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
  projects: [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio built using React.',
      link: 'https://portfolio.example.com',
    },
    {
      name: 'E-commerce Platform',
      description:
        'Developed an e-commerce platform with full-stack capabilities.',
      link: 'https://ecommerce.example.com',
    },
  ],
};

const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="relative font-sans bg-gray-900 min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold capitalize">{activeTab}</h1>
        <button
          onClick={() => setDrawerOpen(!isDrawerOpen)}
          className="text-white text-xl"
        >
          ☰
        </button>
      </header>

      {isDrawerOpen && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          className="fixed top-0 right-0 w-64 h-full bg-gray-900 text-white p-6 shadow-lg"
        >
          <button onClick={() => setDrawerOpen(false)} className="mb-4 text-lg">
            Close ✕
          </button>
          <ul className="space-y-4">
            {['home', 'experience', 'education', 'skills', 'projects'].map(
              (tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer text-lg ${
                    activeTab === tab ? 'text-blue-400' : 'text-white'
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setDrawerOpen(false);
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ),
            )}
          </ul>
        </motion.div>
      )}

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
        {activeTab === 'home' && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold text-center text-gray-800">
              {resumeData.name}
            </h1>
            <h2 className="text-xl text-center text-gray-600">
              {resumeData.title}
            </h2>
            <p className="text-center mt-2 text-gray-700">
              {resumeData.summary}
            </p>
          </motion.div>
        )}

        {activeTab === 'experience' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mt-4 border-b pb-2">
                <h4 className="text-xl font-medium">{exp.company}</h4>
                <p className="text-gray-600">
                  {exp.role} ({exp.duration})
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
