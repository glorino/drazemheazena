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
    title: "Sunday Celebration Service",
    description:
      "Join us for powerful worship, anointed preaching, and divine encounters. Our Sunday services are where lives are transformed and destinies are redirected through the undiluted Word of God.",
    day: "Every Sunday",
    time: "8:00 AM & 10:30 AM",
    location: "Main Auditorium",
    icon: Sparkles,
    color: "primary",
    features: ["Live Worship", "Anointed Preaching", "Prayer Ministry", "Children's Church"],
  },
  {
    title: "Midweek Bible Study",
    description:
      "Deepen your understanding of God's Word through our comprehensive Bible study sessions. Dr. Azena leads transformative teachings that illuminate scripture and apply it to everyday life.",
    day: "Every Wednesday",
    time: "6:00 PM",
    location: "Main Auditorium",
    icon: BookOpen,
    color: "gold",
    features: ["In-depth Teaching", "Q&A Session", "Prayer Time", "Fellowship"],
  },
  {
    title: "Power Night Prayer",
    description:
      "An intense prayer and intercession session where we engage in spiritual warfare, seek divine intervention, and experience breakthrough power. Come ready to pray through the night.",
    day: "Every Friday",
    time: "7:00 PM",
    location: "Main Auditorium",
    icon: Heart,
    color: "purple",
    features: ["Intercessory Prayer", "Spiritual Warfare", "Breakthrough Sessions", "Anointing Service"],
  },
  {
    title: "Youth Ministry - PATHFINDERS",
    description:
      "Our vibrant youth ministry meets every Saturday for worship, Bible study, mentorship, and fellowship. Young people discover their purpose and develop their gifts for God's glory.",
    day: "Every Saturday",
    time: "3:00 PM",
    location: "Youth Hall",
    icon: Users,
    color: "primary",
    features: ["Worship & Praise", "Bible Study", "Mentorship", "Fun Activities"],
  },
];

const specialEvents = [
  {
    title: "Monthly Healing Service",
    description:
      "A dedicated service focused on divine healing, deliverance, and miracles. Dr. Azena ministers with anointing as the Holy Spirit moves powerfully to heal the sick and set the captives free.",
    date: "First Saturday of Every Month",
    time: "8:00 AM",
    location: "Main Auditorium",
    tag: "Monthly",
    featured: true,
  },
  {
    title: "Annual Church Convention",
    description:
      "Our flagship annual event featuring guest ministers, powerful worship, prophetic ministrations, and transformative teachings. A week-long spiritual retreat that renews faith and ignites revival.",
    date: "December 2026 (Dates to be announced)",
    time: "Various Times",
    location: "Main Auditorium & Convention Grounds",
    tag: "Annual",
    featured: true,
  },
  {
    title: "Women's Conference - WOW Summit",
    description:
      "An empowering gathering for women of all ages to connect, learn, and be strengthened in their faith. Features workshops, keynote sessions, and worship experiences.",
    date: "September 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Hall",
    tag: "Annual",
    featured: false,
  },
  {
    title: "Men's breakfast Fellowship",
    description:
      "A time for men to connect over breakfast, share testimonies, and receive practical teachings on leadership, family, and faith in the marketplace.",
    date: "Last Saturday of Every Month",
    time: "8:00 AM",
    location: "Fellowship Hall",
    tag: "Monthly",
    featured: false,
  },
  {
    title: "Youth Camp - PATHFINDERS Retreat",
    description:
      "An exciting weekend retreat for young people featuring outdoor activities, worship sessions, leadership training, and life-changing encounters with God.",
    date: "August 2026",
    time: "Friday - Sunday",
    location: "Retreat Center",
    tag: "Annual",
    featured: false,
  },
  {
    title: "Community Outreach Day",
    description:
      "Join us as we take the Gospel to our community through street evangelism, medical outreach, food distribution, and acts of kindness that demonstrate God's love.",
    date: "Third Saturday of Every Month",
    time: "7:00 AM",
    location: "Various Communities",
    tag: "Monthly",
    featured: false,
  },
];

const calendarDays = [
  { day: 1, events: ["Sunday Service"], hasEvent: true },
  { day: 2, events: [], hasEvent: false },
  { day: 3, events: [], hasEvent: false },
  { day: 4, events: ["Bible Study"], hasEvent: true },
  { day: 5, events: ["Power Night"], hasEvent: true },
  { day: 6, events: ["Healing Service"], hasEvent: true },
  { day: 7, events: ["Youth Ministry"], hasEvent: true },
  { day: 8, events: ["Sunday Service"], hasEvent: true },
  { day: 9, events: [], hasEvent: false },
  { day: 10, events: [], hasEvent: false },
  { day: 11, events: ["Bible Study"], hasEvent: true },
  { day: 12, events: ["Power Night"], hasEvent: true },
  { day: 13, events: [], hasEvent: false },
  { day: 14, events: ["Youth Ministry"], hasEvent: true },
  { day: 15, events: ["Sunday Service"], hasEvent: true },
  { day: 16, events: [], hasEvent: false },
  { day: 17, events: [], hasEvent: false },
  { day: 18, events: ["Bible Study"], hasEvent: true },
  { day: 19, events: ["Power Night"], hasEvent: true },
  { day: 20, events: ["Community Outreach"], hasEvent: true },
  { day: 21, events: ["Youth Ministry"], hasEvent: true },
  { day: 22, events: ["Sunday Service"], hasEvent: true },
  { day: 23, events: [], hasEvent: false },
  { day: 24, events: [], hasEvent: false },
  { day: 25, events: ["Bible Study"], hasEvent: true },
  { day: 26, events: ["Power Night"], hasEvent: true },
  { day: 27, events: [], hasEvent: false },
  { day: 28, events: ["Youth Ministry"], hasEvent: true },
  { day: 29, events: ["Sunday Service"], hasEvent: true },
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
