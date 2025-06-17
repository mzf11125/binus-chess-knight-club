# Binus Chess Club 🏰♟️

![GitHub last commit](https://img.shields.io/github/last-commit/mzf11125/binus-chess-knight-club)
![GitHub contributors](https://img.shields.io/github/contributors/mzf11125/binus-chess-knight-club)
![GitHub repo size](https://img.shields.io/github/repo-size/mzf11125/binus-chess-knight-club)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Official platform for BINUS University's premier chess club - advancing chess skills, hosting tournaments, and building strategic minds.

## 🚀 Features

<div align="center">
  
| Feature | Description |
|---------|-------------|
| **🧠 Player Profiles** | Track ratings, match history and skill progression |
| **🏆 Tournament System** | Swiss-style tournaments with automatic pairing |
| **📊 Leaderboards** | Real-time rankings of club members |
| **📅 Event Calendar** | Never miss a club meeting or competition |
| **📚 Learning Resources** | Chess tutorials, puzzles and strategy guides |

</div>

## 🧩 Project Structure

```bash
binus-chess-knight-club/
│
├── frontend/           # Client-side application
│   ├── public/
│   ├── src/
│   │   ├── assets/      # Images, fonts, etc.
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Application views
│   │   ├── services/    # API services
│   │   └── styles/      # Global styles
│   ├── package.json
│   └── .env.example
│
├── chess-engine/       # Core game logic
│   ├── src/
│   │   ├── board/       # Board representation
│   │   ├── moves/       # Move generation
│   │   ├── ai/          # AI algorithms
│   │   └── utils/       # Chess utilities
│   └── package.json
│
├── docs/               # Documentation
├── .github/            # CI/CD workflows
├── .gitignore
├── LICENSE
└── README.md
```

## ⚙️ Installation Guide

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### Setup Instructions
```bash
# Clone the repository
git clone https://github.com/mzf11125/binus-chess-knight-club.git
cd binus-chess-knight-club

# Install dependencies
cd backend && npm install
cd ../frontend && npm install
cd ../chess-engine && npm install

# Configure environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start development servers
cd backend && npm run dev
cd ../frontend && npm start
```

## 🛠️ Tech Stack

### Core Technologies
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)

### Additional Tools
![Socket.io](https://img.shields.io/badge/Socket.io-010101?logo=socketdotio&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)

## 🤝 Contributing

We welcome contributions from all chess enthusiasts! To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

Please read our [contribution guidelines](CONTRIBUTING.md) for details.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

**Project Maintainer**  
Muhammad Zidan Fatonie 
[![Email](https://img.shields.io/badge/Email-zulfikar.fauzan@binus.ac.id-blue?logo=gmail)](mailto:muhammad.fatonie@binus.ac.id)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/mzidanfatonie/)

## ♟️ Join Us!

Ready to make your move? Join the Binus Chess Knight Club today!

[![Join Club](https://img.shields.io/badge/Join_Club-Apply_Now-blueviolet?style=for-the-badge&logo=chess)]([https://forms.gle/examplelink](https://docs.google.com/forms/d/e/1FAIpQLSedmsFPyJ-sg19VR41Z4FWj1N1VVsYLPoGy49DDdui9AE8gkA/viewform))

<p align="center">
  <img src="https://media.giphy.com/media/l0HlG8vJXW0X5yX4s/giphy.gif" width="300">
  <br>
  <em>"Chess is life in miniature" - Garry Kasparov</em>
</p>
