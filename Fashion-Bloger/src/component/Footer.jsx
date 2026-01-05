import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#4B0000] text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-24">
        {/* Brand & Newsletter */}
        <div className="md:col-span-2">
          <h2 className="font-bold text-xl">MCKENZIE</h2>
          <p className="text-sm mb-4">FASHION BLOG</p>
          <p className="text-sm mb-4">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 pb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black bg-white flex-1"
            />
          </div>
          <button className="bg-pink-500 px-4 py-2 rounded font-bold hover:bg-pink-600 transition">
            Subscribe
          </button>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="font-bold mb-4 text-2xl">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hot Posts */}
        <div className="md:col-span-1">
          <h3 className="font-bold mb-4 text-2xl">Hot Posts</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                Your Guide to Look Stunning in Winter Clothes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Fall Clothes to look for when shopping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                2023 Fashion trends summary guide
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Me */}
        <div className="md:col-span-1">
          <h3 className="font-bold mb-4 text-2xl">Follow Me</h3>
          <ul className="space-y-2 text-sm flex flex-col gap-2">
            <li className="flex items-center gap-2 hover:text-pink-500">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-pink-500">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2 hover:text-pink-500">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2 hover:text-pink-500">
              <FaYoutube /> YouTube
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 py-10 text-center text-sm ">
        Copyright © 2026 Fashion Blogger | Powered by Surya Blogger
      </div>
    </footer>
  );
}

export default Footer;
