"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Shield,
  Baby,
  Music,
  HandHelping,
  Globe,
  Monitor,
  Scale,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  Cross,
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  Floating,
} from "@/components/Animations";

const ministries = [
  {
    icon: Users,
    name: "PATHFINDERS",
    title: "Youth Ministry",
    description:
      "Empowering young people between ages 13-30 to discover their purpose, develop their gifts, and become agents of transformation. Our youth ministry provides mentorship, Bible study, leadership training, and exciting fellowship activities that help young believers navigate their faith journey.",
    meeting: "Every Saturday | 3:00 PM",
    location: "Youth Hall",
    color: "primary",
  },
  {
    icon: Heart,
    name: "WOW",
    title: "Women of the Word",
    description:
      "A vibrant community of women devoted to growing in faith, supporting one another, and making a difference. WOW provides a safe space for women to share, pray, learn, and develop their spiritual gifts while addressing the unique challenges women face in today's world.",
    meeting: "Every 2nd Saturday | 10:00 AM",
    location: "Women's Fellowship Hall",
    color: "purple",
  },
  {
    icon: Shield,
    name: "MEN OF VALOR",
    title: "Men's Ministry",
    description:
      "Building men of integrity, courage, and faith who lead their families, workplaces, and communities with godly wisdom. Our men's ministry focuses on accountability, spiritual growth, leadership development, and practical Christian living in today's challenges.",
    meeting: "Every 3rd Saturday | 9:00 AM",
    location: "Conference Room",
    color: "dark",
  },
  {
    icon: Baby,
    name: "KINGDOM KIDS",
    title: "Children's Ministry",
    description:
      "Nurturing children in the ways of the Lord through age-appropriate Bible stories, worship, crafts, and activities. Kingdom Kids provides a fun, safe, and engaging environment where children develop a personal relationship with Jesus Christ from an early age.",
    meeting: "Every Sunday | During Services",
    location: "Children's Church",
    color: "gold",
  },
  {
    icon: Music,
    name: "PRAISE WARRIORS",
    title: "Music & Worship Ministry",
    description:
      "Leading the congregation into God's presence through powerful, Spirit-led worship. Our music ministry includes the choir, worship team, instrumentalists, and drama unit, all committed to creating an atmosphere where heaven touches earth.",
    meeting: "Rehearsals: Every Thursday | 6:00 PM",
    location: "Main Auditorium",
    color: "primary",
  },
  {
    icon: HandHelping,
    name: "PRAYER WARRIORS",
    title: "Prayer Ministry",
    description:
      "Standing in the gap through fervent intercessory prayer for our church, community, nation, and the nations. Our prayer warriors are dedicated believers committed to spiritual warfare, breakthrough sessions, and 24/7 prayer chains that move heaven.",
    meeting: "Daily | 6:00 AM & 9:00 PM",
    location: "Prayer Room",
    color: "purple",
  },
  {
    icon: Globe,
    name: "OUTREACH & MISSIONS",
    title: "Evangelism Ministry",
    description:
      "Taking the Gospel beyond our church walls to communities, cities, and nations through crusades, street evangelism, hospital visits, prison ministry, and international mission trips. Join us in fulfilling the Great Commission.",
    meeting: "Every 1st Saturday | 7:00 AM",
    location: "Various Locations",
    color: "gold",
  },
  {
    icon: Monitor,
    name: "MEDIA & TECHNOLOGY",
    title: "Digital Ministry",
    description:
      "Spreading the Gospel through digital platforms, live streaming, social media, and content creation. Our media team ensures that every service reaches thousands online and that the message of transformation goes viral across the globe.",
    meeting: "As Needed | Contact Coordinator",
    location: "Media Center",
    color: "primary",
  },
  {
    icon: Scale,
    name: "SOCIAL JUSTICE",
    title: "WAATPF Foundation",
    description:
      "The William Azemhe Azena Turning Point Foundation champions social justice, humanitarian aid, and community development. Through education, healthcare, and empowerment programs, we bring hope and transformation to underserved communities.",
    meeting: "Programs Throughout the Year",
    location: "Various Communities",
    color: "dark",
  },
];

export default function MinistriesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DSC_3961 copy.jpg.jpeg"
            alt="Dr. Azemhe Azena ministry"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Ministry
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The <span className="text-gradient">Ministry</span> of Dr. Azemhe Azena
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Through Turning Point Gospel Centre International and various
              outreach programs, Dr. Azemhe Azena continues to influence lives
              through the Christian faith across Nigeria and beyond.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <Floating duration={4}>
              <Cross className="w-12 h-12 text-primary mx-auto mb-6" />
            </Floating>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              A Ministry of{" "}
              <span className="text-gradient">Transformation</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Azemhe Azena's ministry spans preaching, teaching,
              counselling, prayer, evangelism and mentorship. Through Turning
              Point Gospel Centre International and various outreach programs,
              he continues to influence lives through the Christian faith. His
              ministry is focused on raising a generation of believers who are
              agents of transformation in their sphere of influence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <StaggerItem key={ministry.name}>
                <div className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div
                    className={`p-8 ${
                      ministry.color === "primary"
                        ? "bg-gradient-to-br from-primary to-primary-dark"
                        : ministry.color === "gold"
                        ? "bg-gradient-to-br from-gold to-gold-light"
                        : ministry.color === "purple"
                        ? "bg-gradient-to-br from-purple to-purple/80"
                        : "bg-gradient-to-br from-dark to-dark-light"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <ministry.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white/60 text-sm font-medium">
                        {ministry.name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {ministry.title}
                    </h3>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                      {ministry.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-cream-dark">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{ministry.meeting}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{ministry.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Join the Ministry
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Whether you want to attend a service, join a ministry, or connect
              with Dr. Azemhe Azena's team, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@weloveturningpoint"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Watch Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
