"use client"; 
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-blue-500 min-h-screen">
      <Navbar />
      <section className="flex flex-col items-center text-center text-white py-20">
        <h1 className="text-4xl font-bold">Contact</h1>
        <Image
          src="/portfolio.jpg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full border-4 border-white mt-4"
        />
        <p className="mt-4 max-w-2xl">
          I'm currently taking on freelance work. If you're interested in hiring me, please fill out the form below.
        </p>
      </section>

      {/* Social Links */}
      <section className="bg-white text-center py-8">
        <h2 className="text-gray-600 font-bold">Find me on:</h2>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Telegram Icon */}
          <a
            href="https://t.me/OchieMikeW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/mike-willy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-3xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/254790346968"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 p-2 text-gray-800 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-2 text-gray-800 border border-gray-300 rounded"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-4 p-2 text-gray-800 border border-gray-300 rounded h-32"
            required
          ></textarea>
          <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">
            Send It
          </button>
          {status && <p className="mt-4 text-white">{status}</p>}
        </form>
      </section>
    </div>
  );
}
