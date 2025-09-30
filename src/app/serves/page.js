"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  LayoutGrid,
  Server,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  ShieldCheck,
  Search,
  Zap,
  Wrench,
} from "lucide-react";

export default function Services({ items }) {
  const defaultServices = [
    {
      id: 1,
      title: "Frontend Development",
      desc: "React / Next.js, Tailwind CSS, responsive UI, component-driven architecture.",
      icon: Code,
      color: "bg-sky-500 text-white",
    },
    {
      id: 2,
      title: "Backend & APIs",
      desc: "Node.js, Express, REST & GraphQL APIs, authentication, JWT, integration-ready endpoints.",
      icon: Server,
      color: "bg-green-500 text-white",
    },
    {
      id: 3,
      title: "Full-Stack Projects",
      desc: "End-to-end MERN / PERN apps, deployment, CI/CD, real user features and payments.",
      icon: LayoutGrid,
      color: "bg-indigo-500 text-white",
    },
    {
      id: 4,
      title: "Mobile & PWA",
      desc: "Progressive Web Apps, responsive experiences, mobile-first performance optimizations.",
      icon: Smartphone,
      color: "bg-purple-500 text-white",
    },
    {
      id: 5,
      title: "Database Design",
      desc: "MySQL, PostgreSQL, MongoDB schema design, indexing and efficient queries.",
      icon: Database,
      color: "bg-orange-500 text-white",
    },
    {
      id: 6,
      title: "Cloud & DevOps",
      desc: "Deployments on Vercel, AWS, Docker, CI/CD pipelines and environment automation.",
      icon: Cloud,
      color: "bg-sky-600 text-white",
    },
    {
      id: 7,
      title: "Version Control & Workflows",
      desc: "Git branching strategies, code reviews, GitHub / GitLab setup and automation.",
      icon: GitBranch,
      color: "bg-gray-700 text-white",
    },
    {
      id: 8,
      title: "Security & Best Practices",
      desc: "OWASP-conscious development, secure auth flows, input validation and hardening.",
      icon: ShieldCheck,
      color: "bg-red-500 text-white",
    },
    {
      id: 9,
      title: "SEO & Performance",
      desc: "SSR, SSG, Lighthouse improvements, accessibility, and fast page loads.",
      icon: Search,
      color: "bg-yellow-500 text-white",
    },
    {
      id: 10,
      title: "Integrations & Automation",
      desc: "Third-party APIs, payment gateways (Razorpay/Stripe), webhooks and cron jobs.",
      icon: Zap,
      color: "bg-pink-500 text-white",
    },
    {
      id: 11,
      title: "Testing & QA",
      desc: "Unit/integration tests, E2E (Cypress / Playwright), and testable components.",
      icon: Wrench,
      color: "bg-teal-500 text-white",
    },
  ];

  const serviceList = items && items.length ? items : defaultServices;

  return (
    <section className="relative pt-28 pb-12 px-4 md:px-8 lg:px-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/LightRaining.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our Software Development Services
          </h2>
          <p className="mt-2 text-gray-200">
            Complete services from idea to deployment — built to scale and perform.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div initial="hidden" animate="visible">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((s, idx) => {
              const Icon = s.icon || Code;
              return (
                <motion.article
                  key={s.id || idx}
                  className="bg-gradient-to-br from-white/90 to-gray-100/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 border border-gray-200"
                  whileHover={{ translateY: -6 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-full ${s.color} shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">{s.desc}</p>
                    </div>
                  </div>

                  {/* Direct Call Button */}
                  <div className="mt-6">
                    <a
                      href="tel:9992196879"
                      className="inline-block w-full text-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                    >
                      📞 Call Now
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-12 bg-indigo-600/90 backdrop-blur-md rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white shadow-lg">
          <div>
            <h4 className="text-xl font-semibold">Want a custom solution?</h4>
            <p className="mt-1">
              Describe your project and timeline — we’ll prepare a plan and estimate.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:9992196879"
              className="px-5 py-2 rounded-lg bg-white text-indigo-600 font-medium hover:bg-gray-200"
            >
              📞 Call Us
            </a>
            <Link
              href="/portfolio"
              className="px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-indigo-600 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
