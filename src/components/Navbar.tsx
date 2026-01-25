"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { id: "home", label: "Home" },
  { id: "gameplay", label: "Gameplay" },
  { id: "airships", label: "Airships" },
  { id: "timeline", label: "Timeline" },
];

export default function Navbar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const serverIP = "play.wildskies.net";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyIP = async () => {
    await navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ws-darker/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo, Hamburger, Store */}
          <div className="flex items-center gap-4">
            {/* Mini Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex-shrink-0"
            >
              <Image
                src="/images/logo-icon.png"
                alt="Wild Skies"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-ws-text group-hover:bg-ws-accent transition-colors"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-ws-text group-hover:bg-ws-accent transition-colors"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-ws-text group-hover:bg-ws-accent transition-colors"
              />
            </button>

            {/* Store Link */}
            <a
              href="/store"
              className="text-ws-text hover:text-ws-accent transition-colors text-sm font-medium hidden sm:block"
            >
              Store
            </a>
          </div>

          {/* Right side: Server IP, Discord */}
          <div className="flex items-center gap-4">
            {/* Copyable Server IP */}
            <button
              onClick={copyIP}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ws-card border border-ws-accent/30 hover:border-ws-accent hover:shadow-glow-sm transition-all group"
            >
              <svg
                className="w-4 h-4 text-ws-muted group-hover:text-ws-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-mono text-ws-text group-hover:text-ws-accent transition-colors">
                {copied ? "Copied!" : serverIP}
              </span>
            </button>

            {/* Discord Link */}
            <a
              href="https://discord.gg/m2eW9BJs9h"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-ws-card border border-ws-accent/30 hover:border-ws-accent hover:shadow-glow-sm transition-all"
              aria-label="Join Discord"
            >
              <svg
                className="w-5 h-5 text-ws-text hover:text-ws-accent transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-ws-darker/95 backdrop-blur-md border-t border-ws-accent/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 text-ws-text hover:text-ws-accent hover:bg-ws-card/50 rounded-lg transition-all"
                  >
                    {item.label}
                  </button>
                ))}
                {/* Mobile-only Store link */}
                <a
                  href="/store"
                  className="sm:hidden px-4 py-2 text-ws-text hover:text-ws-accent hover:bg-ws-card/50 rounded-lg transition-all"
                >
                  Store
                </a>
                {/* Mobile-only Server IP */}
                <button
                  onClick={copyIP}
                  className="sm:hidden flex items-center gap-2 px-4 py-2 text-ws-text hover:text-ws-accent hover:bg-ws-card/50 rounded-lg transition-all"
                >
                  <span className="font-mono">{copied ? "Copied!" : serverIP}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
