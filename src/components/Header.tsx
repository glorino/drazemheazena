"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Heart,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about#pastor", label: "Biography" },
      { href: "/about#history", label: "Journey" },
      { href: "/about#vision", label: "Vision & Mission" },
    ],
  },
  { href: "/ministries", label: "Ministry" },
  { href: "/sermons", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:08107659761" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>0810 765 9761</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Benin City, Edo State, Nigeria</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>Ministry &bull; Education &bull; Enterprise &bull; Impact</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-gold/30">
                  <Image
                    src="/logo.png"
                    alt="Dr. Azemhe Azena"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full animate-glow" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-dark leading-tight">
                  Dr. Azemhe Azena
                </h1>
                <p className="text-xs text-primary font-semibold tracking-wider uppercase">
                  Faith &bull; Leadership &bull; Impact
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.href)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-dark hover:text-primary transition-colors duration-200 flex items-center gap-1 rounded-lg hover:bg-primary/5"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </Link>
                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-dark hover:text-primary hover:bg-primary/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/about"
                className="flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-dark px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                Explore His Story
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-dark" />
              ) : (
                <Menu className="w-6 h-6 text-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-dark hover:text-primary hover:bg-primary/5 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-dark px-5 py-3 rounded-full font-semibold"
                  >
                    <Heart className="w-4 h-4" />
                    Explore His Story
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-primary text-white px-5 py-3 rounded-full font-semibold"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
