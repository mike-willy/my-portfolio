"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-blue-500 pb-12">
        <Navbar />

        {/* Header Profile */}
        <section className="flex flex-col items-center text-center text-white pt-10 pb-8 fade-in-up">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <Image
            src="/portfolio.jpg"
            alt="Mike William"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-xl object-cover"
          />
          <h2 className="text-3xl font-extrabold text-white mt-6 tracking-tight">
            Hi, I&apos;m Mike William.
          </h2>
          <p className="text-xl text-blue-100 font-medium mt-2 max-w-2xl px-4">
            Full Stack Software Engineer & Architect
          </p>
        </section>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16 pb-32">
        {/* Narrative Bio */}
        <article className="prose prose-lg dark:prose-invert prose-blue mx-auto prose-headings:font-bold prose-headings:tracking-tight text-slate-600 dark:text-slate-300">

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-md fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl text-slate-800 dark:text-white mb-6">Bridging Code and Business.</h2>
            <p className="mb-6 leading-relaxed">
              I am a Full Stack Developer specializing in building modern web and mobile applications. Armed with a <strong>B.Sc. in Business Information Technology</strong> from Dedan Kimathi University of Technology, I approach software engineering from a unique angle: I don&apos;t just write code to build features; I build scalable architectures designed to solve actual business problems.
            </p>

            <p className="mb-6 leading-relaxed">
              My technical expertise spans across robust technologies including <strong>React, Next.js, Node.js, PHP, and Flutter.</strong> Whether designing an interactive, pixel-perfect frontend interface or architecting a secure, high-performance database layer backend, I thrive in environments where performance and user experience intersect.
            </p>

            <h3 className="text-xl text-slate-800 dark:text-white mt-10 mb-4">Professional Experience</h3>
            <p className="mb-6 leading-relaxed">
              During my industrial tenure at <strong>Swahilipot Hub</strong>, I actively collaborated on complex web development lifecycles. I focused heavily on refining modern website architectures, optimizing UI responsiveness, and integrating reliable backend solutions to bring concepts into live production.
            </p>

            <h3 className="text-xl text-slate-800 dark:text-white mt-10 mb-4">The Target</h3>
            <div className="border-l-4 border-blue-500 pl-6 my-8 italic text-slate-700 dark:text-slate-400">
              "My ultimate professional goal is to become a globally recognized Full Stack Architect. I am driven by the challenge of designing complex, end-to-end software systems from the ground up."
            </div>

            <p className="leading-relaxed">
              When I step away from the IDE, you can usually find me analyzing the latest UI/UX design trends, experimenting with new cross-platform mobile frameworks, or continuous learning to stay at the cutting edge of web technology.
            </p>

            {/* Tech Stack Pills */}
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700">
              <h4 className="text-base font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-wider">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript / TypeScript', 'React.js', 'Next.js', 'Node.js', 'PHP', 'Flutter', 'UI / UX Design', 'SQL & DB Management'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>
      </main>
    </div>
  );
}

// Reusable micro-component for consistency
function InfoCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">{desc}</p>
    </div>
  )
}