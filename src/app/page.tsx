import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center text-white py-20">
        <Image
          src="/portfolio.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-white mt-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-6 tracking-tight">
          Hello, I&apos;m <span className="text-yellow-300">Mike William</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-100 leading-relaxed px-4">
          I&apos;m a versatile Software Developer specializing in <strong>Frontend</strong>, <strong>Backend</strong>, and <strong>Mobile App Development</strong>. I bridge the gap between seamless user experiences and robust architectures.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-blue-600 hover:bg-yellow-300 hover:text-blue-800 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Hire Me
        </button>
      </section>

      <section className="bg-slate-50 py-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 inline-block relative">
          Skills Overview
          <div className="absolute w-1/2 h-1 bg-blue-500 bottom-0 left-1/4 -mb-4 rounded-full"></div>
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-slate-600 text-lg">
           Here&apos;s a look at the core technologies I use to build scalable web and mobile applications.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Frontend Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all duration-300 text-left group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">Frontend Web</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center"><span className="text-blue-500 mr-3 text-xl leading-none">•</span> React.js</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3 text-xl leading-none">•</span> Next.js Framework</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3 text-xl leading-none">•</span> JavaScript / TypeScript</li>
            </ul>
          </div>

          {/* Backend Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all duration-300 text-left group">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">Backend & DB</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center"><span className="text-indigo-500 mr-3 text-xl leading-none">•</span> Node.js</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-3 text-xl leading-none">•</span> Python / PHP</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-3 text-xl leading-none">•</span> DB Management</li>
            </ul>
          </div>

          {/* Mobile & Design Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all duration-300 text-left group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">Mobile & Design</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center"><span className="text-emerald-500 mr-3 text-xl leading-none">•</span> Flutter</li>
              <li className="flex items-center"><span className="text-emerald-500 mr-3 text-xl leading-none">•</span> Cross-platform Apps</li>
              <li className="flex items-center"><span className="text-emerald-500 mr-3 text-xl leading-none">•</span> UI/UX Design</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
