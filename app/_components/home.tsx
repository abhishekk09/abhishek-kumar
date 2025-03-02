"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const resumeData = {
  name: "Abhishek Kumar",
  title:
    "React Developer | Next JS Developer | React Native Mobile | Application Engineer | Engineering Manager",
  summary:
    "Experienced Software Engineer with a strong background in the IT and services industry. Skilled in React.js, Next.js, JavaScript, and React Native, with expertise in leading and managing development teams. Proficient in team leadership, project management, sales, and public speaking, with a track record of delivering high-quality software solutions. Adept at driving technical excellence and fostering collaboration to achieve business goals.",
  contact: {
    email: "developer.abhishek09@gmail.com",
    phone: "+91-9888630787",
    location: "Bangalore , India",
    linkedin: "https://linkedin.com/in/abhishek0909/",
    github: "https://github.com/abhishekk09",
  },
  experience: [
    {
      company: "Tech Corp",
      role: "Senior Developer",
      duration: "2020 - Present",
      description: "Developing and maintaining web applications.",
    },
    {
      company: "Web Solutions",
      role: "Frontend Developer",
      duration: "2017 - 2020",
      description: "Worked on UI/UX and front-end development.",
    },
  ],
  education: [
    {
      institution: "XYZ University",
      degree: "B.Sc. Computer Science",
      year: "2013 - 2017",
    },
  ],
  skills: ["React", "Node.js", "JavaScript", "CSS", "HTML"],
  projects: [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built using React.",
      link: "https://portfolio.example.com",
    },
    {
      name: "E-commerce Platform",
      description:
        "Developed an e-commerce platform with full-stack capabilities.",
      link: "https://ecommerce.example.com",
    },
  ],
};

const SocialLinks = () => {
  return (
    <div className="flex gap-2 justify-center items-center p-1 bg-gray-900 text-white">
      <Link
        href={resumeData.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition"
      >
        <FaLinkedin size={20} />
      </Link>
      <Link
        href={resumeData.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-500 transition"
      >
        <FaGithub size={20} />
      </Link>
      <Link
        href={`mailto: ${resumeData.contact.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition"
      >
        <FaEnvelope size={20} />
      </Link>
    </div>
  );
};

const Home = () => {
  // const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeTab] = useState("home");

  return (
    <div className="font-sans bg-gray-900 sm:h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
        <Image
          src="/abhi-logo-2.webp"
          alt="Logo"
          width={40} // Adjust width as needed
          height={40}
          className="rounded-full border-2 border-white"
        />
        {/* <button
          onClick={() => setDrawerOpen(!isDrawerOpen)}
          className="text-white text-xl"
        >
          ☰
        </button> */}
        <SocialLinks />
      </header>

      {/* {isDrawerOpen && (
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
      )} */}
      {/* <div className="absolute inset-0 bg-[url('/my-image.jpg')] bg-cover bg-center">
       
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div> */}
      <div className="max-w-6xl mx-auto p-6 mt-6 ">
        {activeTab === "home" && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-white flex flex-col items-center justify-center">
              {/* <Image
                src="/abhi-profile.png" // Path relative to 'public' folder
                alt="My Image"
                width={400} // Adjust width as needed
                height={300}
                // unoptimized // Adjust height as needed
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              /> */}
              <div className="h-64 w-64 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/abhi-profile.png"
                  alt="Profile"
                  width={250} // Adjust width as needed
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              <header className="text-center py-10">
                <h1 className="text-6xl font-bold">{resumeData.name}</h1>
                <p className="text-lg font-bold mt-2 md:px-20">
                  {resumeData.title}
                </p>
              </header>

              {/* <p className="max-w-2xl text-gray-300">{resumeData.summary}</p> */}
              {/* <div className="p-4">
                <SocialLinks />
              </div> */}
              <div className="flex gap-1 mt-4 items-center justify-center ">
                <Link
                  href={"/Abhishek_Resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  // download
                  className="text-white"
                >
                  <button className="rounded-xl text-md text-center text-white border p-4 text-sm hover:bg-gray-600 transition">
                    View Resume
                  </button>
                </Link>

                <Link
                  href={"/Abhishek_Resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="text-white"
                >
                  <button className="rounded-xl text-md text-center text-white border p-4 text-sm hover:bg-gray-600 transition">
                    Download Resume
                  </button>
                </Link>
              </div>

              {/* <div className="mt-5 flex space-x-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="px-4 py-2 bg-green-600 rounded-lg"
                  >
                    View Resume
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="px-4 py-2 bg-red-600 rounded-lg"
                  >
                    Download Resume
                  </a>
                </div> */}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
