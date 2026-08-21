"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  Users,
  Play,
  ArrowRight,
  Star,
  Globe,
  BookMarked,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Cross,
  Award,
  GraduationCap,
  Landmark,
  HandHelping,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  Floating,
} from "@/components/Animations";
import { useState, useEffect } from "react";

const stats = [
  { icon: Globe, value: "65+", label: "Countries Reached" },
  { icon: Heart, value: "100K+", label: "Lives Changed" },
  { icon: BookMarked, value: "14+", label: "Books Published" },
  { icon: Clock, value: "18+", label: "Years of Ministry" },
];

const pillars = [
  {
    icon: Cross,
    title: "Faith",
    description:
      "Christian ministry, preaching, teaching, prayer and spiritual leadership. A life rooted in the power of God's Word.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Studies in Mass Communication, Theology, Religious Studies, Christian Philosophy and Law. A commitment to lifelong learning.",
    color: "gold",
  },
  {
    icon: Landmark,
    title: "Enterprise",
    description:
      "Entrepreneurship across education, property, real estate and hospitality. Building institutions that create lasting value.",
    color: "purple",
  },
  {
    icon: HandHelping,
    title: "Impact",
    description:
      "Youth empowerment, humanitarian intervention, community development and mentorship through the William Azemhe Azena Turning Point Foundation.",
    color: "primary",
  },
];

const milestones = [
  {
    year: "2007",
    title: "Ministry Begins",
    description: "Joined Omega Fire Ministries as a pastor",
    image: "/azenababy.jpg",
  },
  {
    year: "2015",
    title: "Global Crusades",
    description: "Expanded to international ministry across 65+ countries",
    image: "/azenacommunity.jpg",
  },
  {
    year: "2020",
    title: "Literary Ministry",
    description: "Published 14+ books on faith, healing and spiritual growth",
    image: "/azenaphd.jpg",
  },
  {
    year: "2024",
    title: "Public Leadership",
    description: "NNPP Governorship Candidate for Edo State",
    image: "/azenagovernment.jpg",
  },
  {
    year: "2026",
    title: "Turning Point",
    description: "Established Turning Point Gospel Centre International",
    image: "/azenateam.jpg",
  },
];

const testimonials = [
  {
    name: "Grace Okonkwo",
    role: "Follower since 2019",
    text: "Dr. Azemhe Azena's teachings have transformed my walk with God and given me purpose. His ministry is a beacon of hope to our generation.",
    rating: 5,
  },
  {
    name: "Emmanuel Igbinoba",
    role: "Youth Leader",
    description: "",
    text: "Under Dr. Azena's mentorship, thousands of young people have discovered their calling. I found my purpose through his guidance.",
    rating: 5,
  },
  {
    name: "Mercy Aikhionbare",
    role: "Community Member",
    text: "The anointing on Dr. Azena's life is evident in everything he does. I have witnessed countless lives transformed through his ministry.",
    rating: 5,
  },
  {
    name: "Blessing Edevbie",
    role: "Ministry Director",
    text: "In 18 years of following Dr. Azena's ministry, I have seen God's faithfulness manifest in extraordinary ways. He is a beacon of hope.",
    rating: 5,
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DSC_3963 copy.jpg.jpeg"
            alt="Dr. Azemhe Azena"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
            style={{ objectPosition: "50% 15%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          style={{ animation: "float 4s ease-in-out infinite 1s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            <FadeIn direction="up" delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 mb-8">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-medium">
                  Minister &bull; Author &bull; Entrepreneur &bull; Leader
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Dr. Azemhe{" "}
                <span className="text-gradient">Azena</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <p className="text-xl md:text-2xl text-gold font-semibold mb-6 tracking-wide">
                A Voice of Faith. A Leader of Impact. A Builder of People.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Christian minister, teacher, entrepreneur, educationist, public
                leader and advocate for human development whose life has been
                shaped by faith, service and a desire to make a meaningful
                difference in the lives of people.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Discover His Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="https://youtube.com/@weloveturningpoint"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Watch Sermons
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Floating duration={2}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
            </div>
          </Floating>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-gold/10 rounded-xl mb-3">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-dark mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                The Five Pillars
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                A Life of{" "}
                <span className="text-gradient">Purpose & Influence</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The story of Dr. Azemhe Azena is built on five central pillars
                that define his journey of faith, leadership and service.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      pillar.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary"
                        : pillar.color === "gold"
                        ? "bg-gold/10 group-hover:bg-gold"
                        : "bg-purple/10 group-hover:bg-purple"
                    }`}
                  >
                    <pillar.icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        pillar.color === "primary"
                          ? "text-primary group-hover:text-white"
                          : pillar.color === "gold"
                          ? "text-gold group-hover:text-dark"
                          : "text-purple group-hover:text-white"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/DSC_4476 copy.jpg.jpeg"
                    alt="Dr. Azemhe Azena"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">18+</div>
                  <div className="text-sm opacity-90">Years of Ministry</div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                  About Dr. Azemhe Azena
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  A Life of{" "}
                  <span className="text-gradient">Faith & Impact</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Born in 1979 in Okpella, Edo State, Nigeria, Dr. Azemhe
                  Azena is a seasoned pastor, global evangelist, author,
                  entrepreneur and philanthropist whose ministry has impacted
                  millions across the world.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With a Doctorate in Philosophy (PhD), Dr. Azena combines
                  scholarly depth with apostolic fire. His journey spans
                  pastoral ministry, education, entrepreneurship, humanitarian
                  intervention and public leadership — each chapter building
                  upon the last.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Read His Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/ministries"
                    className="inline-flex items-center justify-center gap-2 bg-cream border-2 border-cream-dark text-dark px-8 py-4 rounded-full font-semibold hover:bg-cream-dark transition-all duration-300"
                  >
                    Explore Ministry
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                The Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key <span className="text-gradient">Milestones</span>
              </h2>
            </div>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-gold via-primary to-purple" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn
                  key={milestone.year}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <div
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 inline-flex items-center gap-5">
                          {milestone.image && (
                            <div className={`w-28 h-28 rounded-xl overflow-hidden shrink-0 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                              <Image
                                src={milestone.image}
                                alt={milestone.title}
                                width={112}
                                height={112}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                            <span className="text-gold font-bold text-lg">
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold text-white mt-1">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400 mt-1">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-gold rounded-full border-4 border-dark shrink-0 z-10" />
                      <div className="flex-1" />
                    </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                What People Say
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Lives <span className="text-gradient">Transformed</span>
              </h2>
            </div>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold fill-gold"
                    />
                  )
                )}
              </div>
              <p className="text-xl md:text-2xl text-dark text-center mb-8 leading-relaxed italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>
              <div className="text-center">
                <h4 className="text-lg font-bold text-dark">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-primary text-sm">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-10 h-10 bg-dark/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-dark" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-primary w-8"
                        : "bg-dark/20 hover:bg-dark/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="w-10 h-10 bg-dark/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-dark" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <Floating duration={4}>
              <Award className="w-16 h-16 text-gold mx-auto mb-6" />
            </Floating>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Journey{" "}
              <span className="text-gold">Continues</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              What began as a personal journey has grown into a wider platform
              of influence. Discover the story, experience the ministry, and
              witness the impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-dark px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                Discover His Story
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
