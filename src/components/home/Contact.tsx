'use client'; // এটা খুবই জরুরি Next.js App Router এর জন্য

import { contactData } from "@/data/contactData";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 mt-2">Have a project in mind or want to say hi?</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info (Left Side) */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-gray-600">
              I am currently open for freelance projects and job opportunities. Feel free to reach out!
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FaEnvelope />
                </div>
                <span>{contactData.email}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FaPhone />
                </div>
                <span>{contactData.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FaMapMarkerAlt />
                </div>
                <span>{contactData.address}</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="flex-1 bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;