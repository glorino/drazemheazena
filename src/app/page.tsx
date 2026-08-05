"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Music,
  Users,
  Play,
  ArrowRight,
  Star,
  Globe,
  Trophy,
  BookMarked,
  Clock,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Cross,
  Church,
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  Floating,
} from "@/components/Animations";
import CountdownTimer from "@/components/CountdownTimer";
import { useState, useEffect } from "react";

const stats = [
  { icon: Globe, value: "65+", label: "Countries Reached" },
  { icon: Heart, value: "100K+", label: "Lives Changed" },
  { icon: BookMarked, value: "14+", label: "Books Published" },
  { icon: Clock, value: "18+", label: "Years of Ministry" },
];

const features = [
  {
    icon: BookOpen,
    title: "Bible Study",
    description:
      "Deep dive into God's Word with structured study groups, personal devotion guides, and life-changing teachings that illuminate scripture for everyday living.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Prayer Ministry",
    description:
      "Powerful intercessory prayer teams covering the needs of our congregation and community, with dedicated prayer chains and breakthrough sessions.",
    color: "gold",
  },
  {
    icon: Music,
    title: "Worship Experience",
    description:
      "Spirit-filled worship led by our anointed music ministry, creating an atmosphere where heaven touches earth and hearts are drawn to God's presence.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Fellowship",
    description:
      "Building meaningful connections through small groups, community events, and shared experiences that strengthen bonds of faith and friendship.",
    color: "primary",
  },
];

const testimonials = [
  {
    name: "Sister Grace Okonkwo",
    role: "Member since 2019",
    text: "Turning Point Gospel Center has been my spiritual home for years. Dr. Azena's teachings have transformed my walk with God and given me purpose. The community here is truly loving.",
    rating: 5,
  },
  {
    name: "Brother Emmanuel Igbinoba",
    role: "Youth Leader",
    text: "The PATHFINDERS youth ministry under Dr. Azena's vision has helped thousands of young people discover their calling. I found my purpose and destiny in this church.",
    rating: 5,
  },
  {
    name: "Deaconess Mercy Aikhionbare",
    role: "Prayer Ministry Head",
    text: "The anointing on Dr. Azena's life is evident in every service. I have witnessed countless healings and breakthroughs in our prayer meetings. God is truly here.",
    rating: 5,
  },
  {
    name: "Pastor (Mrs.) Blessing Edevbie",
    role: "Ministry Director",
    text: "In 18 years of following this ministry, I have seen God's faithfulness manifest in extraordinary ways. This church is a beacon of hope to our generation.",
    rating: 5,
  },
];

const events = [
  {
    title: "Sunday Celebration Service",
    date: "Every Sunday",
    time: "8:00 AM & 10:30 AM",
    location: "Main Auditorium",
    tag: "Weekly",
  },
  {
    title: "Midweek Bible Study",
    date: "Every Wednesday",
    time: "6:00 PM",
    location: "Main Auditorium",
    tag: "Weekly",
  },
  {
    title: "Power Night Prayer",
    date: "Every Friday",
    time: "7:00 PM",
    location: "Main Auditorium",
    tag: "Weekly",
  },
  {
    title: "Monthly Healing Service",
    date: "First Saturday of Month",
    time: "8:00 AM",
    location: "Main Auditorium",
    tag: "Monthly",
  },
];

function getNextSunday(): string {
  const now = new Date();
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  nextSunday.setHours(8, 0, 0, 0);
  return nextSunday.toISOString();
}

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
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/DSC_3963 copy.jpg.jpeg"
            alt="Dr. Azemhe Azena at the pulpit"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
            style={{ objectPosition: "50% 15%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>

        {/* Animated Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          style={{ animation: "float 4s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple/15 rounded-full blur-3xl"
          style={{ animation: "float 5s ease-in-out infinite 2s" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            <FadeIn direction="up" delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 mb-8">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-medium">
                  Welcome to Turning Point Gospel Center International
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Where{" "}
                <span className="text-gradient">Lives Are</span>
                <br />
                Transformed
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                A place of transformation, hope, and divine encounters. Under
                the anointed leadership of{" "}
                <span className="text-gold font-semibold">
                  Dr. Azemhe Azena PhD
                </span>
                , we are raising a generation of believers who are agents of
                transformation in their sphere of influence.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="https://youtube.com/@weloveturningpoint"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Watch Live
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
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
                {stats.map((stat, index) => (
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

      {/* Features Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Experience God&apos;s{" "}
                <span className="text-gradient">Transforming Power</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our ministries are designed to nurture your spiritual growth and
                connect you with a community of believers.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={feature.title}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      feature.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary"
                        : feature.color === "gold"
                        ? "bg-gold/10 group-hover:bg-gold"
                        : "bg-purple/10 group-hover:bg-purple"
                    }`}
                  >
                    <feature.icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        feature.color === "primary"
                          ? "text-primary group-hover:text-white"
                          : feature.color === "gold"
                          ? "text-gold group-hover:text-dark"
                          : "text-purple group-hover:text-white"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
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
                    alt="Dr. Azemhe Azena preaching"
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
                  About Our Church
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  A Legacy of{" "}
                  <span className="text-gradient">Faith & Transformation</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2026 by Dr. Azemhe Azena PhD, Turning Point
                  Gospel Center International represents the culmination of 18
                  years of dedicated pastoral ministry. Previously serving at
                  Omega Fire Ministries, Dr. Azena now leads a vibrant
                  community of believers committed to changing lives through the
                  power of God&apos;s Word.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With a vision to raise agents of transformation, our church
                  has impacted thousands across 65+ countries through crusades,
                  conferences, books, and the transformative power of the
                  Gospel. Dr. Azena is also the President of the William Azemhe
                  Azena Turning Point Foundation, extending our reach to
                  humanitarian efforts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Read Our Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/ministries"
                    className="inline-flex items-center justify-center gap-2 bg-cream border-2 border-cream-dark text-dark px-8 py-4 rounded-full font-semibold hover:bg-cream-dark transition-all duration-300"
                  >
                    Explore Ministries
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                Testimonies of Faith
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-gradient">Members Say</span>
              </h2>
            </div>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
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
              <p className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>
              <div className="text-center">
                <h4 className="text-lg font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gold text-sm">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-gold w-8"
                        : "bg-white/30 hover:bg-white/50"
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
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events with Countdown */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Join Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Be part of our vibrant community gatherings and experience
                God&apos;s presence in a powerful way.
              </p>
            </div>
          </FadeIn>

          {/* Countdown to Next Sunday Service */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-gradient-to-br from-dark via-dark-light to-primary/30 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <span className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Next Sunday Service
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
                    Sunday Celebration Service
                  </h3>
                  <p className="text-gray-400 mt-2">
                    First Service: 8:00 AM | Second Service: 10:30 AM
                  </p>
                </div>
                <div className="flex justify-center">
                  <CountdownTimer
                    targetDate={getNextSunday()}
                    label="Service starts in"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Event Cards */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-primary to-primary-dark p-6 text-white">
                    <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {event.tag}
                    </span>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-colors duration-300"
              >
                View All Events
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
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
              <Church className="w-16 h-16 text-gold mx-auto mb-6" />
            </Floating>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of Something{" "}
              <span className="text-gold">Greater</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your generosity helps us reach more souls, build stronger
              communities, and spread the Gospel across nations. Join us in
              making a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/give"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-dark px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                Give Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Join Our Church
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
