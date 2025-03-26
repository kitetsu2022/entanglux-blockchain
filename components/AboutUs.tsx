'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, marginBottom: 0 },
    visible: {
      opacity: 1,
      y: 0,
      marginBottom: '2rem',
      transition: {
        duration: 0.8
      }
    }
  };

  const features = [
    "10,000,000+ TPS – Shattering transaction speed barriers",
    "Sub-Millisecond Finality – Instant confirmation, zero delays",
    "Feeless Transactions – Empowering true financial freedom",
    "AI-Powered Smart Contracts – Smarter, self-optimizing dApps",
    "Quantum-Resistant Security – Future-proof encryption",
    "Cross-Chain Interoperability – Seamless EVM, Solana, and Cardano bridges"
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Revolutionizing Blockchain with Unmatched{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Speed, Security, and Intelligence
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
          Welcome to Entanglux Blockchain, the next-generation decentralized network designed to break the limitations of traditional blockchain technology.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">Our Mission<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple yet groundbreaking: to create the fastest, most scalable, and quantum-secure blockchain powered by AI-enhanced consensus and feeless transactions.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why We Exist Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">Why We Exist<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              The current blockchain landscape is riddled with challenges—slow transactions, high fees, and scalability issues. Ethereum struggles with congestion, XRP lacks smart contract flexibility, and no existing network is truly quantum-resistant or AI-optimized.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Entanglux, we refuse to settle. That's why we're building a high-speed, feeless, and infinitely scalable ecosystem that integrates the best of AI, DAGs, and Proof-of-Stake consensus to redefine what's possible in blockchain technology.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">What Sets Us Apart<br /><br /></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pt-12 px-8 pb-12 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300"
            >
              <div className="mt-4 text-left space-y-6 px-4">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}<br /><br /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">Our Vision for the Future<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              We're not just building a blockchain; we're pioneering the next era of decentralized technology. Our roadmap is laser-focused on global adoption, AI-driven automation, and enterprise integration, ensuring Entanglux becomes the backbone of the digital economy.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              From DeFi and NFTs to banking and enterprise solutions, Entanglux is unlocking limitless possibilities in a way no other blockchain has before.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section variants={itemVariants} className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Join the Revolution<br /><br /></h2>
        <p className="text-xl text-gray-600 mb-12">
          The future of blockchain is here, and it's faster, smarter, and truly decentralized. Whether you're a developer, investor, or blockchain enthusiast, we invite you to be part of the Entanglux movement.
        </p>
        <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-12">
          <br />🚀 Entanglux Blockchain – The Next Evolution in Decentralization
        </p>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs; 