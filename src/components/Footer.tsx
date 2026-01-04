"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-ws-accent/10 bg-ws-darker">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-icon.png"
              alt="Wild Skies"
              width={40}
              height={40}
            />
            <div>
              <p className="text-ws-text font-medium">Wild Skies</p>
              <p className="text-ws-muted text-sm">A Hytale Adventure Mod</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://discord.gg/m2eW9BJs9h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ws-muted hover:text-ws-accent transition-colors"
            >
              Discord
            </a>
            <a
              href="/store"
              className="text-ws-muted hover:text-ws-accent transition-colors"
            >
              Store
            </a>
            <a
              href="#"
              className="text-ws-muted hover:text-ws-accent transition-colors"
            >
              Privacy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-ws-muted/60 text-xs">
            &copy; {new Date().getFullYear()} Wild Skies. Not affiliated with Hypixel Studios.
          </p>
        </div>
      </div>
    </footer>
  );
}
