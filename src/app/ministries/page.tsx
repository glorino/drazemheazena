"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Heart,
  Globe,
  BookOpen,
  Cross,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Landmark,
  HandHelping,
  BookMarked,
  Play,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  Floating,
} from "@/components/Animations";

const ministryAreas = [
  {
    icon: Cross,
    title: "Preaching & Teaching",
    description:
      "Powerful, Spirit-led preaching and teaching that transforms lives. Dr. Azena's ministry is characterized by clarity, depth and apostolic fire that draws people into a deeper relationship with Christ.",
    color: "primary",
    image: "/DSC_3963 copy.jpg.jpeg",
  },
  {
    icon: Globe,
    title: "Global Evangelism",
    description:
      "International crusades and conferences across 65+ countries, spreading the Gospel with signs, wonders and miraculous testimonies that confirm the power of God's Word.",
    color: "gold",
    image: "/azenacommunity.jpg",
  },
  {
    icon: BookOpen,
    title: "Literary Ministry",
    description:
      "14+ published books on faith, healing, deliverance and spiritual growth. Dr. Azena's writings have blessed readers worldwide and established him as a trusted voice in theological teaching.",
    color: "purple",
    image: "/azenaphd.jpg",
  },
  {
    icon: Users,
    title: "Mentorship & Discipleship",
    description:
      "Raising a generation of believers who are agents of transformation. Through mentorship and discipleship, Dr. Azena equips individuals to fulfill their God-given purpose.",
    color: "primary",
    image: "/azenateam.jpg",
  },
  {
    icon: Heart,
    title: "Prayer Ministry",
    description:
      "Powerful intercessory prayer and breakthrough sessions. Dr. Azena's prayer ministry has been associated with countless healings, deliverances and life-changing testimonies.",
    color: "gold",
    image: "/azenamedia.jpg",
  },
  {
    icon: HandHelping,
    title: "Humanitarian Service",
    description:
      "Through the William Azemhe Azena Turning Point Foundation, Dr. Azena champions educational charity, healthcare support, youth training and community development.",
    color: "purple",
    image: "/azenahumanitarian.jpg",
  },
];

const impactStats = [
  { value: "65+", label: "Countries Reached" },
  { value: "100K+", label: "Lives Impacted" },
  { value: "14+", label: "Books Written" },
  { value: "18+", label: "Years Active" },
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
            className="object-cover object-top"
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
              Through preaching, teaching, global evangelism, literature and
              humanitarian service, Dr. Azemhe Azena continues to influence
              lives across Nigeria and beyond.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ministry Overview */}
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
              Dr. Azemhe Azena's ministry spans preaching, teaching, counselling,
              prayer, evangelism and mentorship. His journey began in 2007 when he
              joined Omega Fire Ministries as a pastor and has since grown into a
              global platform of influence. Through Turning Point Gospel Centre
              International and various outreach programs, he continues to
              transform lives through the Christian faith.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ministry Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Areas of Ministry
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                How He <span className="text-gradient">Serves</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministryAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  {area.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                Global Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The <span className="text-gradient">Reach</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Turning Point Gospel Centre */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                  Turning Point Gospel Centre
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  A New <span className="text-gradient">Chapter</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In 2026, an important chapter began with the emergence of
                    Turning Point Gospel Centre International. The ministry
                    represents a new expression of Dr. Azena's Christian service
                    and is associated with the leadership of Dr. Azemhe Azena and
                    Pastor Precious Azemhe Azena.
                  </p>
                  <p>
                    The name "Turning Point" reflects a core belief: that every
                    encounter with God's Word should lead to a transformative
                    moment — a turning point — that redirects the course of one's
                    life, family and destiny.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://youtube.com/@weloveturningpoint"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Watch Services
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/DSC_4475 copy.jpg.jpeg"
                    alt="Turning Point Gospel Centre"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Be Part of the <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Whether you want to attend a service, invite Dr. Azena for a
              speaking engagement, or connect with his ministry, we would love
              to hear from you.
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
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-dark/10 text-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-dark/5 transition-all duration-300"
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
