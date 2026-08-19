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
    color: "from-primary to-primary-dark",
  },
  {
    icon: Heart,
    title: "Genuine Love",
    description:
      "We demonstrate Christ's love through authentic relationships, compassionate service, and genuine care for one another.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description:
      "We are committed to spreading the Gospel to every nation, tribe, and tongue, fulfilling the Great Commission.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, accountability, and moral excellence in all our dealings.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: BookOpen,
    title: "Biblical Excellence",
    description:
      "We are committed to the undiluted Word of God, teaching and applying Scripture with precision and power.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build a loving family where every person is valued, supported, and empowered to fulfill their God-given purpose.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Star,
    title: "Servant Leadership",
    description:
      "We lead by serving, following the example of Christ who came not to be served but to serve.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Crown,
    title: "Kingdom Impact",
    description:
      "We are dedicated to making a lasting impact in our communities, nation, and the world through practical Christianity.",
    color: "from-cyan-500 to-teal-600",
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
            alt="Dr. Azemhe Azena"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Biography
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dr. Azemhe Azena <span className="text-gradient">PhD</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              A life of faith, leadership, learning, enterprise and service —
              continually expanding its influence from the individual to the
              family, from the church to society.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ministry Journey */}
      <section id="history" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                  Ministry Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  A Journey of{" "}
                  <span className="text-gradient">Faith & Service</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Azemhe Azena's ministry journey began in 2007 when he
                    joined Omega Fire Ministries as a pastor. Over the years, he
                    developed through different levels of pastoral leadership
                    and became associated with senior responsibilities within
                    the ministry.
                  </p>
                  <p>
                    His years in ministry shaped his understanding of people,
                    leadership, communication, responsibility and service.
                    Through preaching, teaching, counselling, prayer, evangelism
                    and mentorship, he developed a public ministry focused on
                    influencing lives through the Christian faith.
                  </p>
                  <p>
                    In 2026, another important chapter began with the emergence
                    of Turning Point Gospel Centre International. The ministry
                    represents a new expression of his Christian service and is
                    associated with the leadership of Dr. Azemhe Azena and
                    Pastor Precious Azemhe Azena.
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

      {/* Biography */}
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
                  Biography
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
                Vision & Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The <span className="text-gradient">Purpose</span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <Compass className="w-10 h-10 text-white" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed italic mb-8">
                    &ldquo;A life of faith, leadership, learning, enterprise and
                    service, continually expanding its influence from the
                    individual to the family, from the church to society, and
                    from personal development to community impact.&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-16 bg-gold/50" />
                    <span className="text-gold font-semibold text-sm tracking-wider uppercase">
                      Dr. Azemhe Azena
                    </span>
                    <div className="h-px w-16 bg-gold/50" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Personal Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Core <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These fundamental principles shape everything Dr. Azemhe Azena does
                and define who he is as a leader, minister and servant of God.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Led by <span className="text-gradient">God&apos;s Grace</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dr. Azemhe Azena leads with integrity, passion, and a heart
                for transformation, alongside his wife Pastor Precious Azemhe Azena.
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
              The Journey Continues
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Discover the ongoing story of faith, leadership, learning,
              enterprise and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ministries"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Explore Ministry
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold/20 border border-gold/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/30 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
