"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calendar,
  Globe,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";
import { useState } from "react";
import dynamic from "next/dynamic";

const ChurchMap = dynamic(() => import("@/components/ChurchMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-200 animate-pulse flex items-center justify-center">
      <MapPin className="w-8 h-8 text-primary animate-bounce" />
    </div>
  ),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Ministry Address",
    details: [
      "16 Irabor Street off Ewan Street",
      "Upper Mission Extension, Uteh, Ikpoba Okha LGA, Benin City, Edo State",
    ],
    link: "https://maps.google.com",
  },
  {
    icon: MapPin,
    title: "Foundation Address",
    details: [
      "Plot 8, Aduwawa",
      "Benin City, Edo State, Nigeria",
    ],
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["0810 765 9761", "090 9258 9071", "080 6497 001"],
    link: "tel:08107659761",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["turningpointgospelcentre@gmail.com"],
    link: "mailto:turningpointgospelcentre@gmail.com",
  },
];

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "https://facebook.com",
    label: "Facebook",
    color: "bg-blue-600",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com",
    label: "Twitter",
    color: "bg-sky-500",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/weloveturningpoint_?igsh=bHZhdGI4MHJkZmk4",
    label: "Instagram",
    color: "bg-pink-500",
  },
  {
    icon: YoutubeIcon,
    href: "https://youtube.com/@weloveturningpoint?si=0367S9PWnPIfW07s",
    label: "YouTube",
    color: "bg-red-600",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
        setSubmitMessage(data.message);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitMessage("");
        }, 5000);
      } else {
        setSubmitMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Whether you have a question, want to book Dr. Azemhe Azena for a
              speaking engagement, inquire about partnership, or simply want to
              connect — we are here for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-dark">
                      Send a Message
                    </h2>
                  </div>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <p className="text-green-700">
                        Thank you! Your message has been sent successfully. We
                        will get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">
                          Subject *
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="speaking">Speaking Engagement</option>
                          <option value="ministry">Ministry Inquiry</option>
                          <option value="media">Media & Interviews</option>
                          <option value="partnership">Partnership</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="counseling">Pastoral Counseling</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Type your message here..."
                      />
                    </div>
                    {submitMessage && (
                      <div
                        className={`p-4 rounded-xl text-sm font-medium ${
                          isSubmitted
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-dark mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <a
                        key={info.title}
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <info.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark mb-1">
                            {info.title}
                          </h4>
                          {info.details.map((detail) => (
                            <p key={detail} className="text-gray-500 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-dark mb-6">
                    Follow Dr. Azena
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-white rounded-xl p-4 flex items-center gap-3 hover:opacity-90 transition-opacity`}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="font-medium text-sm">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Quick Connect
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    For urgent inquiries or speaking engagement requests, reach
                    out directly.
                  </p>
                  <a
                    href="tel:08107659761"
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-xl">
              <div className="h-96 relative">
                <ChurchMap />
              </div>
              <div className="p-6 text-center">
                <div className="bg-primary text-white py-3 px-6 rounded-xl mb-4 inline-block">
                  <h3 className="text-xl font-bold">Dr. Azemhe Azena</h3>
                </div>
                <p className="text-gray-700 font-semibold">
                  No. 16 Irabor Street off Ewan Street
                </p>
                <p className="text-gray-700 font-semibold">
                  Upper Mission Extension, Uteh, Benin City, Edo State, Nigeria
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=6.3798,5.6658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Get Directions on Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
