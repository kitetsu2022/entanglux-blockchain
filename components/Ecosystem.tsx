'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CircleStackIcon,
  CurrencyDollarIcon,
  PhotoIcon,
  ArrowsRightLeftIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const Ecosystem = () => {
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
      id: 'core',
      title: '🔗 1. The Core Blockchain Infrastructure',
      icon: <CircleStackIcon className="w-8 h-8" />,
      description: 'Entanglux is built with a Multi-Layer Directed Acyclic Graph (DAG) + AI-Optimized Proof-of-Stake (PoS) Consensus, allowing:',
      features: [
        '10,000,000+ TPS – Unmatched transaction speeds',
        'Sub-Millisecond Finality – Instant transaction settlements',
        'Feeless Transactions – Eliminating gas fees with AI-driven resource allocation',
        'Quantum-Resistant Cryptography – Future-proof security against quantum threats',
      ],
    },
    {
      id: 'defi',
      title: '💰 2. Decentralized Finance (DeFi) on Entanglux',
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      description: 'Entanglux is an ideal platform for DeFi innovation, supporting zero-gas, AI-optimized lending, trading, and automated yield strategies.',
      subsections: [
        {
          title: '🛠 DeFi Features:',
          items: [
            'Entanglux DEX (Decentralized Exchange): A high-speed, feeless decentralized exchange powered by AI-driven liquidity pools.',
            'AI-Powered Yield Farming: Adaptive smart contracts automatically optimize farming strategies.',
            'Instant Lending & Borrowing: AI-powered risk assessment for lightning-fast, secure loans.',
            'Cross-Chain Liquidity: Direct interoperability with Ethereum, Solana, and Cardano DeFi ecosystems.',
          ],
        },
      ],
      note: '🔗 Coming Soon: Entanglux DeFi Launchpad, allowing projects to build, launch, and scale innovative DeFi applications.',
    },
    {
      id: 'nft',
      title: '🖼 3. NFTs & Metaverse Integration',
      icon: <PhotoIcon className="w-8 h-8" />,
      description: 'Entanglux\'s feeless, high-speed blockchain is perfect for NFTs, gaming, and metaverse applications.',
      subsections: [
        {
          title: '🎨 NFT & Digital Asset Ecosystem:',
          items: [
            'Zero-Gas NFT Transactions: Mint, trade, and sell NFTs with no gas fees.',
            'AI-Driven NFT Valuation: Smart algorithms analyze rarity, demand, and price trends.',
            'Cross-Chain NFT Portability: Transfer NFTs seamlessly between Entanglux, Ethereum, and Solana.',
          ],
        },
        {
          title: '🎮 Blockchain Gaming & Metaverse Applications:',
          items: [
            'Instant Transactions for In-Game Economies',
            'On-Chain AI-Generated Avatars & Content',
            'Cross-Platform Metaverse Bridges',
          ],
        },
      ],
      note: '🚀 Entanglux Metaverse Fund – Supporting next-gen gaming, AR/VR applications, and digital asset ecosystems.',
    },
    {
      id: 'interop',
      title: '🔄 4. Cross-Chain Interoperability',
      icon: <ArrowsRightLeftIcon className="w-8 h-8" />,
      description: 'Entanglux is designed for seamless integration with existing blockchain networks, unlocking true cross-chain liquidity and application compatibility.',
      subsections: [
        {
          title: '🔗 Interoperability Features:',
          items: [
            'Ethereum Bridge: Full EVM compatibility for seamless dApp and DeFi migration.',
            'Solana & Cardano Bridges: Supports Rust and Plutus-based smart contract execution.',
            'Atomic Swaps & Multi-Chain Liquidity Pools',
          ],
        },
      ],
      note: '🌉 Entanglux Universal Bridge – Allowing instant token transfers and contract execution across blockchains.',
    },
    {
      id: 'enterprise',
      title: '🏛 5. Enterprise & Institutional Adoption',
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      description: 'Entanglux is not just for DeFi and NFTs—it\'s a next-gen financial infrastructure built for enterprises, governments, and fintech companies.',
      subsections: [
        {
          title: '💼 Financial Applications:',
          items: [
            'CBDCs (Central Bank Digital Currencies): Governments can launch quantum-secure digital currencies.',
            'Stablecoin Integration: Seamless stablecoin issuance and settlements.',
            'AI-Powered Fraud Prevention: Real-time monitoring to prevent illicit transactions.',
            'Regulatory Compliance: Built-in zk-SNARK-based identity verification for secure financial transactions.',
          ],
        },
      ],
      note: '📌 Enterprise Use Cases: Payments, settlements, banking, supply chain, and AI-based auditing.',
    },
    {
      id: 'developer',
      title: '🛠 6. Developer & Validator Ecosystem',
      icon: <CodeBracketIcon className="w-8 h-8" />,
      description: 'Entanglux empowers developers with cutting-edge tools, smart contract frameworks, and AI-driven optimizations.',
      subsections: [
        {
          title: '👨‍💻 Developer Features:',
          items: [
            'Entanglux Virtual Machine (EVM): AI-enhanced smart contract execution engine.',
            'Web3, Solidity, Rust, and Plutus Compatibility – Cross-language development support.',
            'AI-Optimized Gas Fees: Real-time contract execution cost reduction.',
            'VS Code & JetBrains Plugins: Full support for smart contract debugging & development.',
          ],
        },
      ],
      note: '🔹 Entanglux Grants & Hackathons: $10M allocated for developer funding.',
    },
    {
      id: 'security',
      title: '📈 7. AI & Quantum-Resistant Security',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      description: 'Entanglux is the first blockchain with fully AI-powered security and quantum-resistant cryptography.',
      subsections: [
        {
          title: '🛡 Security Innovations:',
          items: [
            'Lattice-Based Encryption (Kyber, NTRU): Fully quantum-proof cryptographic model.',
            'AI-Driven Anomaly Detection: Detects network vulnerabilities before they become threats.',
            'Self-Healing Network Nodes: AI automatically patches and optimizes validator nodes.',
          ],
        },
      ],
      note: '🔹 Entanglux Security Lab – Ongoing AI-driven blockchain security research & testing.',
    },
    {
      id: 'governance',
      title: '🌎 8. DAO & Governance Model',
      icon: <UserGroupIcon className="w-8 h-8" />,
      description: 'Entanglux is fully decentralized and governed by AI-assisted DAOs that self-optimize based on community feedback.',
      subsections: [
        {
          title: '🏛 Decentralized Governance Features:',
          items: [
            'AI-Assisted Proposal Optimization',
            'Fair Voting Mechanisms with zk-SNARKs',
            'On-Chain Treasury & Development Fund',
          ],
        },
      ],
      note: '🗳 Join the Entanglux DAO – Vote on network upgrades, funding decisions, and future innovations.',
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
            Entanglux Ecosystem<br /><br />
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            A Thriving Network of Innovation, Speed, and Security<br /><br />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            The Entanglux Blockchain Ecosystem is designed to be fast, decentralized, and infinitely scalable, creating an unparalleled environment for developers, enterprises, financial institutions, and decentralized applications (dApps).
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
            From AI-powered smart contracts and DeFi platforms to cross-chain interoperability and quantum-resistant security, Entanglux provides the foundation for the next evolution of Web3.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            🚀 Key Components of the Entanglux Ecosystem<br /><br />
          </h2>
        </motion.div>

        {/* Sections */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-12">
          {sections.map((section) => (
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

              <p className="text-gray-600 mb-8">
                {section.description}<br /><br />
              </p>

              {section.features && (
                <ul className="space-y-8 mb-8">
                  {section.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      ✅ {feature}<br /><br />
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && section.subsections.map((subsection, index) => (
                <div key={index} className="mb-12">
                  <h4 className="text-xl font-semibold text-gray-800 mb-8">
                    {subsection.title}<br /><br />
                  </h4>
                  <ul className="space-y-8">
                    {subsection.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">
                        ✅ {item}<br /><br />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.note && (
                <p className="text-gray-600 mt-8 mb-4 font-medium">
                  {section.note}<br /><br />
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
            🚀 Join the Entanglux Ecosystem Today!<br /><br />
          </h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            📌 Whether You Are:<br /><br />
          </h3>
          <ul className="text-xl text-gray-600 space-y-4 mb-8">
            <li>💰 A DeFi investor looking for zero-gas, high-speed opportunities<br /><br /></li>
            <li>🎨 An NFT creator seeking instant, feeless minting<br /><br /></li>
            <li>🛠 A developer building next-gen smart contracts<br /><br /></li>
            <li>🏦 An enterprise looking for quantum-secure transactions<br /><br /></li>
          </ul>
          <p className="text-2xl font-semibold text-gray-900">
            Entanglux is the blockchain of the future.<br /><br />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Ecosystem; 