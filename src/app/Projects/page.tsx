"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="flex flex-col items-center text-center text-white py-20">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <Image
          src="/portfolio.jpg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full border-4 border-white mt-4"
        />
        <p className="mt-4 max-w-2xl">
          Here are some of the projects I have worked on — showcasing my skills in coding and design.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-dark-800 mb-10">Projects Portfolio</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {[
            {
              title: "Portfolio Website",
              desc: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my skills, projects, and contact information.",
            },
            {
              title: "Hotel Booking System",
              desc: "Developed a hotel booking system with HTML/CSS for frontend and PHP backend for room management and reservation features, enhancing the user experience.",
            },
            {
              title: "Blog Platform",
              desc: "Created a simple blog platform using Strapi for backend and React/Vite frontend to manage and publish articles easily.",
            },
            {
              title: "E-commerce Website (In Progress)",
              desc: "Currently working on an e-commerce platform with product listings, user authentication, and shopping cart functionality.",
            },
            {
              title: "UX Design",
              desc: "Designs Interfaces of various projects such as Currently designed for a Client an Online Learning Platform.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md text-left transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

     {/* Call To Action Section */}
     <section className="bg-blue-450 py-16 text-center text-white">
         <Image
             src="/portfolio.jpg"
             alt="Profile Picture"
             width={100}
             height={100}
             className="rounded-full mx-auto mb-4"
     />
     <h2 className="text-2xl font-bold mb-4">Interested in hiring me for your project?</h2>
     <p className="max-w-xl mx-auto mb-6">
         Looking for a passionate developer to build your website or software product? Feel free to reach out via email at <span className="underline">ochiengmikewilliam@gmail.com</span> or use the{" "}
         <Link href="/Contact" className="underline hover:text-dark-800">
         Contact
         </Link>{" "}
          page to reach me.
     </p>

     <Link href="/Contact">
     <button className="bg-yellow-700 px-6 py-2 rounded-md text-dark hover:bg-yellow-800 transition duration-300">
      Let&apos;s Talk
     </button>
     </Link>
     </section>
     </div>
  );
}
