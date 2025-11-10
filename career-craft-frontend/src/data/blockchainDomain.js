// This file exports the complete data structure for the Blockchain domain.

import blockchain from '../assets/blockchain.JPG'
export const blockchainDomain = {
  id: "blockchain",
  title: "Blockchain",
  imageUrl:blockchain,
  description:
    "Blockchain is a distributed, immutable ledger technology that facilitates secure and transparent transactions. It's the foundational technology for cryptocurrencies like Bitcoin and enables decentralized applications (dApps) and new economic systems (DeFi, NFTs).",
  quizRoute: "/quiz/blockchain",
  topics: [
    // 1️⃣ Blockchain & Crypto Fundamentals
    {
      id: "intro",
      title: "Blockchain & Crypto Fundamentals",
      route: "/domains/blockchain/intro",
      summary:
        "Understand the core problem blockchain solves. Learn about ledgers, decentralization, and the cryptographic principles of hashing (SHA-256) and public/private keys.",
      freeResources: [
        {
          title: "How does a blockchain work? (YouTube - 3Blue1Brown)",
          type: "video",
          link: "https://www.youtube.com/watch?v=bBC-P1-NTnE",
        },
        {
          title: "Public/Private Key Cryptography (Text)",
          type: "text",
          link: "https://www.geeksforgeeks.org/public-key-private-key-cryptography/",
        },
        {
          title: "Blockchain 101 (Coinbase)",
          type: "text",
          link: "https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain",
        },
      ],
      paidResources: [
        {
          title: "Blockchain Basics (Coursera - University at Buffalo)",
          link: "https://www.coursera.org/learn/blockchain-basics",
        },
      ],
      projects: [
        {
          title: "Create a Hash",
          desc: "Use a simple online SHA-256 generator to see how changing one letter in a word completely changes the hash.",
        },
      ],
      organizations: [
        { name: "Bitcoin Foundation", desc: "Original advocacy organization" },
        { name: "Satoshi Nakamoto", desc: "Pseudonymous creator of Bitcoin" },
      ],
    },

    // 2️⃣ Core Concepts: Consensus & Mining
    {
      id: "consensus",
      title: "Core Concepts: Consensus & Mining",
      route: "/domains/blockchain/consensus",
      summary:
        "Learn how a decentralized network agrees on 'the truth.' Understand distributed ledgers, blocks, chains, and consensus mechanisms like Proof-of-Work (PoW) and Proof-of-Stake (PoS).",
      freeResources: [
        {
          title: "Proof-of-Work vs Proof-of-Stake (Ethereum Docs)",
          type: "text",
          link: "https://ethereum.org/en/energy-consumption/proof-of-work-vs-proof-of-stake/",
        },
        {
          title: "What is a Consensus Algorithm? (Binance Academy)",
          type: "text",
          link: "https://academy.binance.com/en/articles/what-is-a-consensus-algorithm",
        },
        {
          title: "Mining Explained (YouTube - StatQuest)",
          type: "video",
          link: "https://www.youtube.com/watch?v=B-k-NP-0_o",
        },
      ],
      paidResources: [
        {
          title: "Book: Mastering Bitcoin (Andreas Antonopoulos)",
          link: "https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388",
        },
      ],
      projects: [
        {
          title: "Build a Simple Blockchain",
          desc: "Follow a tutorial to build a very simple blockchain in Python or JavaScript to understand how blocks link.",
        },
      ],
      organizations: [
        { name: "Bitcoin Core", desc: "Open-source maintainers of Bitcoin's code" },
      ],
    },

    // 3️⃣ Ethereum & Smart Contracts
    {
      id: "ethereum-smart-contracts",
      title: "Ethereum & Smart Contracts",
      route: "/domains/blockchain/ethereum-smart-contracts",
      summary:
        "Explore Ethereum: the programmable blockchain. Understand the concept of Smart Contracts, the Ethereum Virtual Machine (EVM), gas, and 'Turing-completeness.'",
      freeResources: [
        {
          title: "What is Ethereum? (Official Docs)",
          type: "text",
          link: "https://ethereum.org/en/what-is-ethereum/",
        },
        {
          title: "What is a Smart Contract? (Ethereum Docs)",
          type: "text",
          link: "https://ethereum.org/en/smart-contracts/",
        },
        {
          title: "What is Gas? (Ethereum Docs)",
          type: "text",
          link: "https://ethereum.org/en/gas/",
        },
      ],
      paidResources: [
        {
          title: "Book: Mastering Ethereum (Andreas Antonopoulos)",
          link: "https://www.amazon.com/Mastering-Ethereum-Building-Contracts-Decentralized/dp/1491971940",
        },
      ],
      projects: [
        {
          title: "Analyze a Smart Contract",
          desc: "Use a block explorer like Etherscan to find and read the code of a popular smart contract (e.g., a simple token).",
        },
      ],
      organizations: [
        { name: "Ethereum Foundation", desc: "Non-profit supporting Ethereum and related tech" },
      ],
    },

    // 4️⃣ Smart Contract Development (Solidity)
    {
      id: "solidity",
      title: "Smart Contract Development (Solidity)",
      route: "/domains/blockchain/solidity",
      summary:
        "Learn to write smart contracts using Solidity. Understand variables, functions, modifiers, and the ERC-20 token standard. Use tools like Remix IDE.",
      freeResources: [
        {
          title: "Solidity Official Docs",
          type: "text",
          link: "https://docs.soliditylang.org/",
        },
        {
          title: "Remix IDE (Tool)",
          type: "tool",
          link: "https://remix.ethereum.org/",
        },
        {
          title: "CryptoZombies (Interactive Solidity Tutorial)",
          type: "course",
          link: "https://cryptozombies.io/",
        },
      ],
      paidResources: [
        {
          title: "Ethereum and Solidity Developer Bootcamp (Udemy)",
          link: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/",
        },
      ],
      projects: [
        {
          title: "Simple Storage Contract",
          desc: "Write a contract in Remix that can store a number and has functions to set and retrieve it.",
        },
        {
          title: "Create a Simple ERC-20 Token",
          desc: "Use an OpenZeppelin wizard to create a basic, secure ERC-20 token contract.",
        },
      ],
      organizations: [
        { name: "OpenZeppelin", desc: "Provides security standards for smart contracts" },
      ],
    },

    // 5️⃣ dApp Development (Web3)
    {
      id: "dapp-web3",
      title: "dApp Development (Web3)",
      route: "/domains/blockchain/dapp-web3",
      summary:
        "Learn to build a decentralized application (dApp). Connect a frontend (React) to your smart contract using libraries like Ethers.js or Web3.js and a wallet like MetaMask.",
      freeResources: [
        {
          title: "Ethers.js Docs",
          type: "text",
          link: "https://docs.ethers.org/v5/",
        },
        {
          title: "MetaMask Docs",
          type: "tool",
          link: "https://docs.metamask.io/guide/",
        },
        {
          title: "Alchemy University (Free Web3 Courses)",
          type: "course",
          link: "https://university.alchemy.com/",
        },
      ],
      paidResources: [
        {
          title: "Build a dApp on Ethereum (Educative)",
          link: "https://www.educative.io/courses/build-dapp-on-ethereum",
        },
      ],
      projects: [
        {
          title: "Simple dApp",
          desc: "Create a simple web page (React) that connects to MetaMask and reads the number from your 'Simple Storage' contract.",
        },
      ],
      organizations: [
        { name: "Alchemy", desc: "A leading provider of blockchain node infrastructure" },
        { name: "Infura", desc: "A provider of blockchain node infrastructure" },
      ],
    },

    // 6️⃣ Blockchain Tooling
    {
      id: "tooling",
      title: "Blockchain Tooling (Truffle/Hardhat)",
      route: "/domains/blockchain/tooling",
      summary:
        "Move beyond Remix to professional development environments. Learn to compile, test, and deploy contracts using local development frameworks like Hardhat or Truffle.",
      freeResources: [
        {
          title: "Hardhat Docs",
          type: "text",
          link: "https://hardhat.org/docs",
        },
        {
          title: "Truffle Suite Docs",
          type: "text",
          link: "https://trufflesuite.com/docs/",
        },
      ],
      paidResources: [
        {
          title: "Blockchain Advanced Developer (Udemy)",
          link: "https://www.udemy.com/course/advanced-blockchain-developer-program/",
        },
      ],
      projects: [
        {
          title: "Test Your Contract",
          desc: "Use Hardhat or Truffle to write automated tests for your ERC-20 token contract.",
        },
      ],
      organizations: [
        { name: "Nomic Foundation", desc: "Maintains Hardhat" },
        { name: "Truffle Suite", desc: "Development framework by ConsenSys" },
      ],
    },

    // 7️⃣ Decentralized Finance (DeFi)
    {
      id: "defi",
      title: "Decentralized Finance (DeFi)",
      route: "/domains/blockchain/defi",
      summary:
        "Explore the 'money legos' of crypto. Understand key DeFi protocols like Decentralized Exchanges (DEXs like Uniswap), and lending/borrowing platforms (Aave, Compound).",
      freeResources: [
        {
          title: "What is DeFi? (Coinbase)",
          type: "text",
          link: "https://www.coinbase.com/learn/crypto-basics/what-is-defi",
        },
        {
          title: "How Uniswap Works (Uniswap Docs)",
          type: "text",
          link: "https://docs.uniswap.org/protocol/V2/concepts/protocol-overview/how-uniswap-works",
        },
        {
          title: "Aave Protocol Overview",
          type: "text",
          link: "https://docs.aave.com/developers/v/2.0/the-protocol",
        },
      ],
      paidResources: [
        {
          title: "DeFi and the Future of Finance (Coursera - Duke)",
          link: "https://www.coursera.org/learn/defi-finance",
        },
      ],
      projects: [
        {
          title: "Use a DeFi Protocol",
          desc: "Use a testnet (e.g., Sepolia) to swap two test tokens on Uniswap or borrow a test asset on Aave.",
        },
      ],
      organizations: [
        { name: "Uniswap", desc: "A leading Decentralized Exchange (DEX)" },
        { name: "Aave", desc: "A leading lending and borrowing protocol" },
      ],
    },

    // 8️⃣ NFTs (Non-Fungible Tokens)
    {
      id: "nfts",
      title: "NFTs (Non-Fungible Tokens)",
      route: "/domains/blockchain/nfts",
      summary:
        "Understand unique digital assets. Learn about the ERC-721 and ERC-1155 token standards, NFT marketplaces (OpenSea), and use cases for digital art and collectibles.",
      freeResources: [
        {
          title: "What is an NFT? (Ethereum Docs)",
          type: "text",
          link: "https://ethereum.org/en/nft/",
        },
        {
          title: "ERC-721 Token Standard (EIP)",
          type: "text",
          link: "https://eips.ethereum.org/EIPS/eip-721",
        },
      ],
      paidResources: [
        {
          title: "NFTs (Non-Fungible Tokens) (Udemy)",
          link: "https://www.udemy.com/course/the-complete-nft-course-learn-everything-about-nfts/",
        },
      ],
      projects: [
        {
          title: "Create your own NFT",
          desc: "Follow a tutorial to write and deploy your own ERC-721 contract and mint an NFT on a testnet.",
        },
      ],
      organizations: [
        { name: "OpenSea", desc: "A large peer-to-peer NFT marketplace" },
      ],
    },

    // 9️⃣ Scalability & Layer 2 Solutions
    {
      id: "scalability-l2",
      title: "Scalability & Layer 2 Solutions",
      route: "/domains/blockchain/scalability-l2",
      summary:
        "Learn how to make blockchains faster and cheaper. Understand the 'Blockchain Trilemma,' Layer 2 (L2) scaling solutions, rollups (Optimistic/ZK-Rollups), and sidechains.",
      freeResources: [
        {
          title: "What is Layer 2? (Ethereum Docs)",
          type: "text",
          link: "https://ethereum.org/en/layer-2/",
        },
        {
          title: "What are ZK-Rollups? (Binance Academy)",
          type: "text",
          link: "https://academy.binance.com/en/articles/what-are-zk-rollups",
        },
      ],
      paidResources: [
        {
          title: "Blockchain Scalability (Advanced)",
          link: "https.com/topics/blockchain-scalability",
        },
      ],
      projects: [
        {
          title: "Bridge to a Layer 2",
          desc: "Use a bridge to move test Ether from a testnet (e.g., Sepolia) to a Layer 2 testnet (e.g., Optimism Goerli).",
        },
      ],
      organizations: [
        { name: "Optimism", desc: "A leading Layer 2 Optimistic Rollup" },
        { name: "Polygon", desc: "A platform of scaling solutions (Sidechains, ZK)" },
        { name: "Arbitrum", desc: "A leading Layer 2 Optimistic Rollup" },
      ],
    },

    // 1️⃣0️⃣ Smart Contract Security
    {
      id: "security",
      title: "Smart Contract Security",
      route: "/domains/blockchain/security",
      summary:
        "Learn to write secure, immutable code. Understand common attacks like reentrancy, integer overflows, and how to prevent them. Learn about auditing tools and best practices.",
      freeResources: [
        {
          title: "Solidity Security Best Practices (ConsenSys)",
          type: "text",
          link: "https://consensys.github.io/smart-contract-best-practices/",
        },
        {
          title: "Ethernaut (Security 'Capture the Flag' game)",
          type: "course",
          link: "https://ethernaut.openzeppelin.com/",
        },
      ],
      paidResources: [
        {
          title: "Smart Contract Security & Auditing (Udemy)",
          link: "https://www.udemy.com/course/blockchain-smart-contract-security-vulnerabilities/",
        },
      ],
      projects: [
        {
          title: "Beat the Ethernaut",
          desc: "Try to complete the first 3 levels of the Ethernaut wargame.",
        },
      ],
      organizations: [
        { name: "ConsenSys", desc: "A major blockchain software technology company" },
        { name: "Trail of Bits", desc: "A leading blockchain security and auditing firm" },
      ],
    },
  ],
};