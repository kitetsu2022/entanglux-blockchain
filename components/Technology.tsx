'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BoltIcon, ShieldCheckIcon, BeakerIcon, ArrowsRightLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

const Technology = () => {
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

  const ComparisonTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="overflow-x-auto mt-8 mb-8">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {Object.keys(data[0]).map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell: any, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const speedData = [
    {
      'Blockchain': 'Entanglux',
      'Transactions Per Second (TPS)': '10,000,000+ TPS',
      'Finality Time': 'Sub-Millisecond'
    },
    {
      'Blockchain': 'Ethereum',
      'Transactions Per Second (TPS)': '30 TPS',
      'Finality Time': '~12 seconds'
    },
    {
      'Blockchain': 'Solana',
      'Transactions Per Second (TPS)': '65K TPS',
      'Finality Time': '~400 milliseconds'
    },
    {
      'Blockchain': 'XRP',
      'Transactions Per Second (TPS)': '1.5K TPS',
      'Finality Time': '~4 seconds'
    }
  ];

  const cryptoData = [
    {
      'Cryptographic Method': 'SHA-256 (Bitcoin, Ethereum, Solana)',
      'Vulnerable to Quantum Attacks?': '✅ Yes',
      'Used By': 'Most blockchains'
    },
    {
      'Cryptographic Method': 'ECDSA (Bitcoin, Ethereum)',
      'Vulnerable to Quantum Attacks?': '✅ Yes',
      'Used By': 'Digital Signatures'
    },
    {
      'Cryptographic Method': 'RSA-2048',
      'Vulnerable to Quantum Attacks?': '✅ Yes',
      'Used By': 'Traditional Systems'
    },
    {
      'Cryptographic Method': 'Lattice-Based (Entanglux)',
      'Vulnerable to Quantum Attacks?': '❌ No',
      'Used By': 'Entanglux Blockchain'
    },
    {
      'Cryptographic Method': 'Hash-Based Signatures (Entanglux)',
      'Vulnerable to Quantum Attacks?': '❌ No',
      'Used By': 'Entanglux Blockchain'
    }
  ];

  const crossChainData = [
    {
      'Blockchain': 'Entanglux',
      'Ethereum Compatibility': '✅ Yes',
      'Solana/Cardano Bridges': '✅ Yes',
      'AI-Optimized Interoperability': '✅ Yes (AI-driven)'
    },
    {
      'Blockchain': 'Ethereum',
      'Ethereum Compatibility': '✅ Yes',
      'Solana/Cardano Bridges': '❌ No',
      'AI-Optimized Interoperability': '❌ No'
    },
    {
      'Blockchain': 'Solana',
      'Ethereum Compatibility': '❌ No',
      'Solana/Cardano Bridges': '✅ Partial',
      'AI-Optimized Interoperability': '❌ No'
    },
    {
      'Blockchain': 'XRP',
      'Ethereum Compatibility': '❌ No',
      'Solana/Cardano Bridges': '❌ No',
      'AI-Optimized Interoperability': '❌ No'
    }
  ];

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
          Advanced Technology<br /><br />
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mb-8">
          Discover the Cutting-Edge Features That Make Entanglux the Most Advanced Blockchain Platform<br /><br />
        </p>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Entanglux is not just another blockchain—it's a quantum leap forward in decentralized technology. By integrating AI-enhanced consensus mechanisms, quantum-resistant cryptography, and seamless cross-chain interoperability, Entanglux sets a new standard for speed, security, and scalability. Below, we explore the breakthrough innovations that make Entanglux the most advanced blockchain ever built.<br /><br />
        </p>
      </motion.div>

      {/* Lightning Fast Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <BoltIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">⚡ 1. Lightning Fast – Millions of Transactions per Second<br /><br /></h2>
            
            <h3 className="text-2xl font-semibold text-gray-800">Unparalleled Throughput<br /><br /></h3>
            <p className="text-gray-600 leading-relaxed">
              Entanglux redefines transaction speed with an industry-first multi-layer Directed Acyclic Graph (DAG) and AI-Optimized Proof-of-Stake (PoS) consensus, achieving over 10,000,000 transactions per second (TPS)—far surpassing Ethereum (30 TPS), Solana (65K TPS), and even XRP (1.5K TPS).<br /><br />
            </p>

            <ComparisonTable data={speedData} title="Speed Comparison" />

            <h3 className="text-2xl font-semibold text-gray-800">Sub-Millisecond Finality<br /><br /></h3>
            <p className="text-gray-600 leading-relaxed">
              Most blockchains suffer from latency issues, with transaction finality taking seconds or even minutes. Entanglux settles transactions in under a millisecond, making it ideal for real-time payments, high-frequency trading, and enterprise applications.<br /><br />
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">How We Achieve This Speed<br /><br /></h3>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">AI-Optimized Consensus: AI dynamically adjusts node validation weights, reducing bottlenecks.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Multi-Layer DAG: Transactions propagate instantly through a parallelized, layered DAG structure.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Sharded Execution Engine: Smart contracts and transactions execute across multiple nodes simultaneously.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Feeless Staking Economy: Eliminates gas fees, reducing congestion and enabling frictionless transactions.<br /><br /></span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed font-semibold">
              🚀 Real-World Impact: Instant settlements enable high-speed finance, decentralized gaming, and real-time AI interactions.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Quantum-Resistant Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <ShieldCheckIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">🛡 2. Quantum-Resistant – Future-Proof Security<br /><br /></h2>
            
            <h3 className="text-2xl font-semibold text-gray-800">Post-Quantum Cryptography<br /><br /></h3>
            <p className="text-gray-600 leading-relaxed">
              Quantum computing poses an existential threat to traditional cryptographic methods used in blockchains. Entanglux future-proofs your assets with lattice-based encryption and hash-based signatures, ensuring quantum computers cannot break the network's security.<br /><br />
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">Entanglux vs Traditional Cryptography<br /><br /></h3>
            <ComparisonTable data={cryptoData} title="Cryptography Comparison" />

            <h3 className="text-2xl font-semibold text-gray-800">Advanced Quantum-Resistant Features<br /><br /></h3>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Lattice-Based Cryptography – Protects wallet keys and transactions from quantum decryption.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Hash-Based Digital Signatures – Eliminates reliance on vulnerable elliptic curve cryptography (ECDSA).<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Zero-Knowledge Proofs – Enables privacy-preserving transactions without exposing user data.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">AI-Powered Security Audits – AI continuously scans for vulnerabilities, ensuring network integrity.<br /><br /></span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed font-semibold">
              🚀 Real-World Impact: Quantum-resistant security ensures Entanglux remains secure for decades, even as quantum computing advances.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* AI-Powered Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <BeakerIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">🤖 3. AI-Powered – Smart, Adaptive, and Secure<br /><br /></h2>
            
            <h3 className="text-2xl font-semibold text-gray-800">AI-Optimized Network Performance<br /><br /></h3>
            <p className="text-gray-600 leading-relaxed">
              Entanglux's AI-enhanced protocol continuously adapts to network conditions, ensuring maximum efficiency, minimal latency, and enhanced security.<br /><br />
            </p>

            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Predictive Consensus Scaling: AI predicts transaction loads and dynamically scales resources.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Automated Validator Scoring: AI ranks and adjusts node trust levels based on real-time performance.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Self-Healing Network: AI detects and mitigates security threats before they become attacks.<br /><br /></span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">AI-Powered Smart Contracts<br /><br /></h3>
            <p className="text-gray-600 leading-relaxed">
              Unlike standard smart contracts, Entanglux's AI-driven contracts self-optimize, detect vulnerabilities, and enhance efficiency.<br /><br />
            </p>

            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Post-WASM Smart Contracts: AI enhances WebAssembly-based execution for higher efficiency.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Automated Security Audits: AI scans contract code for exploits, reducing hacks.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Dynamic Fee Adjustments: AI optimizes execution fees based on network demand.<br /><br /></span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">AI for Fraud Prevention<br /><br /></h3>
            <p className="text-gray-600 leading-relaxed">
              Entanglux employs machine learning models to detect anomalies, preventing rug pulls, market manipulation, and Sybil attacks.<br /><br />
            </p>

            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Pattern Recognition: AI identifies suspicious wallet behaviors.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Multi-Factor Fraud Analysis: Detects scams and phishing attempts in real-time.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Adaptive Risk Management: AI monitors large transactions for abnormal activity.<br /><br /></span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed font-semibold">
              🚀 Real-World Impact: AI integration makes Entanglux the safest and most efficient blockchain for developers and enterprises.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Cross-Chain Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="absolute top-0 -translate-y-1/2 left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <ArrowsRightLeftIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">🔗 4. Cross-Chain – Seamless Interoperability<br /><br /></h2>
            
            <h3 className="text-2xl font-semibold text-gray-800">Multi-Chain Compatibility<br /><br /></h3>
            <p className="text-gray-600 leading-relaxed">
              Entanglux is fully interoperable with major blockchain ecosystems, enabling frictionless asset transfers and cross-chain DeFi applications.<br /><br />
            </p>

            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Ethereum Bridge: EVM-compatible, allowing seamless integration with existing dApps.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Solana & Cardano Interoperability: Supports fast asset transfers across networks.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Atomic Swaps: Instant, trustless token exchanges without intermediaries.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">AI-Driven Liquidity Management: Ensures optimal cross-chain asset flows.<br /><br /></span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">Advanced Interoperability Protocols<br /><br /></h3>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔗 Layer-0 Cross-Chain Messaging: Enables communication between blockchains without intermediaries.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔗 AI-Powered Arbitrage Bots: Automatically identify and execute the best cross-chain trading opportunities.<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">🔗 Decentralized Identity (DID): Single identity across multiple blockchains, enhancing security and accessibility.<br /><br /></span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">Comparison of Cross-Chain Capabilities<br /><br /></h3>
            <ComparisonTable data={crossChainData} title="Cross-Chain Comparison" />

            <p className="text-gray-600 leading-relaxed font-semibold">
              🚀 Real-World Impact: Cross-chain compatibility allows developers, investors, and institutions to leverage Entanglux without leaving their existing ecosystems.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Entanglux Section */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300">
          <div className="mt-4 text-left space-y-6 px-4 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">🌍 Why Entanglux? The Blockchain of the Future<br /><br /></h2>
            <p className="text-gray-600 leading-relaxed">
              Entanglux isn't just an improvement over existing blockchains—it's a paradigm shift in decentralized technology.<br /><br />
            </p>

            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">10,000,000+ TPS for Instant Settlements<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Quantum-Proof Security for the Next Generation<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">AI-Enhanced Smart Contracts & Fraud Prevention<br /><br /></span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-600">Seamless Cross-Chain Interoperability<br /><br /></span>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              Entanglux is designed for the future of finance, decentralized AI, Web3 gaming, and enterprise adoption.<br /><br />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section variants={itemVariants} className="text-center">
        <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          🚀 Join the revolution—Experience the next evolution of blockchain technology with Entanglux.<br /><br />
        </p>
      </motion.section>
    </motion.div>
  );
};

export default Technology; 