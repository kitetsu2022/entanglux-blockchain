'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, DocumentTextIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Contact = () => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Contact Us<br /><br />
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Entanglux Blockchain, we value transparency, collaboration, and community engagement. Whether you have a question, need support, or want to explore partnership opportunities, we're here to help!<br /><br />
        </p>
      </motion.div>

      {/* General Inquiries Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <EnvelopeIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">📩 General Inquiries<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              For general questions about Entanglux Blockchain, our technology, or upcoming developments, reach out to us at:<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              ✉️ Email: contact@entanglux.io<br />
              🌐 Website: www.entanglux.io<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Technical Support Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <DocumentTextIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">🔧 Technical Support & Developer Assistance<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Encountering an issue? Need help integrating with Entanglux? Our development team and support engineers are ready to assist.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              📩 Email: support@entanglux.io<br />
              📖 Developer Docs: docs.entanglux.io<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Partnerships Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <UserGroupIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">🤝 Partnerships & Business Inquiries<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              We're open to collaborations with enterprises, startups, developers, and institutions looking to leverage Entanglux's blockchain technology.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              📩 Email: partnerships@entanglux.io<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <GlobeAltIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">🌍 Community & Social Media<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Stay connected with our growing Entanglux community for the latest updates, discussions, and announcements.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              🐦 Twitter/X: @EntangluxBlockchain<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section variants={itemVariants} className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          🚀 We're Here to Help!<br /><br />
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Whether you're a developer, investor, or enthusiast, we're excited to hear from you. Let's shape the future of decentralized technology together!<br /><br />
        </p>
      </motion.section>
    </motion.div>
  );
};

export default Contact; 