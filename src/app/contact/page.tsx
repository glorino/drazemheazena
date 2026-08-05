"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import {
  FadeIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";
import { useState } from "react";

const serviceTimes = [
  {
    day: "Sunday",
    services: [
      { name: "First Service", time: "8:00 AM" },
      { name: "Second Service", time: "10:30 AM" },
    ],
    highlight: true,
  },
  {
    day: "Wednesday",
    services: [{ name: "Bible Study", time: "6:00 PM" }],
    highlight: false,
  },
  {
    day: "Friday",
    services: [{ name: "Power Night Prayer", time: "7:00 PM" }],
    highlight: false,
  },
  {
    day: "Saturday",
    services: [{ name: "Youth Ministry", time: "3:00 PM" }],
    highlight: false,
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Irabor Street, Upper Mission Extension",
      "Benin City, Edo State, Nigeria",
    ],
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 XXX XXX XXXX", "+234 XXX XXX XXXX"],
    link: "tel:+234XXXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@turningpointgospelcentre.com",
      "pastor@turningpointgospelcentre.com",
    ],
    link: "mailto:info@turningpointgospelcentre.com",
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
    href: "https://instagram.com",
    label: "Instagram",
    color: "bg-pink-500",
  },
  {
    icon: YoutubeIcon,
    href: "https://youtube.com/@weloveturningpoint",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              We would love to hear from you. Whether you have a question,
              need prayer, or want to visit our church, we are here for you.
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
                      Send Us a Message
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
                          <option value="prayer">Prayer Request</option>
                          <option value="visit">I Want to Visit</option>
                          <option value="membership">Membership Inquiry</option>
                          <option value="ministry">Ministry Information</option>
                          <option value="giving">Giving Question</option>
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
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
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
                        target={info.link.startsWith("http") ? "_blank" : undefined}
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
                    Service Times
                  </h3>
                  <div className="space-y-4">
                    {serviceTimes.map((schedule) => (
                      <div
                        key={schedule.day}
                        className={`rounded-xl p-4 ${
                          schedule.highlight
                            ? "bg-primary/10 border border-primary/20"
                            : "bg-cream"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`font-bold ${
                              schedule.highlight ? "text-primary" : "text-dark"
                            }`}
                          >
                            {schedule.day}
                          </span>
                          {schedule.highlight && (
                            <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                              Today
                            </span>
                          )}
                        </div>
                        {schedule.services.map((service) => (
                          <div
                            key={service.name}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-gray-600">
                              {service.name}
                            </span>
                            <span className="text-dark font-medium">
                              {service.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-dark mb-6">
                    Follow Us
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-xl">
              <div className="h-96 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream to-cream-dark">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-dark mb-2">
                      Find Us Here
                    </h3>
                    <p className="text-gray-600">
                      Irabor Street, Upper Mission Extension
                    </p>
                    <p className="text-gray-600">
                      Benin City, Edo State, Nigeria
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      Open in Google Maps
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
