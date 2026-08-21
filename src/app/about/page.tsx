"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  BookMarked,
  Heart,
  Award,
  ArrowRight,
  Cross,
  Compass,
  BookOpen,
  Shield,
  Users,
  Star,
  GraduationCap,
  Landmark,
  HandHelping,
  Crown,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";

const timeline = [
  {
    year: "1979",
    title: "Born in Okpella",
    description:
      "Born in Okpella, Edo State, Nigeria. Raised in a environment that shaped his values of faith, hard work and service to others.",
    image: "/azenababy.jpg",
  },
  {
    year: "2007",
    title: "Ministry Begins",
    description:
      "Joined Omega Fire Ministries as a pastor, beginning a journey of pastoral leadership that would span nearly two decades.",
    image: "/azenaministry.jpg",
  },
  {
    year: "2015",
    title: "Global Crusades",
    description:
      "Expanded ministry to international crusades and conferences, traveling to over 65 countries to preach the Gospel.",
    image: "/azenaglobal.jpg",
  },
  {
    year: "2020",
    title: "Literary Ministry",
    description:
      "Published over 14 books on faith, healing, deliverance and spiritual growth, becoming a bestselling Christian author.",
    image: "/azenabook.jpg",
  },
  {
    year: "2024",
    title: "Public Leadership",
    description:
      "Emerged as the NNPP Governorship Candidate for Edo State, campaigning on good governance, education and youth empowerment.",
    image: "/azenaparty.jpg",
  },
  {
    year: "2026",
    title: "Turning Point",
    description:
      "Established Turning Point Gospel Centre International, a new expression of his Christian ministry and service.",
    image: "/azenaturn.jpg",
  },
];

const education = [
  {
    institution: "Federal Polytechnic, Auchi",
    field: "Mass Communication",
    icon: GraduationCap,
  },
  {
    institution: "Omega Bible Institute",
    field: "Theology",
    icon: BookOpen,
  },
  {
    institution: "Bethel University College of Biblical Studies",
    field: "Religious Studies & Christian Philosophy",
    icon: BookMarked,
  },
  {
    institution: "Ambrose Alli University, Ekpoma",
    field: "Law",
    icon: Shield,
  },
];

const values = [
  {
    icon: Cross,
    title: "Unwavering Faith",
    description:
      "Standing firm on the Word of God, believing in the supernatural power of faith to transform every situation.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: Heart,
    title: "Genuine Love",
    description:
      "Demonstrating Christ's love through authentic relationships, compassionate service and genuine care for people.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description:
      "Committed to spreading the Gospel to every nation, tribe and tongue, fulfilling the Great Commission.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding the highest standards of honesty, accountability and moral excellence in all endeavors.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: BookOpen,
    title: "Biblical Excellence",
    description:
      "Committed to the undiluted Word of God, teaching and applying Scripture with precision and power.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Users,
    title: "Servant Leadership",
    description:
      "Leading by serving, following the example of Christ who came not to be served but to serve.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Star,
    title: "Lifelong Learning",
    description:
      "A commitment to continuous academic and personal development, even after establishing himself as a leader.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Crown,
    title: "Kingdom Impact",
    description:
      "Dedicated to making a lasting impact in communities, nation and the world through practical Christianity.",
    color: "from-cyan-500 to-teal-600",
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
            className="object-cover object-top"
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

      {/* Full Biography */}
      <section id="pastor" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/azenamedia.jpg"
                    alt="Dr. Azemhe Azena"
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
                    Minister, Author, Entrepreneur, Public Leader
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                  The Story
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  Dr. Azemhe Azena <span className="text-gradient">PhD</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>
                    Dr. Azemhe Azena is a Christian minister, teacher,
                    entrepreneur, educationist, family man and public leader
                    whose life has developed through a continuing journey of
                    faith, learning, service and leadership.
                  </p>
                  <p>
                    Rooted in Edo State, his story is one of personal
                    development and expanding responsibility. His early life and
                    educational experiences provided the foundation for a journey
                    that would eventually span Christian ministry, academia,
                    entrepreneurship, education, humanitarian service and public
                    leadership.
                  </p>
                  <p>
                    His commitment to education has remained a recurring feature
                    of his life. His academic journey includes studies in Mass
                    Communication, Theology, Religious Studies, Christian
                    Philosophy and Law — demonstrating his commitment to lifelong
                    learning even after establishing himself as a pastor,
                    entrepreneur and public figure.
                  </p>
                  <p>
                    Over his 18-year ministry journey, Dr. Azena has traveled to
                    more than 65 countries, held numerous crusades and
                    conferences, and witnessed countless healings, deliverances
                    and life-changing testimonies. He has authored 14+ books that
                    have blessed readers worldwide.
                  </p>
                  <p>
                    Beyond the pulpit, Dr. Azena is the President of the William
                    Azemhe Azena Turning Point Foundation, a humanitarian
                    organization dedicated to uplifting communities through
                    education, healthcare and social empowerment programs.
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

      {/* Journey Timeline */}
      <section id="history" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                The Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Life <span className="text-gradient">Milestones</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From early life in Edo State to global ministry, education,
                entrepreneurship and public leadership.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-gold to-purple" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <FadeIn
                  key={item.year}
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
                        <div className="bg-white rounded-2xl shadow-lg p-6 inline-flex items-center gap-5">
                          {item.image && (
                            <div className={`w-40 h-28 rounded-xl overflow-hidden shrink-0 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={160}
                                height={112}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          )}
                          <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                            <span className="text-primary font-bold text-lg">
                              {item.year}
                            </span>
                            <h3 className="text-xl font-bold text-dark mt-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-cream shrink-0 z-10" />
                      <div className="flex-1" />
                    </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Education
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Academic <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A commitment to lifelong learning that spans multiple
                disciplines and institutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/azenaphd.jpg"
                    alt="Dr. Azemhe Azena - PhD Graduation"
                    width={500}
                    height={600}
                    className="object-cover w-full h-[450px]"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold to-gold-light text-dark p-5 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">PhD</div>
                  <div className="text-sm opacity-80">Doctor of Philosophy</div>
                </div>
              </div>
            </FadeIn>

            <StaggerChildren className="space-y-4">
              {education.map((edu) => (
                <StaggerItem key={edu.institution}>
                  <div className="bg-cream rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{edu.field}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
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

      {/* Personal Values */}
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
                These fundamental principles shape everything Dr. Azemhe Azena
                does and define who he is as a leader, minister and servant of
                God.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
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

      {/* Family */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/azenafamily.jpg"
                    alt="Pastor Precious Azemhe Azena"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-8 h-8 text-gold" />
                    <span className="font-bold text-dark">Family</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Married to Pastor Precious Azemhe Azena
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                  Family
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  A Life of <span className="text-gradient">Love & Partnership</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Azemhe Azena is married to Pastor Precious Azemhe Azena,
                    with whom he shares a life of family, ministry and service.
                    Their marriage has continued through different seasons of
                    public responsibility, and they are blessed with five
                    children.
                  </p>
                  <p>
                    Pastor Precious has also been associated with ministry
                    leadership and educational administration, standing alongside
                    Dr. Azena in his various endeavors.
                  </p>
                  <p>
                    Their union stands as a testament to God&apos;s faithfulness
                    and is a blessing to all who know them.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
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
