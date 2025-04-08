"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="flex flex-col items-center text-center text-white py-20">
        <h1 className="text-4xl font-bold">About Me</h1>
        <Image
          src="/portfolio.jpg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full border-4 border-white mt-4"
        />
        <p className="mt-4 max-w-2xl">
          A brief overview of my background, hobbies, and future ambitions.
        </p>
      </section>

      {/* Bio Template Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-dark-800 mb-10">My Bio</h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md text-left space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Name:</h3>
            <p className="text-gray-700">Mike William</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Education:</h3>
            <p className="text-gray-700">
              Currently pursuing Bachelor of Science in Business Information Technology (Fourth Year) at Dedan Kimathi University of Technology.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">High School:</h3>
            <p className="text-gray-700">Homa Bay High School</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Attachment:</h3>
            <p className="text-gray-700">
              Completed my industrial attachment at Swahilipot Hub, actively participating in web development projects and improving my skills in building modern websites.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Hobbies:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Coding</li>
              <li>Designing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Future Goal:</h3>
            <p className="text-gray-700">
              To become a skilled Full Stack Developer, capable of building complete web applications from frontend to backend, and contribute to solving real-world problems through technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}