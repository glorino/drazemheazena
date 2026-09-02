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
      "Born on 25th December 1979 in Okpella, Estako East Local Government Area of Edo State, Nigeria, to Mr. and Mrs. Beatrice Williams Azemhe Azena. The fifth child among his siblings.",
    image: "/azenababy.jpg",
  },
  {
    year: "2007",
    title: "Ministry Begins",
    description:
      "Joined Omega Fire Ministries as a pastor, beginning a journey of pastoral leadership that would span nearly two decades without blemish.",
    image: "/azenaministry.jpg",
  },
  {
    year: "2015",
    title: "Global Crusades",
    description:
      "Expanded ministry to international crusades and conferences, preaching the Gospel in over 75 nations across the continent and beyond.",
    image: "/azenaglobal.jpg",
  },
  {
    year: "2020",
    title: "Literary Ministry",
    description:
      "Published over 17 books on faith, healing, deliverance and spiritual growth, including titles like 'Victory over Foundational Battles' and 'Thinking Forward'.",
    image: "/azenabook.jpg",
  },
  {
    year: "2023",
    title: "Public Leadership",
    description:
      "Contested for the position of Governor of Edo State under the New Nigeria People's Party (NNPP), campaigning on good governance, education and youth empowerment.",
    image: "/azenaparty.jpg",
  },
  {
    year: "2026",
    title: "Turning Point",
    description:
      "Founded a Bible Institute and established Turning Point Gospel Centre International, a new expression of his Christian ministry and service.",
    image: "/azenaturn.jpg",
  },
];

const education = [
  {
    institution: "Eveva Primary School, Okpella",
    field: "Primary Education",
    icon: GraduationCap,
  },
  {
    institution: "Okpella Comprehensive High School",
    field: "Secondary Education",
    icon: GraduationCap,
  },
  {
    institution: "Federal Polytechnic, Auchi",
    field: "National Diploma & Higher National Diploma in Mass Communication",
    icon: BookOpen,
  },
  {
    institution: "Bethel University College of Biblical Studies",
    field: "Associate & Bachelor in Theology, PhD in Christian Philosophy",
    icon: BookMarked,
  },
  {
    institution: "Ambrose Alli University, Ekpoma",
    field: "LL.B in Law",
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
            className="object-cover object-[50%_15%]"
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
              A voice of Faith. A leader of Impact. A Builder of People.
              Christian minister, teacher, entrepreneur, educationalist,
              lawyer in equity, advocate of peace — whose life has been
              shaped by faith, service and a desire to make meaningful
              difference in the society.
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
                    Dr. Azemhe Azena was born on 25th December 1979 in Okpella,
                    Estako East Local Government Area of Edo State, Nigeria, to
                    Mr. and Mrs. Beatrice Williams Azemhe Azena, who hail from
                    Okpekpe clan in Estako East. He is the fifth child among
                    his siblings.
                  </p>
                  <p>
                    A Christian minister, teacher, entrepreneur, educationist,
                    lawyer in equity, advocate of peace and public leader whose
                    life has been shaped by faith, service and a desire to make
                    meaningful difference in the society.
                  </p>
                  <p>
                    From humble beginnings as a bike rider for almost a decade,
                    a wheelbarrow pusher and a trained camera personnel, he
                    pursued his vision with courage and consistency, overcoming
                    challenges and remaining committed to his calling. His
                    journey demonstrates that humble beginnings do not determine
                    the height of one&apos;s destiny.
                  </p>
                  <p>
                    Over his 18-year ministry journey, Dr. Azena has traveled to
                    more than 75 nations, held numerous crusades and
                    conferences, and witnessed countless healings, deliverances
                    and life-changing testimonies. Having served under Omega
                    Fire Ministry for almost two decades without blemish, he
                    prestigiously resigned as a Faithful Steward and founded a
                    Bible Institute under Turning Point Gospel Centre.
                  </p>
                  <p>
                    He has authored 17+ books including{' '}
                    <em>The Danger of Depending on a Man</em>,{' '}
                    <em>Victory over Foundational Battles</em>,{' '}
                    <em>Thinking Forward</em>,{' '}
                    <em>Life is a Market</em>, and{' '}
                    <em>Oh Lord Guide my Decision</em>.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-cream rounded-xl p-4">
                    <div className="text-3xl font-bold text-primary">75+</div>
                    <div className="text-sm text-gray-600">Countries Reached</div>
                  </div>
                  <div className="bg-cream rounded-xl p-4">
                    <div className="text-3xl font-bold text-primary">17+</div>
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
                  &ldquo;Married to Rev. Mrs. Azena Precious Igiebor, their
                  union stands as a testament to God&apos;s faithfulness and
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

      {/* Awards & Recognition */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Awards & Recognition
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Honours & <span className="text-gradient">Distinctions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Over the years, Dr. Azemhe Azena&apos;s contributions to faith,
                leadership, humanitarian service and society have earned him
                several international and local awards and recognitions.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark">Justice of the Peace</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Honour conferred by the Government of Nigeria in recognition
                    of his contributions to society and peacebuilding.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark">Let There Be Peace March</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Core organiser of the annual global outreach &quot;Let There
                    Be Peace Match&quot; which has impacted individuals and
                    caused positive change across communities.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark">Bestselling Christian Author</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Author of 17+ books on faith, healing, deliverance and
                    spiritual growth, with readers across the world.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                  <HandHelping className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark">Humanitarian Impact</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Recognition from various communities and organisations for
                    youth empowerment, scholarships, medical outreach and
                    community development through the Turning Point Foundation.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Complete Profile */}
      <section id="profile" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Full Profile
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                The Complete <span className="text-gradient">Profile</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive overview of Dr. Azemhe Azena&apos;s life,
                ministry, education, enterprise and impact.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {/* Biography */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Biography</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Azemhe Azena was born on 25 December 1979 in Okpela,
                    Estako East Local Government Area of Edo State, Nigeria. He
                    was born to Mr. and Mrs. Beatrice Williams Azemhe Azena, who
                    hail from Okpekpe clan in Estako East Local Government Area
                    of Edo State.
                  </p>
                  <p>
                    He is the fifth child among his siblings and has distinguished
                    himself through a life dedicated to faith, leadership,
                    service, entrepreneurship and humanitarian impact.
                  </p>
                  <p>
                    Dr. Azemhe Azena is a seasoned pastor, global evangelist,
                    author, entrepreneur and philanthropist. Over the years, his
                    ministry and leadership have touched numerous lives across
                    different communities and beyond.
                  </p>
                  <p>
                    Through his commitment to the advancement of the Gospel and
                    the wellbeing of humanity, he has continued to demonstrate
                    resilience, compassion, vision and dedication to service. His
                    journey reflects a strong commitment to faith and the pursuit
                    of positive change, particularly through spiritual leadership,
                    community development and humanitarian initiatives.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Ministry & Leadership */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                    <Cross className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Ministry & Leadership</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    He is a Christian minister, preacher, teacher, founder of
                    Turning Point Gospel Centre, a tele-evangelist who preaches
                    on radio and television stations:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    <div className="bg-white rounded-xl p-4">
                      <p className="font-semibold text-dark">NTA</p>
                      <p className="text-sm text-gray-600">Every Wednesday @ 7:30 PM</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="font-semibold text-dark">SPEED FM</p>
                      <p className="text-sm text-gray-600">Every Saturday @ 9:00 AM - 9:30 AM</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="font-semibold text-dark">BRONZE FM</p>
                      <p className="text-sm text-gray-600">Every Saturday @ 6:30 PM - 7:00 PM</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="font-semibold text-dark">B-SIDE FM</p>
                      <p className="text-sm text-gray-600">Every Thursday @ 6:30 PM - 7:00 PM</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="font-semibold text-dark">EBS</p>
                      <p className="text-sm text-gray-600">Every Tuesday @ 6:30 PM</p>
                    </div>
                  </div>
                  <p>
                    As a lover of the Gospel, he has randomly preached the Gospel
                    in over 75 nations, taking the Gospel of our Lord Jesus Christ
                    across the continent. Having served under Omega Fire Ministry
                    for almost two decades without blemish, prestigiously resigned
                    as a Faithful Steward, with his undying love for God founded
                    a Bible Institute under Turning Point Gospel Centre which has
                    graduated several Stewards.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Education */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Education</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    He attended his Primary Education at Eveva Primary School,
                    his Secondary School at Okpella Comprehensive High School,
                    wrote his West Africa Examination at Aggassa Local Government
                    School Okene Kogi State.
                  </p>
                  <p>
                    He furthered his Education by attaining his National Diploma
                    and Higher National Diploma in Mass Communication at Federal
                    Polytechnic Auchi.
                  </p>
                  <p>
                    Also, has an Associate, Bachelor in Theology at Bethel
                    University and Christian Philosophy PhD at Bethel University.
                    Having a commitment to lifelong learning, he further attained
                    a LL.B in Law at Ambrose Alli University at Ekpoma, Edo State.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Enterprise */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Enterprise</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Entrepreneurship across Education, Hospitality, Real Estate
                    and Transportation. He is one of the directors of:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">Evangel Ultimate Premium School</p>
                        <p className="text-xs text-gray-500">Education</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Star className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">Evangel Ultimate Hotel</p>
                        <p className="text-xs text-gray-500">Hospitality</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Landmark className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">Champion Multi-Purpose Projects</p>
                        <p className="text-xs text-gray-500">Real Estate</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">Turning Point Media</p>
                        <p className="text-xs text-gray-500">Media</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Impact */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <HandHelping className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Impact & Humanitarian Service</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    He is into youth and human empowerment, humanitarian services,
                    community development. He is the President and Founder of
                    William Azemhe Azena Turning Point Foundation.
                  </p>
                  <p>
                    The foundation runs an Annual Renunciation Programme aimed at
                    helping offenders renounce amicably and turn a new life. The
                    foundation provides scholarships, aids community development,
                    and empowers medical outreach programmes to both rural and
                    urban settlements.
                  </p>
                  <p>
                    He is also the core organiser of the annual global outreach
                    &quot;Let There Be Peace Match&quot; which has impacted
                    individuals and caused positive change across communities.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Literary Ministry */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Literary Ministry</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Azemhe Azena is an author with over 17 books to his
                    credit, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "The Danger of Depending on a Man",
                      "Victory over Foundational Battles",
                      "Thinking Forward",
                      "Life is a Market",
                      "Oh Lord Guide my Decision",
                    ].map((book) => (
                      <div key={book} className="bg-white rounded-xl p-4 flex items-center gap-3">
                        <BookMarked className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-sm font-medium text-dark italic">{book}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    Through his writings, teachings and public engagements, he has
                    continued to communicate messages of faith, leadership,
                    personal development and social transformation.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Political & Public Service */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Political & Public Service</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Azemhe Azena has participated in the political process in
                    Edo State. In 2023, he contested for the position of Governor
                    of Edo State under the platform of the New Nigeria People&apos;s
                    Party (NNPP) after he deflected from Labour Party.
                  </p>
                  <p>
                    He is a seasoned politician known across Edo State and beyond.
                    His involvement in public affairs reflects his broader
                    interest in leadership, governance and the development of
                    society. His public engagements have contributed to his
                    recognition across Edo State and beyond.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Journey of Resilience */}
            <FadeIn direction="up">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-10 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">A Journey of Resilience & Determination</h3>
                </div>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    His ministry and personal journey have impacted millions of
                    lives across the world. His story is one of perseverance,
                    determination and unwavering faith.
                  </p>
                  <p>
                    From humble beginnings as a bike rider for almost a decade, a
                    wheelbarrow pusher, a trained camera personnel, he pursued his
                    vision with courage and consistency, overcoming challenges and
                    remaining committed to his calling.
                  </p>
                  <p className="text-white font-medium text-lg italic">
                    His journey demonstrates that humble beginnings do not
                    determine the height of one&apos;s destiny.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Social Media & Contact */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Connect</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-semibold text-dark text-sm mb-1">WhatsApp Numbers</p>
                    <p className="text-gray-600 text-sm">090 9258 9071, 080 6497 001, 081 0765 9761</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-semibold text-dark text-sm mb-1">Email</p>
                    <p className="text-gray-600 text-sm">turningpointgospelcentre@gmail.com</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-semibold text-dark text-sm mb-1">Ministry Address</p>
                    <p className="text-gray-600 text-sm">
                      Irabor Street off Ewan Street, Upper Mission Extension
                      Uteh, Ikpoba Okha LGA, Benin City, Edo State
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-semibold text-dark text-sm mb-1">Foundation Address</p>
                    <p className="text-gray-600 text-sm">
                      Plot 8, Aduwawa, Benin City, Edo State
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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
                    Dr. Azemhe Azena is a devoted husband to Rev. Mrs. Azena
                    Precious Igiebor and father of five children. Their family
                    remains an important part of his journey, values and
                    commitment to building a meaningful legacy for future
                    generations.
                  </p>
                  <p>
                    Rev. Mrs. Precious has also been associated with ministry
                    leadership and educational administration, standing alongside
                    Dr. Azena in his various endeavors.
                  </p>
                  <div className="bg-cream rounded-2xl p-6 mt-6">
                    <h4 className="font-bold text-dark mb-3">Their Children:</h4>
                    <ol className="space-y-2 text-sm list-decimal list-inside">
                      <li>Azemhe Azena Immaculate Scholar Azorna</li>
                      <li>Azemhe Azena Evangelina Azemheshionagie</li>
                      <li>Azemhe Azena Fulfillment Azonagie</li>
                      <li>Azemhe Azena Special Azemhene</li>
                      <li>Azemhe Azena Goodname Faithfulness Azodagiemhe</li>
                    </ol>
                  </div>
                  <p className="italic">
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
