# Intellex: P2P Decentralized Skill Sharing Platform

<div align="center">
  <hr>
  <strong>🏆 Most Innovative use of Verbwire API for DeltaHacks X! 🏆</strong>
  <hr>
</div>

<div align="center">
    <img src="https://github.com/ahmedkhaleel2004/intellex/assets/111161052/89453cec-48d1-42f0-97e4-f65299d333b4" alt="Intellex home page" width="800"/>
</div>

## Introduction
Intellex allows users to hop on a call, and teach one another a specific skill they are interested in - like how we use youtube tutorials, but with real people and interactivity. Top weekly learners earn NFT's! 

The idea was to discover how blockchain technology can help us innovate and move past centralized systems, which is when we realized that education in its entirety is mostly a centralized system with governments crafting the curricula. Intellex is a step towards education decentralization. 

## Key Features

- **User Matching System**: Automatically matches users with others who have great experience in skills the user seeks to learn, and vice versa. This fosters a collaborative learning environment where knowledge exchange is highly encouraged.
- **Interactive Learning Sessions**:
  - **1 on 1 Video Calls**: Enables users to initiate private video calls with their matched peers for an in-depth learning experience, allowing for direct communication, mentoring, and guidance.
  - **Virtual Whiteboard and Screen Sharing**: Enhances the learning experience by allowing users to visually explain concepts, share live demonstrations, and collaborate on problems in real-time, making complex topics easier to understand and engage with.
- **Leaderboard and Rewards**: Introduces a competitive edge with a weekly leaderboard that highlights the top learners. The highest achievers are awarded a gold badge NFT, serving as both a prize and a motivational tool. This not only incentivizes continuous learning and participation but also adds a tangible recognition of users' efforts and achievements.
- **Technology Stack**: Built with Next.js, Firebase, Verbwire, TypeScript, React, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Next Steps
Currently, the build is failing due to issues with the video call feature which uses `100ms`.

## Local Development
- **Prerequisites**: Ensure you have Node.js and npm installed.
- **Setup**:
  1. Clone the repository: `https://github.com/ahmedkhaleel2004/intellex.git`
  2. Change directory: `cd intellex`
  3. Install dependencies: `npm i`
  4. Create a `.env.local` in the root directory with your Firebase variables and Verbwire API key.
  5. Start the local development server: `npm run dev`
