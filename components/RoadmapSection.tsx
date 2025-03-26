'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phases = [
  {
    title: 'Phase 1: Concept & Prototyping',
    duration: 'March 2025 - September 2025',
    items: [
      'AI-PoS validator scoring and staking logic',
      'Multi-layer DAG transaction validation',
      'Core blockchain infrastructure',
      'Smart contract execution system',
      'Testnet v1 & Initial Wallet',
    ],
    status: 'upcoming'
  },
  {
    title: 'Phase 2: Testnet & Developer Ecosystem',
    duration: 'October 2025 - March 2026',
    items: [
      'Deploy & Optimize Entanglux Testnet v1',
      'Smart Contract Development & dApp Onboarding',
      'Cross-Chain Interoperability',
      'Performance Stress Testing & AI-Optimization',
    ],
    status: 'upcoming'
  },
  {
    title: 'Phase 3: Mainnet & Enterprise Adoption',
    duration: 'April 2026 - March 2027',
    items: [
      'Mainnet Launch & Validator Expansion',
      'Mass Adoption & Enterprise Partnerships',
      'Full Cross-Chain Interoperability',
      'Quantum-Resistant Security Finalization',
    ],
    status: 'upcoming'
  },
  {
    title: 'Phase 4: Mass Adoption & AI Integration',
    duration: 'April 2027 - March 2028',
    items: [
      'AI-Powered Smart Contracts Deployment',
      'Ecosystem Expansion & Global Adoption',
      'Mass User Adoption & Layer-2 Scaling',
      'Research & Development for Next-Gen Advancements',
    ],
    status: 'upcoming'
  },
];

export default function RoadmapSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Development Roadmap
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our journey to revolutionize blockchain technology
          </p>
        </div>

        <div
          ref={ref}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0 w-4 h-4 rounded-full bg-gray-200 border-4 border-white" />

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                <p className="text-sm text-primary font-medium mt-1">{phase.duration}</p>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-gray-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 