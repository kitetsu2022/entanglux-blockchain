'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { BoltIcon, ShieldCheckIcon, BeakerIcon, ArrowsRightLeftIcon, ChartBarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Lightning Fast',
    description:
      'Process millions of transactions per second with sub-millisecond finality using Entanglux\'s innovative consensus mechanism.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path 
          d="M13 10V3L4 14H11V21L20 10H13Z" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Quantum-Resistant',
    description:
      'Future-proof your assets with Entanglux\'s post-quantum cryptography that ensures security against quantum computer attacks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path 
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M12 16L16 12L12 8L8 12L12 16Z" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'AI-Powered',
    description:
      'Leverage Entanglux\'s artificial intelligence for optimized network performance, smart contract validation, and fraud prevention.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path 
          d="M12 2L2 7L12 12L22 7L12 2Z" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M2 17L12 22L22 17" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M2 12L12 17L22 12" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Cross-Chain',
    description:
      'Seamlessly connect with other blockchains through Entanglux\'s advanced bridge technology and interoperability protocols.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path 
          d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M12 8V16M8 12H16" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TechnologySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, marginBottom: 0 },
    visible: {
      opacity: 1,
      y: 0,
      marginBottom: '2rem',
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Entanglux Technology
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the cutting-edge features that make Entanglux the most advanced blockchain platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24 grid grid-cols-1 gap-y-16 my-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300 mx-4 my-8"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg text-white">
                  {feature.icon}
                </span>
              </div>

              <div className="mt-4 text-left space-y-3 px-4">
                <h3 className="text-2xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              <div className="mt-8 text-left px-4 mb-4">
                <Link href="/technology" className="inline-block">
                  <button className="text-primary hover:text-secondary transition-colors duration-200 inline-flex items-center font-medium">
                    Learn more
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="/technology" className="inline-block">
            <button className="btn btn-primary btn-lg">
              Learn More About Entanglux Technology
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 