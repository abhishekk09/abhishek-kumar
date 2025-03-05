"use client";
import React from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Home from "./_components/home";

const Main = () => {
  return (
    // <body>
    <body className="overflow-x-hidden">
      <Home />
      <section className=" h-screen py-20 px-6 text-center bg-gray-800 sticky top-0 place-items-center">
        <h2 className="text-xl md:text-5xl text-white ">About Me</h2>
        <p className="max-w-2xl text-gray-300 p-6 text-xl">
          {
            "Experienced Software Engineer with a strong background in the IT and services industry. Skilled in React.js, Next.js, JavaScript, and React Native, with expertise in leading and managing development teams. Proficient in team leadership, project management, sales, and public speaking, with a track record of delivering high-quality software solutions. Adept at driving technical excellence and fostering collaboration to achieve business goals."
          }
        </p>
        <div className="flex gap-2 justify-center items-center p-1 bg-gray-900 text-white">
          <Link
            href={"https://linkedin.com/in/abhishek0909/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href={"https://github.com/abhishekk09"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500 transition"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href={`mailto: developer.abhishek09@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition"
          >
            <FaEnvelope size={30} />
          </Link>
        </div>
      </section>
      <section
        id="contact"
        className=" h-screen w-full flex py-20 px-6 text-center bg-gray-900 sticky top-0 flex-col"
      >
        <h1 className="text-xl md:text-5xl mb-4 text-white">
          Get In Touch With Me
        </h1>
        <div className="place-items-center p-8">
          <Image
            src="/QR-abhi.png"
            alt="QRCODE"
            width={250} // Adjust width as needed
            height={250}
          />
        </div>
        <div className="flex gap-2 justify-center items-center p-1 bg-gray-900 text-white">
          <Link
            href={"https://linkedin.com/in/abhishek0909/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href={"https://github.com/abhishekk09"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500 transition"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href={`mailto: developer.abhishek09@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition"
          >
            <FaEnvelope size={30} />
          </Link>
        </div>
      </section>
      {/* <section className="h-screen w-full flex items-center justify-center bg-red-500 text-white text-4xl font-bold sticky top-0">
        Section 1
      </section>

      <section className="h-screen w-full flex items-center justify-center bg-blue-500 text-white text-4xl font-bold sticky top-0">
        Section 2
      </section> */}
      {/* <section className="h-screen flex justify-center items-center text-center px-4 sticky top-0">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl  text-white">
          I'm a <span className="text-blue-400">Web Developer</span> & Designer
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg "
        >
          Get in Touch
        </a>
      </section>

      <section className=" h-screen flex py-20 px-6 text-center bg-gray-800 sticky top-0">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          I’m a passionate web developer specializing in creating beautiful,
          functional, and high-performance websites.
        </p>
      </section>

      <section className=" h-screen flex py-20 px-6 text-center  sticky top-0 bg-gray-900">
        <h2 className="text-4xl font-bold text-center">My Skills & Work</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-400 mt-2">React, Next.js, Tailwind CSS</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="text-gray-400 mt-2">Figma, Adobe XD</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Performance & SEO</h3>
            <p className="text-gray-400 mt-2">PageSpeed, SEO Optimization</p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className=" h-screen flex py-20 px-6 text-center bg-gray-800 sticky top-0 py-20 px-6 bg-gray-900 text-center"
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-gray-300">
          I'd love to work with you! Fill out the form below.
        </p>
      </section> */}
    </body>
  );
};

export default Main;
