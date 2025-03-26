'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';

const TermsOfService = () => {
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
          Terms of Service<br /><br />
        </h1>
        <p className="text-xl text-gray-600">
          Effective Date: March 22, 2025<br /><br />
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to Entanglux Blockchain ("Entanglux," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our blockchain network, website, applications, and related services (collectively, the "Services"). By using our Services, you agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.<br /><br />
        </p>
      </motion.div>

      {/* Acceptance Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">1. Acceptance of Terms<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Entanglux's Services, you confirm that you:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Are at least 18 years old (or the age of majority in your jurisdiction).<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Have the legal capacity to enter into a binding agreement.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Agree to comply with these Terms and all applicable laws.<br /><br /></span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Changes Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">2. Changes to the Terms<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update or modify these Terms at any time. We will notify users of significant changes via our website or other official channels. Your continued use of the Services after changes means you accept the revised Terms.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">3. Description of Services<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux provides a high-speed, AI-enhanced blockchain platform for smart contracts, decentralized applications (dApps), financial transactions, and more. We do not act as a financial intermediary or provide financial, investment, or legal advice.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* User Responsibilities Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">4. User Responsibilities<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">By using Entanglux's Services, you agree to:<br /><br /></p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Comply with all laws governing blockchain transactions in your jurisdiction.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Use the Services lawfully and not engage in fraud, hacking, or illegal activities.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Maintain security of your private keys, wallets, and accounts.<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              You acknowledge and accept full responsibility for any transactions you initiate on the blockchain.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Prohibited Activities Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">5. Prohibited Activities<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">Users may not use Entanglux for:<br /><br /></p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">Illegal, fraudulent, or deceptive transactions.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">Money laundering, terrorist financing, or sanctioned activities.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">Disrupting network operations (DDoS, hacking, spamming, etc.).<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">Creating or distributing harmful software (malware, phishing, etc.).<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Violations may result in account suspension, termination, or legal action.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Fees Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">6. Fees & Transactions<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux operates on a feeless economy; however, third-party applications, validators, or integrations may impose fees. You are responsible for verifying and understanding any costs before executing transactions.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">
              ⚠ Transactions on Entanglux are irreversible once confirmed on the blockchain. We cannot reverse, refund, or modify completed transactions.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Smart Contracts Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">7. Smart Contracts & dApps<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux allows deployment of AI-powered smart contracts and decentralized applications (dApps). By interacting with these applications, you acknowledge:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">• Smart contracts are autonomous and immutable once deployed.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">• Entanglux is not responsible for any vulnerabilities, bugs, or unintended outcomes within third-party smart contracts.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">• Users should conduct due diligence before engaging with smart contracts and dApps.<br /><br /></span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">8. Security & Risks<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Blockchain technologies, including Entanglux, carry inherent risks. By using the Services, you acknowledge and accept that:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔹 The network is decentralized and not controlled by any entity.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔹 Cryptographic security does not guarantee immunity from attacks.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔹 Quantum computing may pose future threats to cryptographic safety.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔹 Loss of private keys results in permanent loss of funds.<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Entanglux does not assume liability for security breaches or losses due to user negligence.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Third-Party Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">9. Third-Party Integrations<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux may integrate with other blockchain networks (e.g., Ethereum, Solana, Cardano). These integrations are subject to third-party terms, and Entanglux is not liable for external services, liquidity risks, or cross-chain vulnerabilities.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Disclaimers Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">10. Disclaimers & Limitation of Liability<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed font-semibold">
              🚫 No Warranties:<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Services are provided "AS IS" without warranties of any kind. We do not guarantee uptime, error-free operations, or security beyond industry standards.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">
              💰 No Financial Guarantees:<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              Entanglux is not responsible for market volatility, investment losses, or token value fluctuations.<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">
              ⚖ Limited Liability:<br /><br />
            </p>
            <p className="text-gray-600 leading-relaxed">
              In no event shall Entanglux, its affiliates, or developers be liable for:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">• Any direct, indirect, incidental, or consequential damages.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">• Loss of funds, profits, data, or access due to blockchain errors or security breaches.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">• Any issues arising from third-party platforms, wallets, or contracts.<br /><br /></span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Termination Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">11. Termination & Suspension<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate access to the Services if:<br /><br />
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">You violate these Terms.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Your activity is deemed harmful or illegal.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">We receive a lawful request from authorities.<br /><br /></span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Termination does not absolve any outstanding obligations or legal responsibilities.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Governing Law Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">12. Governing Law & Dispute Resolution<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of [Insert Jurisdiction]. Any disputes will be resolved through binding arbitration, unless prohibited by law.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">13. Contact Information<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              For inquiries regarding these Terms, please contact:<br /><br />
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
          🚀 Entanglux Blockchain – The Future of Decentralization<br /><br />
        </p>
        <p className="text-xl text-gray-600">
          By using Entanglux, you agree to build, transact, and innovate responsibly.<br /><br />
        </p>
      </motion.section>
    </motion.div>
  );
};

export default TermsOfService; 