'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  BookOpenIcon,
  RocketLaunchIcon,
  ServerIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const Documentation = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const sections = [
    {
      id: 'getting-started',
      title: '1️⃣ Getting Started',
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      items: [
        'What is Entanglux? – Overview of our blockchain technology',
        'Why Entanglux? – Key advantages over traditional blockchains',
        'How It Works – A simplified explanation of DAG+PoS and AI-enhanced consensus',
        'Entanglux Use Cases – Financial transactions, AI-powered dApps, DeFi, NFTs, etc.',
      ],
    },
    {
      id: 'network-overview',
      title: '2️⃣ Network Overview',
      icon: <ArrowPathIcon className="w-8 h-8" />,
      items: [
        'Consensus Mechanism – AI-Optimized Proof-of-Stake + Multi-Layer DAG',
        'Transaction Lifecycle – How transactions move through Entanglux\'s network',
        'Block Finality & Speed – Achieving sub-millisecond settlement',
        'Quantum-Resistant Security – Details on our cryptographic architecture',
      ],
    },
    {
      id: 'node-setup',
      title: '3️⃣ Setting Up a Node',
      icon: <ServerIcon className="w-8 h-8" />,
      items: [
        'Running a Validator Node',
        'Hardware & software requirements',
        'Step-by-step installation guide',
        'Validator staking and rewards',
        'Running a Full Node',
        'Syncing with the network',
        'Configuring node settings',
        'Monitoring & Maintaining a Node',
        'Logs, updates, and performance tuning',
      ],
    },
    {
      id: 'smart-contracts',
      title: '4️⃣ Smart Contracts & dApp Development',
      icon: <CodeBracketIcon className="w-8 h-8" />,
      items: [
        'Entanglux Virtual Machine (NVM) Overview',
        'Writing AI-Powered Smart Contracts',
        'Deploying & Testing Smart Contracts',
        'Contract Security Best Practices',
      ],
    },
    {
      id: 'cross-chain',
      title: '5️⃣ Cross-Chain Interoperability',
      icon: <LinkIcon className="w-8 h-8" />,
      items: [
        'Ethereum & EVM Integration',
        'Solana & Cardano Bridges',
        'Atomic Swaps & Cross-Chain Liquidity',
      ],
    },
    {
      id: 'api-sdk',
      title: '6️⃣ API & SDK Documentation',
      icon: <CommandLineIcon className="w-8 h-8" />,
      items: [
        'Entanglux API Reference',
        'Web3.js & ethers.js Compatibility',
        'Building Wallets & Exchanges with Entanglux',
      ],
    },
    {
      id: 'governance',
      title: '7️⃣ Governance & Staking',
      icon: <BookOpenIcon className="w-8 h-8" />,
      items: [
        'How Staking Works on Entanglux',
        'Validator & Delegator Roles',
        'Voting & Governance Mechanisms',
      ],
    },
    {
      id: 'security',
      title: '8️⃣ Security & Risk Management',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      items: [
        'Quantum-Resistant Cryptography',
        'AI-Based Security Audits',
        'Protecting Your Wallet & Private Keys',
      ],
    },
    {
      id: 'troubleshooting',
      title: '9️⃣ Troubleshooting & FAQs',
      icon: <QuestionMarkCircleIcon className="w-8 h-8" />,
      items: [
        'Common Errors & Fixes',
        'Performance Optimization',
        'Community Support Channels',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            📖 Entanglux Blockchain Documentation<br /><br />
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            🚀 Welcome to Entanglux's Developer & User Documentation<br /><br />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            This documentation serves as a complete guide to Entanglux Blockchain's ecosystem, covering everything from network architecture to smart contract development, validator setup, and API integrations.<br /><br />
          </p>
        </motion.div>

        {/* Table of Contents */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            📌 Table of Contents<br /><br />
          </h2>
        </motion.div>

        {/* Documentation Sections */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-12"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -top-6 left-8">
                <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg text-white">
                  {section.icon}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {section.title}<br /><br />
              </h3>

              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <span className="text-primary">✅</span>
                    <span className="text-gray-600">{item}<br /><br /></span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Useful Links */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            🔗 Useful Links<br /><br />
          </h2>
          <ul className="space-y-4">
            <li className="text-gray-600">
              🌐 Official Website: <Link href="/" className="text-primary hover:text-secondary">entanglux.io</Link><br /><br />
            </li>
            <li className="text-gray-600">
              📖 Developer Docs: <Link href="/documentation" className="text-primary hover:text-secondary">entanglux.io/documentation</Link><br /><br />
            </li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🚀 Start Building on Entanglux Today!<br /><br />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're a developer, validator, or enthusiast, Entanglux's documentation provides everything you need to integrate, build, and innovate on the world's fastest, most secure blockchain.<br /><br />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Documentation; 