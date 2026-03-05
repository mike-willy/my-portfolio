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
        <p className="mt-4 max-w-2xl text-blue-100">
          Here are some of the projects I have worked on — showcasing my skills in coding and design, including the Chak Agency Properties ecosystem.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-dark-800 mb-10">Projects Portfolio</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {[
            {
              title: "Chak Agency Admin Web",
              desc: "A secure automated property management platform for agents to manage properties, monitor tenant records, and track rent with real-time financial reporting and arrears monitoring.",
              link: "https://chak-property-web-8cg5-9brtkbp0c.vercel.app/",
            },
            {
              title: "Chak Agency Mobile App",
              desc: "A comprehensive mobile solution for tenants to view tenancy info and submit maintenance requests, while providing landlords with real-time visibility into property performance and rent collection.",
              link: "https://github.com/mike-willy/chak-property-system/releases/download/v1.0.1/Chak.Property.apk",
            },
            {
              title: "The Travel Spark",
              desc: "A personalized travel planning application using a mood quiz and an AI rule-based recommendation system to suggest destinations and activities aligned with the traveler's emotional state and preferences.",
              link: "https://bonfire-planner-wr29-4zbalvjuk.vercel.app/",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md text-left transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.desc}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href={project.link}
                  target={project.link === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
                >
                  View Live Project
                </a>
              </div>
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
