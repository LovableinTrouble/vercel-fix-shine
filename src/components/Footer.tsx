import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import xLogo from "@/assets/x-logo.webp";

const DISCORD = "https://discord.gg/kbx46Cyc";

const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.72 56.6.54 80.21h.02a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.31 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.04 20.87 9.53 43.46 9.53 64.08 0 .87.71 1.76 1.39 2.66 2.04a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.3A105.25 105.25 0 0 0 126.6 80.2c2.65-27.33-4.53-51.06-18.9-72.13ZM42.45 65.69c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Zm42.24 0c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Z"/>
  </svg>
);

const footerLinks = {
  product: [
    { label: "Home", to: "/" },
    { label: "Cheats", to: "/cheats" },
    { label: "Status", to: "/status" },
    { label: "Credits", to: "/credits" },
  ],
  legal: [
    { label: "Terms of Service", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ],
  community: [
    { label: "Discord Server", href: DISCORD },
  ],
};

const Footer = () => (
  <footer className="relative mt-32">
    {/* Top gradient line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
      {/* Main footer grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 shrink-0 rounded-full overflow-hidden"
            >
              <img src={xLogo} alt="X-Network logo" className="w-full h-full object-cover" />
            </motion.div>
            <span className="font-display text-sm font-bold text-foreground">X-NETWORK</span>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
            Free cheats for school platforms. No downloads, no accounts — just open and go.
          </p>
        </div>

        {/* Product links */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Product</h4>
          <ul className="space-y-3">
            {footerLinks.product.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal links */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Legal</h4>
          <ul className="space-y-3">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Community</h4>
          <ul className="space-y-3">
            {footerLinks.community.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <DiscordIcon />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Discord button */}
          <a
            href={DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(88,101,242,0.35)] hover:opacity-90"
            style={{ background: "#5865f2", color: "white" }}
          >
            <DiscordIcon />
            Join Server
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-glass-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} X-NETWORK. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Not affiliated with Kahoot, Blooket, Quizizz, IXL, or Wayground.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
