import React from "react";
import { Facebook, Instagram, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10 flex flex-col items-center">
        {/* Logo / Brand */}
        <h2 className="text-2xl font-bold text-white mb-4">Job Hunt</h2>
        <p className="text-sm text-gray-400 mb-6">
          Connecting people with jobs ✨
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6"></div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-sky-500 transition-colors"
          >
            <Send size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-pink-500 transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-green-500 transition-colors"
          >
            <MessageCircle size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
