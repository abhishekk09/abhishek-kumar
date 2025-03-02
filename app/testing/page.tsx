"use client";
import React from "react";

const Home = () => {
  return (
    <body className="overflow-x-hidden">
      <section className="h-screen w-full flex items-center justify-center bg-red-500 text-white text-4xl font-bold">
        Section 1
      </section>

      <section className="h-screen w-full flex items-center justify-center bg-blue-500 text-white text-4xl font-bold sticky top-0">
        Section 2
      </section>

      <section className="h-screen w-full flex items-center justify-center bg-green-500 text-white text-4xl font-bold sticky top-0">
        Section 3
      </section>

      <section className="h-screen w-full flex items-center justify-center bg-yellow-500 text-black text-4xl font-bold sticky top-0">
        Section 4
      </section>
    </body>
  );
};

export default Home;
