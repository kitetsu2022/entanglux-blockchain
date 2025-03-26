'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  RocketLaunchIcon,
  ServerIcon,
  CircleStackIcon,
  GlobeAltIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const Roadmap = () => {
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

  const phases = [
    {
      id: 'phase1',
      title: '🚀 Phase 1: Foundation & Testnet Development (0-6 Months)',
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      goal: 'Develop the core infrastructure, including the AI-PoS consensus mechanism, Multi-Layer DAG architecture, smart contract execution system, and initial testnet deployment.',
      steps: [
        {
          title: 'Step 1: AI-PoS + Multi-DAG Consensus (Weeks 1-6)',
          items: [
            'AI-Optimized Proof-of-Stake (PoS): AI ranks validators based on uptime, latency, and network participation.',
            'Multi-Layer DAG Structure: Enables parallel transaction validation for millions of TPS.',
            'Zero-Knowledge Proofs (ZKP): Enhances fraud prevention and transaction privacy.',
          ],
          tools: 'Zig, Rust, TensorFlow Lite, LibP2P, RocksDB',
        },
        {
          title: 'Step 2: Core Blockchain Infrastructure (Weeks 7-12)',
          items: [
            'Transaction Processing Engine: Implements quantum-resistant cryptographic hashes (SHA-3, BLAKE3).',
            'Feeless Staking Economy: Rewards validators without gas fees.',
            'AI-Driven Resource Allocation: Auto-adjusts transaction execution for efficiency.',
          ],
          tools: 'SIMD-optimized execution, NTRU/Kyber encryption, WASM-based smart contracts',
        },
        {
          title: 'Step 3: Smart Contract Execution System (Weeks 13-18)',
          items: [
            'Entanglux Virtual Machine (EVM): AI-enhanced WASM execution for self-optimizing contracts.',
            'Cross-Chain Smart Contracts: Compatible with Ethereum (EVM), Solana, and Cardano.',
            'Parallel Smart Contract Execution: Supports multiple contracts running simultaneously.',
          ],
          tools: 'Solidity, Rust, Plutus, zk-SNARKs',
        },
        {
          title: 'Step 4: Testnet v1 & Quantum-Resistant Wallet (Weeks 19-24)',
          items: [
            'Deploy Public Testnet: Establish validator nodes, real-time TPS monitoring.',
            'Quantum-Resistant Wallet: Implements lattice-based encryption and biometric security.',
          ],
          tools: 'React Native, Flutter, AWS, DigitalOcean',
        },
      ],
    },
    {
      id: 'phase2',
      title: '🚀 Phase 2: Testnet Optimization & Cross-Chain Expansion (6-12 Months)',
      icon: <ServerIcon className="w-8 h-8" />,
      goal: 'Expand the Entanglux Testnet, onboard developers, integrate cross-chain functionality, and stress-test the network.',
      steps: [
        {
          title: 'Step 1: Optimize Entanglux Testnet (Weeks 25-30)',
          items: [
            'Deploy 100+ Validator Nodes: Distributed globally for high availability and resilience.',
            'RPC & API Services: Provides GraphQL, REST API, and Web3.js/Ether.js compatibility.',
          ],
          tools: 'JSON-RPC, gRPC, Hasura, HAProxy',
        },
        {
          title: 'Step 2: Smart Contract Development & dApp Onboarding (Weeks 31-36)',
          items: [
            'Launch Entanglux DSL: A custom smart contract language for AI-driven execution.',
            'Introduce Developer Grants: $10M allocated to support dApps, DeFi, and NFTs.',
          ],
          tools: 'LLVM, WASM, VS Code Extensions',
        },
        {
          title: 'Step 3: Cross-Chain Interoperability (Weeks 37-42)',
          items: [
            'Ethereum, Solana, and Cardano Bridges with zk-SNARK-based cross-chain messaging.',
            'Atomic Swaps: Enable decentralized token transfers without intermediaries.',
          ],
          tools: 'Cosmos IBC, Wormhole, Axelar',
        },
        {
          title: 'Step 4: Performance Stress Testing & AI Optimization (Weeks 43-48)',
          items: [
            'Simulate 1M+ TPS load testing.',
            'Deploy AI-driven self-healing network.',
          ],
          tools: 'Prometheus, TensorFlow anomaly detection',
        },
      ],
    },
    {
      id: 'phase3',
      title: '🚀 Phase 3: Mainnet Deployment & Enterprise Adoption (12-24 Months)',
      icon: <GlobeAltIcon className="w-8 h-8" />,
      goal: 'Transition from Testnet to Mainnet, scale validator participation, and drive enterprise, fintech, and DeFi adoption.',
      steps: [
        {
          title: 'Step 1: Mainnet v1 Launch & Validator Expansion (Weeks 49-60)',
          items: [
            'Snapshot testnet data and migrate to Mainnet.',
            'Expand to 1,000+ Validator Nodes for full decentralization.',
          ],
          tools: 'On-chain DAO voting, zk-SNARK verification',
        },
        {
          title: 'Step 2: Enterprise Adoption & Financial Integration (Weeks 61-72)',
          items: [
            'Entanglux Payment API: Real-time, feeless transactions for financial institutions.',
            'CBDC & Stablecoin Adoption: Integration with central banks for regulatory compliance.',
          ],
          tools: 'PSD2 Open Banking APIs, AI fraud detection',
        },
        {
          title: 'Step 3: Full Cross-Chain Liquidity (Weeks 73-84)',
          items: [
            'AI-driven arbitrage between blockchain ecosystems.',
            'Yield farming optimization via AI-guided DeFi.',
          ],
          tools: 'Axelar, LayerZero, Chainlink CCIP',
        },
        {
          title: 'Step 4: Quantum-Resistant Security Finalization (Weeks 85-96)',
          items: [
            'Upgrade encryption standards to post-quantum cryptography.',
            'Deploy AI-powered anomaly detection for cyber threats.',
          ],
          tools: 'NTRU, Kyber, IBM Qiskit quantum security testing',
        },
      ],
    },
    {
      id: 'phase4',
      title: '🚀 Phase 4: AI-Powered Decentralization & Mass Adoption (24-36 Months)',
      icon: <CpuChipIcon className="w-8 h-8" />,
      goal: 'Deploy AI-enhanced smart contracts, scale to millions of users, and research next-gen blockchain advancements.',
      steps: [
        {
          title: 'Step 1: AI-Driven Smart Contracts & DAOs (Weeks 97-108)',
          items: [
            'Deploy self-optimizing smart contracts that learn and adapt over time.',
            'Introduce AI-powered DAOs that auto-analyze governance proposals.',
          ],
          tools: 'TensorFlow NLP, GPT contract automation',
        },
        {
          title: 'Step 2: Ecosystem Expansion & Web3 Growth (Weeks 109-120)',
          items: [
            'Entanglux DeFi & NFT Ecosystem: Launch lending protocols, decentralized exchanges, and AI-moderated NFT marketplaces.',
            'Blockchain Gaming & Metaverse Integration.',
          ],
          tools: 'Unity Blockchain SDK, AI-based price predictions',
        },
        {
          title: 'Step 3: AI-Powered Layer-2 Scaling (Weeks 121-132)',
          items: [
            'Adaptive AI Scaling (AAS) automatically redistributes network load.',
            'Real-time voice commands for transactions and smart contracts.',
          ],
          tools: 'OpenAI Whisper, Deep Learning for UX optimization',
        },
        {
          title: 'Step 4: Research & Development for Entanglux X (Weeks 133-144)',
          items: [
            'Entanglux X: The World\'s First AI-Blockchain Hybrid.',
            'Self-improving consensus mechanisms using reinforcement learning.',
            'Neural Blockchain Architecture: Nodes behave like AI neurons.',
          ],
          tools: 'Reinforcement learning models, IBM Qiskit for quantum security',
        },
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
            🚀 Entanglux Blockchain Roadmap<br /><br />
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Building the Future of Blockchain – Fast, Secure, AI-Powered, and Quantum-Resistant<br /><br />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Entanglux Blockchain is committed to delivering a next-generation decentralized ecosystem with unparalleled speed, scalability, and security. Our roadmap outlines the four key development phases that will bring Entanglux from concept to full-scale enterprise adoption.<br /><br />
          </p>
        </motion.div>

        {/* Roadmap Summary */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            📅 Roadmap Summary<br /><br />
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full divide-y divide-gray-200 border border-gray-200 rounded-lg table-fixed">
              <colgroup>
                <col className="w-[15%]" />
                <col className="w-[25%]" />
                <col className="w-[60%]" />
              </colgroup>
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phase</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Milestones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Phase 1</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0-6 Months</td>
                  <td className="px-6 py-4 text-sm text-gray-500">AI-PoS Consensus, Multi-DAG Architecture, Smart Contracts, Testnet v1</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Phase 2</td>
                  <td className="px-6 py-4 text-sm text-gray-500">6-12 Months</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Testnet Expansion, Smart Contract Deployment, Cross-Chain Interoperability</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Phase 3</td>
                  <td className="px-6 py-4 text-sm text-gray-500">12-24 Months</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Mainnet Launch, Enterprise & Financial Adoption, DeFi Expansion</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Phase 4</td>
                  <td className="px-6 py-4 text-sm text-gray-500">24-36 Months</td>
                  <td className="px-6 py-4 text-sm text-gray-500">AI-Driven Governance, Mass Adoption, Quantum Security, Next-Gen Research</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Detailed Phases */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-12">
          {phases.map((phase) => (
            <motion.div
              key={phase.id}
              variants={itemVariants}
              className="relative pt-12 px-8 pb-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -top-6 left-8">
                <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg text-white">
                  {phase.icon}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {phase.title}<br /><br />
              </h3>

              <p className="text-gray-600 mb-8">
                Goal: {phase.goal}<br /><br />
              </p>

              <div className="space-y-8">
                {phase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      ✅ {step.title}<br /><br />
                    </h4>
                    <ul className="space-y-4">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600">
                          {item}<br /><br />
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-600">
                      🛠 Tools Used: {step.tools}<br /><br />
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🚀 Join the Future of Blockchain with Entanglux<br /><br />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Entanglux is revolutionizing decentralized technology with unparalleled speed, security, and AI-driven efficiency. Whether you're a developer, investor, or enterprise, Entanglux provides a quantum-proof, next-gen blockchain ecosystem that is built for the future.<br /><br />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Roadmap; 