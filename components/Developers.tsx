'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Developers = () => {
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
            👨‍💻 Entanglux Developers Hub<br /><br />
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Build Faster. Deploy Smarter. Scale Infinitely.<br /><br />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
            Welcome to the Entanglux Developers Hub, where speed, security, and AI-powered intelligence meet cutting-edge blockchain development. Whether you're building DeFi platforms, AI-enhanced dApps, or cross-chain integrations, Entanglux provides the tools, resources, and infrastructure to help you innovate.<br /><br />
          </p>
        </motion.div>

        {/* Why Build on Entanglux */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:border-primary transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">
              🚀 Why Build on Entanglux?<br /><br />
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Entanglux is more than just a blockchain—it's a self-optimizing, quantum-resistant, multi-chain compatible development platform.<br /><br />
            </p>
            <ul className="space-y-6">
              <li className="text-gray-600">✔ 10,000,000+ TPS – AI-Optimized DAG+PoS for unparalleled scalability<br /><br /></li>
              <li className="text-gray-600">✔ AI-Powered Smart Contracts – Smarter, self-learning contract execution<br /><br /></li>
              <li className="text-gray-600">✔ Zero-Gas Transactions – Feeless economy with dynamic staking rewards<br /><br /></li>
              <li className="text-gray-600">✔ Cross-Chain Compatibility – Seamless Ethereum, Solana, and Cardano interoperability<br /><br /></li>
              <li className="text-gray-600">✔ Quantum-Resistant Cryptography – Future-proof security using lattice-based encryption<br /><br /></li>
            </ul>
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:border-primary transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">
              📌 Getting Started<br /><br />
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              1️⃣ Set Up Your Development Environment<br /><br />
            </h3>
            <p className="text-gray-600 mb-8">
              Before deploying on Entanglux, install the necessary tools:<br /><br />
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              🔹 Requirements:<br /><br />
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="text-gray-600">✔ Entanglux CLI – Command-line tool for deploying and managing smart contracts<br /><br /></li>
              <li className="text-gray-600">✔ VS Code Extension – Smart contract debugging, syntax highlighting, and AI-powered error detection<br /><br /></li>
              <li className="text-gray-600">✔ Entanglux Node (Optional) – Run a local node for testing and simulation<br /><br /></li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              🔹 Installation Steps:<br /><br />
            </h4>
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <pre className="text-gray-300 font-mono text-sm">
                <code>
                  # Install Entanglux CLI<br />
                  npm install -g entanglux-cli<br /><br />
                  # Create a new project<br />
                  entanglux init my-dapp<br /><br />
                  # Start local testnet node<br />
                  entanglux node start
                </code>
              </pre>
            </div>
            <p className="text-primary hover:text-secondary transition-colors duration-200">
              📖 [View the Full Developer Setup Guide]<br /><br />
            </p>
          </div>
        </motion.div>

        {/* Smart Contracts */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:border-primary transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">
              🛠 Smart Contracts on Entanglux<br /><br />
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              2️⃣ Writing & Deploying Smart Contracts<br /><br />
            </h3>
            <p className="text-gray-600 mb-8">
              Entanglux supports multiple smart contract languages for maximum flexibility:<br /><br />
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supported Features</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">Solidity</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Ethereum compatibility</td>
                    <td className="px-6 py-4 text-sm text-gray-500">EVM execution on Entanglux</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">Rust</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Solana, high performance</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Parallel execution, low latency</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">Plutus</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Cardano support</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Native staking & governance</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500">Zig</td>
                    <td className="px-6 py-4 text-sm text-gray-500">AI-Optimized contracts</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Smart contract auto-scaling</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-primary hover:text-secondary transition-colors duration-200 mb-8">
              📖 [Read the Smart Contract Documentation]<br /><br />
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              3️⃣ AI-Powered Smart Contracts<br /><br />
            </h3>
            <p className="text-gray-600 mb-8">
              Entanglux takes smart contract execution to the next level with built-in AI enhancements:<br /><br />
            </p>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-600">✅ Self-Optimizing Execution – AI dynamically reduces gas costs<br /><br /></li>
              <li className="text-gray-600">✅ AI-Powered Security Audits – Detects vulnerabilities before deployment<br /><br /></li>
              <li className="text-gray-600">✅ Predictive Gas Fees – Smart pricing based on real-time demand<br /><br /></li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Example AI-Optimized Smart Contract in Solidity:<br /><br />
            </h4>
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <pre className="text-gray-300 font-mono text-sm">
                <code>
                  pragma solidity ^0.8.0;<br /><br />
                  contract AIOptimizedContract {'{'}<br />
                  {'    '}function optimizedExecution(uint256 input) public pure returns (uint256) {'{'}<br />
                  {'        '}return input * 2; // AI will auto-optimize gas usage<br />
                  {'    '}{'}'}<br />
                  {'}'}
                </code>
              </pre>
            </div>

            <p className="text-primary hover:text-secondary transition-colors duration-200">
              📖 [Explore AI-Optimized Smart Contracts]<br /><br />
            </p>
          </div>
        </motion.div>

        {/* Cross-Chain Interoperability */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:border-primary transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">
              🔗 Cross-Chain Interoperability<br /><br />
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              4️⃣ Connect to Other Blockchains<br /><br />
            </h3>
            <p className="text-gray-600 mb-8">
              Entanglux allows developers to build truly cross-chain applications, leveraging multi-chain liquidity and execution.<br /><br />
            </p>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-600">✅ Ethereum Bridge: Deploy EVM contracts directly on Entanglux<br /><br /></li>
              <li className="text-gray-600">✅ Solana & Cardano Compatibility: Use Rust & Plutus-based smart contracts<br /><br /></li>
              <li className="text-gray-600">✅ Atomic Swaps & Cross-Chain Liquidity: Direct token transfers without wrapping assets<br /><br /></li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              🔗 Example: Swap Tokens Between Ethereum and Entanglux<br /><br />
            </h4>
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <pre className="text-gray-300 font-mono text-sm">
                <code>
                  contract CrossChainSwap {'{'}<br />
                  {'    '}function swapEthToEntanglux(uint256 amount) public {'{'}<br />
                  {'        '}// Call Entanglux's cross-chain API<br />
                  {'    '}{'}'}<br />
                  {'}'}
                </code>
              </pre>
            </div>

            <p className="text-primary hover:text-secondary transition-colors duration-200">
              📖 [Integrate Cross-Chain Features]<br /><br />
            </p>
          </div>
        </motion.div>

        {/* APIs & SDKs */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:border-primary transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">
              📡 APIs & SDKs<br /><br />
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              5️⃣ Entanglux APIs for Developers<br /><br />
            </h3>
            <p className="text-gray-600 mb-8">
              Entanglux offers a powerful set of APIs for blockchain interaction:<br /><br />
            </p>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-600">✔ JSON-RPC & GraphQL APIs – Interact with the blockchain programmatically<br /><br /></li>
              <li className="text-gray-600">✔ Web3.js & ethers.js Support – Seamless integration with existing Ethereum-based dApps<br /><br /></li>
              <li className="text-gray-600">✔ AI-Powered Monitoring – Use AI-driven analytics to optimize smart contract performance<br /><br /></li>
            </ul>

            <p className="text-primary hover:text-secondary transition-colors duration-200">
              📖 [API Documentation & SDKs]<br /><br />
            </p>
          </div>
        </motion.div>

        {/* Running a Validator Node */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:border-primary transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">
              🖥 Running a Validator Node<br /><br />
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              6️⃣ Become a Validator on Entanglux<br /><br />
            </h3>
            <p className="text-gray-600 mb-8">
              Entanglux's AI-Optimized Proof-of-Stake (PoS) requires secure, distributed validators to maintain the network.<br /><br />
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              🔹 Hardware Requirements<br /><br />
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="text-gray-600">✔ CPU: 8-Core (Intel i7/AMD Ryzen 7 or better)<br /><br /></li>
              <li className="text-gray-600">✔ RAM: 16GB+<br /><br /></li>
              <li className="text-gray-600">✔ Storage: 1TB SSD<br /><br /></li>
              <li className="text-gray-600">✔ Bandwidth: 1 Gbps<br /><br /></li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              🔹 How to Set Up a Node<br /><br />
            </h4>
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <pre className="text-gray-300 font-mono text-sm">
                <code>
                  # Install Entanglux Validator Client<br />
                  entanglux install validator<br /><br />
                  # Register as a validator<br />
                  entanglux register --validator<br /><br />
                  # Start the node<br />
                  entanglux start --validator
                </code>
              </pre>
            </div>

            <p className="text-primary hover:text-secondary transition-colors duration-200">
              📖 [Validator Setup Guide]<br /><br />
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Developers; 