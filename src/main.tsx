
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add styles for smooth scrolling
const style = document.createElement('style');
style.innerHTML = `
  html {
    scroll-behavior: smooth;
  }
  
  .active-section {
    transition: opacity 0.5s ease-in-out;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
