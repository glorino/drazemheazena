"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Home,
  Sprout,
  Building,
  Globe,
  BookOpen,
  CreditCard,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Church,
  HandHelping,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";
import { useState } from "react";

const bankAccounts = [
  {
    category: "Tithes & Offerings",
    bank: "Zenith Bank",
    accountName: "turning point gospel center",
    accountNumber: "1311177696",
    color: "primary",
  },
  {
    category: "Project Donations",
    bank: "Moniepoint Bank",
    accountName: "THE CHAMPIONS MULTI PROJECTS LTD – TURNING POINT CENTRE",
    accountNumber: "5205708798",
    color: "gold",
  },
];

const givingOptions = [
  {
    icon: Heart,
    title: "Tithe",
    description:
      "Honor the Lord with the first 10% of your income as commanded in Malachi 3:10. Your tithes support the running of the church and the spread of the Gospel.",
    scripture: "Malachi 3:10",
    color: "primary",
  },
  {
    icon: HandHelping,
    title: "Offering",
    description:
      "Give a cheerful offering as an expression of your worship and gratitude to God. Every offering, no matter the size, makes a difference in someone's life.",
    scripture: "2 Corinthians 9:7",
    color: "gold",
  },
  {
    icon: Sprout,
    title: "First Fruits",
    description:
      "Honor God with the first of your increase, dedicating the beginning of your harvest to the Lord. First fruits represent trust in God's faithfulness.",
    scripture: "Proverbs 3:9",
    color: "purple",
  },
  {
    icon: Building,
    title: "Building Fund",
    description:
      "Contribute to our building project as we expand our facilities to accommodate our growing congregation and serve our community better.",
    scripture: "Haggai 1:8",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Missions",
    description:
      "Support our mission work across 65+ countries as we spread the Gospel, plant churches, and provide humanitarian aid to communities in need.",
    scripture: "Matthew 28:19",
    color: "gold",
  },
];

const whyGive = [
  {
    icon: BookOpen,
    title: "Biblical Principle",
    description:
      "Giving is a biblical principle that unlocks God's blessings and provision in your life. When you give, you partner with God's work on earth.",
    reference: "Luke 6:38",
  },
  {
    icon: Heart,
    title: "Kingdom Impact",
    description:
      "Your generosity helps us reach the lost, feed the hungry, clothe the needy, and spread the Gospel to the ends of the earth.",
    reference: "Matthew 25:35-40",
  },
  {
    icon: TrendingUp,
    title: "Divine Return",
    description:
      "God promises a harvest for every seed sown. Your giving activates the principle of sowing and reaping in every area of your life.",
    reference: "2 Corinthians 9:6",
  },
  {
    icon: Users,
    title: "Community Transformation",
    description:
      "Through your giving, we build stronger communities, transform lives, and create lasting impact in our neighborhoods and beyond.",
    reference: "Acts 20:35",
  },
];

const impactStats = [
  { value: "100K+", label: "Lives Impacted", icon: Heart },
  { value: "65+", label: "Countries Reached", icon: Globe },
  { value: "5K+", label: "Families Supported", icon: Users },
  { value: "50+", label: "Community Projects", icon: Building },
];

export default function GivePage() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (text: string, bank: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(bank);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/IMG-20260802-WA0132.jpg.jpeg"
            alt="Dr. Azena praying"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <FadeIn direction="up">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Give
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Give <span className="text-gradient">Generously</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Your generous giving fuels our mission to transform lives,
              strengthen communities, and spread the Gospel across the nations.
              Every seed you sow makes a difference.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {impactStats.map((stat) => (
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

      {/* Giving Options */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Ways to Give
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Choose How to <span className="text-gradient">Give</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select from our various giving channels and join us in making a
                lasting impact through your generosity.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {givingOptions.map((option) => (
              <StaggerItem key={option.title}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`p-8 ${
                      option.color === "primary"
                        ? "bg-gradient-to-br from-primary to-primary-dark"
                        : option.color === "gold"
                        ? "bg-gradient-to-br from-gold to-gold-light"
                        : "bg-gradient-to-br from-purple to-purple/80"
                    }`}
                  >
                    <option.icon className="w-10 h-10 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white">
                      {option.title}
                    </h3>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {option.description}
                    </p>
                    <div className="bg-cream rounded-lg p-3 text-center">
                      <span className="text-primary text-sm font-semibold">
                        📖 {option.scripture}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Bank Transfer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Account <span className="text-gradient">Details</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                You can make transfers directly to any of our church accounts
                below. Please use your name as the transfer description.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bankAccounts.map((account) => (
              <StaggerItem key={account.bank}>
                <div className="bg-cream rounded-2xl p-8 border border-cream-dark relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Building className="w-6 h-6 text-dark" />
                      </div>
                      <h3 className="text-lg font-bold text-dark uppercase tracking-wide">
                        {account.category}
                      </h3>
                    </div>
                    <span className="bg-dark text-white text-xs font-bold px-4 py-2 rounded-full uppercase">
                      {account.bank}
                    </span>
                  </div>
                  <div className="border-t border-cream-dark pt-6">
                    <div className="mb-4">
                      <span className="text-gray-500 text-xs uppercase tracking-wider">
                        Account Name
                      </span>
                      <p className="font-semibold text-dark text-lg mt-1">
                        {account.accountName}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-500 text-xs uppercase tracking-wider">
                          Account Number
                        </span>
                        <p className="font-mono font-bold text-dark text-xl mt-1">
                          {account.accountNumber}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(account.accountNumber, account.bank)
                        }
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {copiedAccount === account.bank ? (
                          <>
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-green-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Give */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                Why Give?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Power of <span className="text-gradient">Generosity</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                When you give, you are not just making a donation—you are
                partnering with God to transform lives and advance His Kingdom.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyGive.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <item.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-primary text-sm font-semibold">
                    📖 {item.reference}
                  </span>
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
            <Sparkles className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Generosity Matters
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Thank you for partnering with us in the work of the Lord. May
              your seed produce a bountiful harvest in Jesus&apos; name. Amen.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-white/90 italic text-lg mb-4">
                &ldquo;Each of you should give what you have decided in your
                heart to give, not reluctantly or under compulsion, for God
                loves a cheerful giver.&rdquo;
              </p>
              <p className="text-gold font-semibold">
                — 2 Corinthians 9:7 (NIV)
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
