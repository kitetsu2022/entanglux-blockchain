'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
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
          Privacy Policy<br /><br />
        </h1>
        <p className="text-xl text-gray-600">
          Effective Date: March 22, 2025<br /><br />
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to Entanglux Blockchain ("Entanglux," "we," "our," or "us"). Your privacy is important to us, and this Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, blockchain network, applications, and related services (collectively, the "Services").<br /><br />
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use immediately.<br /><br />
        </p>
      </motion.div>

      {/* Information We Collect Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">1. Information We Collect<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux operates as a decentralized blockchain network, meaning that certain information is stored on the blockchain and may be publicly accessible. However, we may collect additional data through our website, applications, or services.<br /><br />
            </p>
            <h3 className="text-2xl font-semibold text-gray-900">A. Information You Provide to Us:<br /><br /></h3>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Contact Information (if you interact with us via email, support requests, or newsletters).<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Wallet Addresses (when using our blockchain, stored on-chain and visible publicly).<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Transaction Data (including timestamps, smart contract interactions, and activity on the blockchain).<br /><br /></span>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900">B. Information We Automatically Collect:<br /><br /></h3>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Log Data (IP addresses, browser type, and system information for website analytics).<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Cookies & Tracking Technologies (for website functionality and analytics, if applicable).<br /><br /></span>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900">C. Information from Third Parties:<br /><br /></h3>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">If you use third-party wallets, exchanges, or dApps integrated with Entanglux, those services may share transaction-related data with us.<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed font-semibold">
              🚀 No Personally Identifiable Information (PII): Entanglux does not require or collect sensitive PII, such as names, addresses, government IDs, or payment information.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* How We Use Information Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">2. How We Use Your Information<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              We use collected data for the following purposes:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Providing & Improving Services – Ensuring smooth blockchain operations, smart contract execution, and network security.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Analytics & Performance Monitoring – Enhancing user experience, detecting issues, and optimizing performance.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Security & Fraud Prevention – Identifying unauthorized activity, preventing cyber threats, and ensuring blockchain integrity.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Legal & Compliance Obligations – Complying with regulatory requirements where applicable.<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed font-semibold">
              ⚠ Blockchain Data Cannot Be Deleted: Since blockchain transactions are immutable, any data recorded on-chain (such as wallet addresses and transactions) cannot be altered or erased.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* How We Share Information Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">3. How We Share Information<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux does not sell or rent your data. However, in certain cases, we may share information:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Public Blockchain Ledger: Any transactions, wallet addresses, and smart contract interactions are publicly visible on the blockchain.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Service Providers: We may use analytics tools (e.g., Google Analytics) to improve our website experience.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Legal Compliance: If required by law, we may disclose information in response to legal requests, subpoenas, or regulatory inquiries.<br /><br /></span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">4. Security & Data Protection<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux prioritizes security and decentralization through:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔐 Quantum-Resistant Encryption – Using post-quantum cryptographic techniques for blockchain security.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🚀 AI-Powered Threat Detection – Identifying and mitigating potential cyber threats.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🛡 User-Controlled Data – We do not store private keys; users are solely responsible for their wallet security.<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed font-semibold">
              ⚠ Your Security Responsibilities: You must keep your private keys, wallets, and access credentials secure. Entanglux cannot recover lost private keys, and any loss may result in permanent asset loss.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Your Rights Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">5. Your Rights & Choices<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux operates without centralized user accounts, meaning we do not control your data. However, you have the following rights:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Access & Transparency: All blockchain transactions are publicly accessible.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Opt-Out of Analytics: You may disable cookies in your browser settings to opt out of analytics tracking on our website.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Third-Party Privacy Policies: If you use third-party services (wallets, exchanges, or dApps), refer to their privacy policies for data handling.<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              🚀 Data Deletion Requests: Since blockchain transactions are permanent, we cannot erase data recorded on-chain. If you wish to discontinue using Entanglux, stop transacting on the network.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Cookies Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">6. Cookies & Tracking Technologies<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              If our website or services use cookies, we may collect data related to website performance and user interactions. Users can control cookie settings through their browser preferences.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Third-Party Links Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">7. Third-Party Links & Services<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux may contain links to third-party websites, wallets, or decentralized applications. We do not control third-party privacy practices and encourage users to review their policies before engaging.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Children's Privacy Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">8. Children's Privacy<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux's Services are not intended for children under 18. We do not knowingly collect or store data from minors. If we discover that a minor has provided personal data, we will take steps to remove it.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Changes Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">9. Changes to This Privacy Policy<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy as our Services evolve. Changes will be posted on our website with a revised "Effective Date." Continued use of Entanglux after updates signifies acceptance of the revised policy.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">10. Contact Information<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              For questions or concerns about this Privacy Policy, please contact us at:<br /><br />
            </p>
            <p className="text-gray-600 mb-8">
              📧 Email: contact@entangluxblockchain.io<br />
              🌐 Website: www.entangluxblockchain.io<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section variants={itemVariants} className="text-center">
        <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          🚀 Entanglux Blockchain – Privacy, Security, and Decentralization<br /><br />
        </p>
        <p className="text-xl text-gray-600">
          Your data. Your control. Your blockchain.<br /><br />
        </p>
      </motion.section>
    </motion.div>
  );
};

export default PrivacyPolicy; 