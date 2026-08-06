"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Music,
  Heart,
  BookOpen,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CalendarDays,
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";
import { useState } from "react";

const weeklyEvents = [
  {
    title: "Turning Point Service",
    description:
      "Join us for powerful worship, anointed preaching, and divine encounters. Our Sunday services are where lives are transformed and destinies are redirected through the undiluted Word of God.",
    day: "Every Sunday",
    time: "7:00 AM – 9:30 AM",
    location: "Main Auditorium",
    icon: Sparkles,
    color: "primary",
    features: ["Live Worship", "Anointed Preaching", "Prayer Ministry", "Children's Church"],
  },
  {
    title: "Calvary Experience",
    description:
      "Deepen your understanding of God's Word through our comprehensive Bible teaching sessions. Dr. Azena leads transformative sessions that illuminate scripture and apply it to everyday life.",
    day: "Every Wednesday",
    time: "4:00 PM – 6:00 PM",
    location: "Main Auditorium",
    icon: BookOpen,
    color: "gold",
    features: ["In-depth Teaching", "Q&A Session", "Prayer Time", "Fellowship"],
  },
  {
    title: "Counselling Hours",
    description:
      "Personal pastoral counselling sessions with Dr. Azena for those seeking spiritual guidance, prayer, and one-on-one ministry. A time for divine direction and clarity.",
    day: "Monday – Tuesday",
    time: "7:00 AM – 10:00 AM",
    location: "Main Auditorium",
    icon: Heart,
    color: "purple",
    features: ["One-on-One Counselling", "Prayer", "Spiritual Guidance", "Confidential"],
  },
  {
    title: "TP Hebrew Women Hours",
    description:
      "A dedicated time for women to gather in prayer, fellowship, and spiritual growth. Women of God come together for intercession, testimony, and strengthening.",
    day: "Every Monday",
    time: "9:00 AM – 12:00 PM",
    location: "Main Auditorium",
    icon: Users,
    color: "primary",
    features: ["Women's Prayer", "Fellowship", "Testimony", "Intercession"],
  },
];

const specialEvents = [
  {
    title: "Living Water Service",
    description:
      "A powerful monthly encounter with the Holy Spirit on the first Sunday of every month. Come expectant for an outpouring of God's living water that refreshes, restores, and revives.",
    date: "First Sunday of Every Month",
    time: "7:00 AM",
    location: "Main Auditorium",
    tag: "Monthly",
    featured: true,
  },
  {
    title: "Judgment Service",
    description:
      "A solemn monthly service focused on divine justice, correction, and realignment with God's purposes. A time for serious spiritual examination and repentance.",
    date: "Second Sunday of Every Month",
    time: "During Service",
    location: "Main Auditorium",
    tag: "Monthly",
    featured: true,
  },
  {
    title: "Prophetic Sunday",
    description:
      "A Spirit-led service dedicated to prophetic ministration, divine revelation, and spiritual impartation. Come ready to receive a word from the Lord.",
    date: "Third Sunday of Every Month",
    time: "During Service",
    location: "Main Auditorium",
    tag: "Monthly",
    featured: true,
  },
  {
    title: "Purity Service",
    description:
      "A monthly service focused on holiness, sanctification, and consecration. A time to cleanse our hearts and realign with God's standards for righteous living.",
    date: "Last Sunday of Every Month",
    time: "During Service",
    location: "Main Auditorium",
    tag: "Monthly",
    featured: false,
  },
  {
    title: "Family Service",
    description:
      "A special monthly service dedicated to families, marriage enrichment, parenting guidance, and building strong homes for God's glory.",
    date: "Second Saturday of Every Month",
    time: "7:00 AM",
    location: "Main Auditorium",
    tag: "Monthly",
    featured: false,
  },
  {
    title: "Three Nights of Answers",
    description:
      "Three intense nights of prayer, fasting, and prophetic encounters. Come with your requests and leave with divine answers from heaven.",
    date: "Every 3rd Wed/Thu/Fri",
    time: "10:00 PM",
    location: "Main Auditorium",
    tag: "Special",
    featured: true,
  },
  {
    title: "I Must Marry Well",
    description:
      "A dedicated programme for singles seeking godly marriage. Monthly sessions on relationship wisdom, purity, and preparing for a God-ordained spouse.",
    date: "First Monday of Every Month",
    time: "3:00 PM",
    location: "Main Auditorium",
    tag: "Monthly",
    featured: false,
  },
  {
    title: "Annual Church Convention",
    description:
      "Our flagship annual event featuring guest ministers, powerful worship, prophetic ministrations, and transformative teachings. A week-long spiritual retreat that renews faith and ignites revival.",
    date: "31st December 2026",
    time: "Various Times",
    location: "Main Auditorium & Convention Grounds",
    tag: "Annual",
    featured: true,
  },
];

const calendarDays = [
  { day: 1, events: ["Turning Point Service", "Living Water Service"], hasEvent: true },
  { day: 2, events: [], hasEvent: false },
  { day: 3, events: [], hasEvent: false },
  { day: 4, events: ["Calvary Experience"], hasEvent: true },
  { day: 5, events: [], hasEvent: false },
  { day: 6, events: [], hasEvent: false },
  { day: 7, events: [], hasEvent: false },
  { day: 8, events: ["Turning Point Service", "Judgment Service"], hasEvent: true },
  { day: 9, events: [], hasEvent: false },
  { day: 10, events: [], hasEvent: false },
  { day: 11, events: ["Calvary Experience"], hasEvent: true },
  { day: 12, events: [], hasEvent: false },
  { day: 13, events: [], hasEvent: false },
  { day: 14, events: [], hasEvent: false },
  { day: 15, events: ["Turning Point Service", "Prophetic Sunday"], hasEvent: true },
  { day: 16, events: [], hasEvent: false },
  { day: 17, events: [], hasEvent: false },
  { day: 18, events: ["Calvary Experience"], hasEvent: true },
  { day: 19, events: ["Three Nights of Answers"], hasEvent: true },
  { day: 20, events: [], hasEvent: false },
  { day: 21, events: [], hasEvent: false },
  { day: 22, events: ["Turning Point Service"], hasEvent: true },
  { day: 23, events: [], hasEvent: false },
  { day: 24, events: [], hasEvent: false },
  { day: 25, events: ["Calvary Experience"], hasEvent: true },
  { day: 26, events: [], hasEvent: false },
  { day: 27, events: [], hasEvent: false },
  { day: 28, events: [], hasEvent: false },
  { day: 29, events: ["Turning Point Service", "Purity Service"], hasEvent: true },
  { day: 30, events: [], hasEvent: false },
  { day: 31, events: [], hasEvent: false },
];

export default function EventsPage() {
  const [currentMonth] = useState("August 2026");

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DSC_3960 copy.jpg.jpeg"
            alt="Church events and gatherings"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Events & Gatherings
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              From weekly services to annual conventions, there is always
              something happening at Turning Point Gospel Center. Come
              experience God&apos;s presence in a powerful way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Weekly Schedule
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Weekly <span className="text-gradient">Gatherings</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join us every week for transformative services that will
                strengthen your faith and connect you with God&apos;s purpose.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weeklyEvents.map((event) => (
              <StaggerItem key={event.title}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div
                    className={`p-8 ${
                      event.color === "primary"
                        ? "bg-gradient-to-br from-primary to-primary-dark"
                        : event.color === "gold"
                        ? "bg-gradient-to-br from-gold to-gold-light"
                        : "bg-gradient-to-br from-purple to-purple/80"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <event.icon className="w-10 h-10 text-white" />
                      <div className="text-right">
                        <div className="text-white/80 text-sm font-medium">
                          {event.day}
                        </div>
                        <div className="text-white text-lg font-bold">
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {event.features.map((feature) => (
                        <div
                          key={feature}
                          className="bg-cream rounded-lg px-3 py-2 text-sm text-gray-600 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Special Events
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mark your calendars for these special gatherings that will
                take your faith to the next level.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialEvents.map((event) => (
              <StaggerItem key={event.title}>
                <div className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          event.tag === "Annual"
                            ? "bg-primary/10 text-primary"
                            : event.tag === "Monthly"
                            ? "bg-gold/10 text-gold"
                            : "bg-purple/10 text-purple"
                        }`}
                      >
                        {event.tag}
                      </span>
                      {event.featured && (
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-cream-dark">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                Calendar
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-gradient">{currentMonth}</span> Calendar
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-gold font-semibold text-sm py-3"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-xl p-2 flex flex-col items-center justify-center transition-colors ${
                      day.hasEvent
                        ? "bg-primary/20 hover:bg-primary/30 cursor-pointer"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        day.hasEvent ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {day.day}
                    </span>
                    {day.hasEvent && (
                      <div className="flex gap-0.5 mt-1">
                        {day.events.slice(0, 2).map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-1 bg-gold rounded-full"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary/20 rounded" />
                  <span className="text-gray-400">Has Event</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-gray-400">Event Indicator</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <CalendarDays className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Miss an Event
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter and follow us on social media to stay
              updated on all upcoming events, services, and special gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@weloveturningpoint"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-gold/20 border border-gold/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/30 transition-all duration-300"
              >
                Watch Live
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
