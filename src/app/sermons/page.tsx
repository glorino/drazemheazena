"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  Search,
  Filter,
  Headphones,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { YoutubeIcon } from "@/components/SocialIcons";
import {
  FadeIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";
import { useState } from "react";

const sermonImages = [
  "/DSC_4476 copy.jpg.jpeg",
  "/DSC_3960 copy.jpg.jpeg",
  "/DSC_4475 copy.jpg.jpeg",
  "/DSC_3961 copy.jpg.jpeg",
  "/DSC_3963 copy.jpg.jpeg",
  "/DSC_3960 copy.jpg.jpeg",
  "/DSC_4476 copy.jpg.jpeg",
  "/DSC_4475 copy.jpg.jpeg",
  "/DSC_3963 copy.jpg.jpeg",
];

const featuredSermon = {
  title: "The Power of a Turning Point",
  speaker: "Dr. Azemhe Azena PhD",
  date: "August 3, 2026",
  scripture: "Acts 3:19",
  duration: "45:22",
  description:
    "In this powerful message, Dr. Azena explores the transformative power of encountering God. Every genuine encounter with the Almighty creates a turning point that redirects the course of your life, family, and destiny. Learn how to position yourself for divine encounters that will change everything.",
  image: "/DSC_4476 copy.jpg.jpeg",
};

const sermons = [
  {
    title: "Walking in Divine Authority",
    speaker: "Dr. Azemhe Azena PhD",
    date: "July 27, 2026",
    scripture: "Luke 10:19",
    duration: "52:15",
    image: "/DSC_3960 copy.jpg.jpeg",
    series: "Kingdom Authority",
  },
  {
    title: "The Prophetic Dimension of Faith",
    speaker: "Dr. Azemhe Azena PhD",
    date: "July 20, 2026",
    scripture: "Hebrews 11:1",
    duration: "48:30",
    image: "/DSC_4475 copy.jpg.jpeg",
    series: "Walking in Faith",
  },
  {
    title: "Breaking the Yoke of Limitation",
    speaker: "Dr. Azemhe Azena PhD",
    date: "July 13, 2026",
    scripture: "Isaiah 58:6",
    duration: "55:10",
    image: "/DSC_3961 copy.jpg.jpeg",
    series: "Deliverance Series",
  },
  {
    title: "The Secret Place of Power",
    speaker: "Dr. Azemhe Azena PhD",
    date: "July 6, 2026",
    scripture: "Psalm 91:1",
    duration: "47:45",
    image: "/DSC_3963 copy.jpg.jpeg",
    series: "Prayer & Intercession",
  },
  {
    title: "Destiny Helpers and Divine Connections",
    speaker: "Dr. Azemhe Azena PhD",
    date: "June 29, 2026",
    scripture: "Proverbs 27:17",
    duration: "50:20",
    image: "/DSC_3960 copy.jpg.jpeg",
    series: "Kingdom Relationships",
  },
  {
    title: "Supernatural Prosperity Principles",
    speaker: "Dr. Azemhe Azena PhD",
    date: "June 22, 2026",
    scripture: "Deuteronomy 8:18",
    duration: "53:40",
    image: "/DSC_4476 copy.jpg.jpeg",
    series: "Financial Breakthrough",
  },
  {
    title: "The Anointing That Breaks Yokes",
    speaker: "Dr. Azemhe Azena PhD",
    date: "June 15, 2026",
    scripture: "Isaiah 10:27",
    duration: "49:15",
    image: "/DSC_4475 copy.jpg.jpeg",
    series: "Power & Anointing",
  },
  {
    title: "Walking in the Spirit",
    speaker: "Dr. Azemhe Azena PhD",
    date: "June 8, 2026",
    scripture: "Galatians 5:16",
    duration: "51:30",
    image: "/DSC_3961 copy.jpg.jpeg",
    series: "Spiritual Growth",
  },
  {
    title: "The End-Time Church",
    speaker: "Dr. Azemhe Azena PhD",
    date: "June 1, 2026",
    scripture: "Matthew 24:42",
    duration: "56:00",
    image: "/DSC_3963 copy.jpg.jpeg",
    series: "Eschatology",
  },
];

const categories = [
  "All",
  "Faith",
  "Prayer",
  "Deliverance",
  "Prosperity",
  "Relationships",
  "Leadership",
];

export default function SermonsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DSC_4476 copy.jpg.jpeg"
            alt="Dr. Azena preaching"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Sermons & Teachings
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Word That <span className="text-gradient">Transforms</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Be blessed by powerful, life-changing messages from Dr. Azemhe
              Azena that ignite faith, inspire purpose, and ignite revival in
              your heart.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-primary font-semibold">Featured Sermon</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={featuredSermon.image}
                    alt={featuredSermon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/30 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl"
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {featuredSermon.duration}
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                      Latest Message
                    </span>
                    <span className="bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-dark mb-3">
                    {featuredSermon.title}
                  </h2>
                  <p className="text-gold font-semibold mb-2">
                    {featuredSermon.speaker}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredSermon.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {featuredSermon.scripture}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {featuredSermon.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://youtube.com/@weloveturningpoint"
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Watch Now
                    </Link>
                    <button className="inline-flex items-center gap-2 bg-cream border border-cream-dark text-dark px-6 py-3 rounded-full font-semibold hover:bg-cream-dark transition-all duration-300">
                      <Headphones className="w-5 h-5" />
                      Listen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sermon Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
                  Recent Sermons
                </h2>
                <p className="text-gray-600">
                  Browse our collection of powerful messages
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-cream text-gray-600 hover:bg-cream-dark"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <StaggerItem key={sermon.title}>
                <div className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-52">
                    <Image
                      src={sermon.image}
                      alt={sermon.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl"
                      >
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </motion.button>
                    </div>
                    <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium">
                      {sermon.series}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {sermon.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                      {sermon.title}
                    </h3>
                    <p className="text-gold text-sm font-semibold mb-2">
                      {sermon.speaker}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {sermon.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {sermon.scripture}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-colors duration-300">
                Load More Sermons
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-20 bg-gradient-to-r from-dark via-dark-light to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <YoutubeIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Watch on <span className="text-red-500">YouTube</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Subscribe to our YouTube channel for live services, powerful
              worship moments, and transformative teachings from Dr. Azemhe
              Azena.
            </p>
            <Link
              href="https://youtube.com/@weloveturningpoint"
              target="_blank"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <YoutubeIcon className="w-6 h-6" />
              Subscribe Now
              <ExternalLink className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
