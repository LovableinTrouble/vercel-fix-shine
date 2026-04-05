import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Rocket, Calendar, ArrowRight, Sparkles, Clock, ExternalLink, ChevronRight } from "lucide-react";
import { cheats } from "@/data/cheats";

const DISCORD = "https://discord.gg/kbx46Cyc";

const DiscordIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.72 56.6.54 80.21h.02a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.31 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.04 20.87 9.53 43.46 9.53 64.08 0 .87.71 1.76 1.39 2.66 2.04a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.3A105.25 105.25 0 0 0 126.6 80.2c2.65-27.33-4.53-51.06-18.9-72.13ZM42.45 65.69c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Zm42.24 0c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Z"/>
  </svg>
);

// Per-cheat update logs
const cheatUpdates: Record<string, { date: string; type: string; text: string }[]> = {
  "x-gui": [
    { date: "Apr 2, 2026", type: "update", text: "v7.0 — Full UI overhaul, new token generator" },
    { date: "Mar 18, 2026", type: "fix", text: "Fixed auto farm disconnection on long sessions" },
    { date: "Feb 14, 2026", type: "update", text: "Added Blook Unlocker and game script presets" },
  ],
  "x-bot": [
    { date: "Mar 5, 2026", type: "update", text: "Added silent mode for background token farming" },
    { date: "Feb 1, 2026", type: "release", text: "X-Bot v1.0 launched" },
  ],
  "k-bot": [
    { date: "Apr 2, 2026", type: "release", text: "K-Bot officially launched with bot flooding & auto answer" },
    { date: "Feb 14, 2026", type: "update", text: "Beta released with basic bot flooding support" },
  ],
  "quizware": [
    { date: "Mar 18, 2026", type: "update", text: "Improved answer accuracy, added stealth mode toggle" },
    { date: "Jan 20, 2026", type: "release", text: "QuizWare v1.0 launched" },
  ],
  "underground": [
    { date: "Apr 2, 2026", type: "maintenance", text: "In maintenance — Wayground patched some endpoints" },
    { date: "Mar 5, 2026", type: "release", text: "Underground launched — kick, crash, host swap" },
  ],
  "ixploit": [
    { date: "Mar 18, 2026", type: "fix", text: "Fixed script injection bug on math problems" },
    { date: "Feb 14, 2026", type: "fix", text: "Score control accuracy improved across all subjects" },
    { date: "Jan 10, 2026", type: "release", text: "IXploit v0.1 released" },
  ],
};

const upcomingChanges: { tool: string; text: string; eta: string }[] = [
  { tool: "X-GUI", text: "Auto-update system for scripts", eta: "Q2 2026" },
  { tool: "QuizWare", text: "Support for Quizizz homework mode", eta: "Q2 2026" },
  { tool: "K-Bot", text: "Multi-game session support", eta: "Q3 2026" },
  { tool: "Underground", text: "Full re-write after Wayground patches", eta: "Q2 2026" },
  { tool: "IXPLOIT", text: "Multi-subject auto-detection", eta: "Q3 2026" },
];

const typeBadge: Record<string, { label: string; classes: string }> = {
  update: { label: "Update", classes: "bg-primary/10 text-primary border-primary/20" },
  release: { label: "New", classes: "bg-primary/15 text-primary border-primary/25" },
  fix: { label: "Fix", classes: "bg-muted text-muted-foreground border-border" },
  maintenance: { label: "Maintenance", classes: "bg-muted text-muted-foreground border-border" },
};

const Updates = () => (
  <PageWrapper>
    <section className="max-w-5xl mx-auto px-6 py-24 relative z-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
          <Rocket className="w-3 h-3 text-primary" />
          <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Changelog</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
          Cheat <span className="gradient-text">Updates</span>
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-lg">
          Latest patches, releases, and what's coming next — organized by tool.
        </p>
      </motion.div>

      {/* Per-cheat update cards */}
      <div className="space-y-6 mb-20">
        {cheats.map((cheat, i) => {
          const updates = cheatUpdates[cheat.slug] || [];
          return (
            <motion.div
              key={cheat.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="glass-card-hover p-6"
            >
              {/* Cheat header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img src={cheat.logoSrc} alt={cheat.game} className="w-9 h-9 rounded-lg object-cover" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-base font-bold text-foreground">{cheat.tool}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">v{cheat.version}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{cheat.game}</span>
                  </div>
                </div>
                <Link
                  to={`/cheats/${cheat.slug}`}
                  className="text-xs text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300"
                >
                  View
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Updates list */}
              {updates.length > 0 ? (
                <ul className="space-y-2.5">
                  {updates.map((u, j) => {
                    const badge = typeBadge[u.type];
                    return (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <span className="text-[10px] text-muted-foreground font-mono w-24 flex-shrink-0 pt-0.5">{u.date}</span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border flex-shrink-0 mt-0.5 ${badge.classes}`}>
                          {badge.label}
                        </span>
                        <span className="text-muted-foreground">{u.text}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-xs text-muted-foreground">No updates yet.</p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Upcoming Changes */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-sm font-bold text-foreground mb-6 flex items-center gap-3 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-primary" />
          Coming Soon
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {upcomingChanges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{item.tool}</span>
                  <span className="text-[10px] text-muted-foreground/70">ETA {item.eta}</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Discord CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden glass-card p-8 md:p-10 border-[#5865f2]/20">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#5865f2]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(88,101,242,0.15)" }}>
              <DiscordIcon size={24} />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg font-bold text-foreground mb-1">Stay in the loop</p>
              <p className="text-sm text-muted-foreground">Get notified about updates, patches, and new tool releases in our Discord.</p>
            </div>
            <a
              href={DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:-translate-y-0.5 flex-shrink-0"
              style={{ background: "#5865f2", color: "white" }}
            >
              Join Discord
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Updates;
