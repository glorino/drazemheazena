"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  BookMarked,
  Heart,
  Users,
  Award,
  Star,
  ArrowRight,
  Cross,
  Target,
  Compass,
  BookOpen,
  Crown,
  Shield,
  Mail,
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";

const timeline = [
  {
    year: "2008",
    title: "Ministry Beginnings",
    description:
      "Dr. Azemhe Azena began his pastoral journey at Omega Fire Ministries, where he served faithfully for 18 years, touching countless lives across Nigeria and beyond.",
  },
  {
    year: "2015",
    title: "Global Crusades",
    description:
      "Expanded ministry to international crusades and conferences, traveling to over 65 countries to preach the Gospel and witness miraculous healings and transformations.",
  },
  {
    year: "2020",
    title: "Literary Ministry",
    description:
      "Published over 14 books on faith, healing, deliverance, and spiritual growth, becoming a bestselling Christian author and trusted voice in theological teaching.",
  },
  {
    year: "2026",
    title: "Turning Point Founded",
    description:
      "Established Turning Point Gospel Center International with a vision to raise a generation of believers who are agents of transformation in their sphere of influence.",
  },
];

const values = [
  {
    icon: Cross,
    title: "Unwavering Faith",
    description:
      "We stand firm on the Word of God, believing in the supernatural power of faith to transform every situation.",
  },
  {
    icon: Heart,
    title: "Genuine Love",
    description:
      "We demonstrate Christ's love through authentic relationships, compassionate service, and genuine care for one another.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description:
      "We are committed to spreading the Gospel to every nation, tribe, and tongue, fulfilling the Great Commission.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, accountability, and moral excellence in all our dealings.",
  },
];

const leadership = [
  {
    name: "Dr. Azemhe Azena PhD",
    role: "Senior Pastor & Visionary",
    bio: "A seasoned pastor, author, and global evangelist with over 18 years of ministry experience. He has traveled to more than 65 countries, authored 14+ books, and is the President of the William Azemhe Azena Turning Point Foundation.",
    image: "/IMG-20260802-WA0135.jpg.jpeg",
  },
  {
    name: "Pastor Mrs. Uwazota Precious",
    role: "Co-Pastor & First Lady",
    bio: "A pillar of strength and grace, Pastor Mrs. Uwazota Precious supports the vision of Turning Point Gospel Center with her unwavering faith, leadership in the women's ministry, and dedication to nurturing the congregation.",
    image: "/IMG-20260802-WA0134.jpg.jpeg",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DSC_3963 copy.jpg.jpeg"
            alt="Church worship service"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story of <span className="text-gradient">Faith</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Discover the heart behind Turning Point Gospel Center
              International and the vision that drives our mission to transform
              lives across the globe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Church History */}
      <section id="history" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                  Our Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  A Church Born for{" "}
                  <span className="text-gradient">Such a Time</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Turning Point Gospel Center International was founded in 2026
                    by Dr. Azemhe Azena PhD, representing the divine
                    culmination of nearly two decades of dedicated pastoral
                    ministry and global evangelism.
                  </p>
                  <p>
                    Prior to establishing Turning Point, Dr. Azena served for 18
                    years at Omega Fire Ministries, where he honed his
                    anointing, deepened his understanding of God&apos;s Word, and
                    developed a heart for the nations. During this period, he
                    traveled to over 65 countries, preaching the Gospel with
                    signs, wonders, and miraculous testimonies.
                  </p>
                  <p>
                    The name &ldquo;Turning Point&rdquo; reflects our core
                    belief: that every encounter with God&apos;s Word should lead
                    to a transformative moment—a turning point—that redirects
                    the course of one&apos;s life, family, and destiny. We are
                    not just a church; we are a movement of transformation.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Ministry Timeline
                  </h3>
                  <div className="space-y-8">
                    {timeline.map((item, index) => (
                      <div key={item.year} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {item.year.slice(-2)}
                          </div>
                          {index < timeline.length - 1 && (
                            <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                          )}
                        </div>
                        <div className="pb-4">
                          <span className="text-primary font-semibold text-sm">
                            {item.year}
                          </span>
                          <h4 className="text-lg font-bold text-dark mt-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pastor Bio */}
      <section id="pastor" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/IMG-20260802-WA0133.jpg.jpeg"
                    alt="Dr. Azemhe Azena in his office"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[600px]"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-8 h-8 text-gold" />
                    <span className="font-bold text-dark">Dr. Azemhe Azena</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    PhD holder, Global Evangelist, Bestselling Author
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                  Our Senior Pastor
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  Dr. Azemhe Azena <span className="text-gradient">PhD</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>
                    Born in 1979 in Okpella, Edo State, Nigeria, Dr. Azemhe
                    Azena is a seasoned pastor, global evangelist, author, and
                    philanthropist whose ministry has impacted millions across
                    the world.
                  </p>
                  <p>
                    With a Doctorate in Philosophy (PhD), Dr. Azena combines
                    scholarly depth with apostolic fire, delivering God&apos;s
                    Word with clarity, power, and transformative insight. His
                    teaching ministry has been a beacon of hope to the nations,
                    drawing souls into a deeper relationship with Christ.
                  </p>
                  <p>
                    Over his 18-year ministry journey, Dr. Azena has traveled to
                    more than 65 countries, held numerous crusades and
                    conferences, and witnessed countless healings, deliverances,
                    and life-changing testimonies. He has authored 14+ books that
                    have blessed readers worldwide.
                  </p>
                  <p>
                    Beyond the pulpit, Dr. Azena is the President of the William
                    Azemhe Azena Turning Point Foundation, a humanitarian
                    organization dedicated to uplifting communities through
                    education, healthcare, and social empowerment programs.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-cream rounded-xl p-4">
                    <div className="text-3xl font-bold text-primary">65+</div>
                    <div className="text-sm text-gray-600">Countries Visited</div>
                  </div>
                  <div className="bg-cream rounded-xl p-4">
                    <div className="text-3xl font-bold text-primary">14+</div>
                    <div className="text-sm text-gray-600">Books Published</div>
                  </div>
                  <div className="bg-cream rounded-xl p-4">
                    <div className="text-3xl font-bold text-primary">100K+</div>
                    <div className="text-sm text-gray-600">Lives Changed</div>
                  </div>
                  <div className="bg-cream rounded-xl p-4">
                    <div className="text-3xl font-bold text-primary">18+</div>
                    <div className="text-sm text-gray-600">Years Ministry</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;Married to the beautiful Pastor Mrs. Uwazota Precious,
                  their union stands as a testament to God&apos;s faithfulness and
                  is a blessing to the Body of Christ.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vision & <span className="text-gradient">Mission</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-xl text-gray-300 leading-relaxed italic">
                  &ldquo;To raise a generation of believers who are agents of
                  transformation in their sphere of influence.&rdquo;
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-xl text-gray-300 leading-relaxed italic">
                  &ldquo;To preach the undiluted word of God, raise leaders, and
                  impact lives through practical Christianity.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                  <value.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Our Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Led by <span className="text-gradient">God&apos;s Grace</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our leadership team is committed to serving God&apos;s people
                with integrity, passion, and a heart for transformation.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader) => (
              <StaggerItem key={leader.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-80">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-gold font-semibold">{leader.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join a community of believers committed to transformation,
              purpose, and divine encounters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Join Our Church
              </Link>
              <Link
                href="/give"
                className="inline-flex items-center justify-center gap-2 bg-gold/20 border border-gold/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/30 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                Support Our Mission
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
