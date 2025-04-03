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
        <h1 className="text-4xl font-bold mt-4">Hello, my name is <br /><span className="text-white">Mike William</span></h1>
        <p className="mt-3 max-w-2xl">
          I'm a Web developer specialized in frontend and backend development web apps. I write about web development on my blog.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-md">
          Hire Me
        </button>
      </section>

      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Skills Overview</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          I have more than 3 years of experience building  web applications. Below is an overview of my main technical skills.
        </p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-gray-800 font-bold">Frontend</h3>
            <ul className="mt-2 text-gray-600">
              <li>✔ React </li>
              <li>✔ JavaScript/Typescript</li>
              <li>✔ Next.js</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-gray-800 font-bold">Backend</h3>
            <ul className="mt-2 text-gray-600">
              <li>✔ Python </li>
              <li>✔Strapi</li>
              <li>✔ PHP</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-gray-800 font-bold">Others</h3>
            <ul className="mt-2 text-gray-600">
              <li>✔ Database Management </li>
              <li>✔ Network Administrator</li>
              <li>✔ UI/UX Design</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
