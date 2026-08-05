"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./SocialIcons";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

const ministries = [
  "Youth Ministry",
  "Women Ministry",
  "Men Ministry",
  "Children Ministry",
  "Music Ministry",
  "Prayer Ministry",
  "Outreach Ministry",
];

const socialLinks = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: YoutubeIcon, href: "https://youtube.com/@weloveturningpoint", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribeStatus("success");
        setSubscribeMessage(data.message);
        setEmail("");
      } else {
        setSubscribeStatus("error");
        setSubscribeMessage(data.error);
      }
    } catch {
      setSubscribeStatus("error");
      setSubscribeMessage("Something went wrong. Please try again.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for updates and spiritual growth
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 md:w-80 px-5 py-3 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === "loading"}
                  className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-r-full font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {subscribeStatus === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            </div>
            {subscribeMessage && (
              <p className={`text-sm mt-2 ${subscribeStatus === "success" ? "text-green-400" : "text-red-400"}`}>
                {subscribeMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-7 h-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4L20 36M12 12L28 12M10 20L30 20"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="8" r="3" fill="#D4A843" />
                  <path
                    d="M16 28C16 28 18 32 20 34C22 32 24 28 24 28"
                    stroke="#D4A843"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Turning Point</h4>
                <p className="text-xs text-gold tracking-wider uppercase">
                  Gospel Center International
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A place of transformation, hope, and divine encounters. Where
              lives are changed and destinies are fulfilled through the power of
              God&apos;s word.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+234XXXXXXXXXX"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+234 XXX XXX XXXX</span>
              </a>
              <a
                href="mailto:info@turningpointgospelcentre.com"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@turningpointgospelcentre.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  Irabor Street, Upper Mission Extension, Benin City, Edo State,
                  Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Our Ministries
            </h4>
            <ul className="space-y-3">
              {ministries.map((ministry) => (
                <li key={ministry}>
                  <Link
                    href="/ministries"
                    className="text-gray-400 hover:text-gold hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {ministry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Service Times
            </h4>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h5 className="text-gold font-semibold mb-2">Sunday Service</h5>
                <p className="text-gray-400 text-sm">
                  First Service: 8:00 AM
                </p>
                <p className="text-gray-400 text-sm">
                  Second Service: 10:30 AM
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h5 className="text-gold font-semibold mb-2">
                  Wednesday Service
                </h5>
                <p className="text-gray-400 text-sm">Bible Study: 6:00 PM</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h5 className="text-gold font-semibold mb-2">Friday Service</h5>
                <p className="text-gray-400 text-sm">
                  Power Night: 7:00 PM
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              &copy; {new Date().getFullYear()} Turning Point Gospel Center
              International. Made with{" "}
              <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by
              Dr. Azemhe Azena
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
