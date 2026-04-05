import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, ArrowRight, ChevronRight, Activity, Clock, Gift, Bot, Brain, Gamepad2, Globe, Eye, Lock, Terminal, Cpu, Download, Crosshair, Code, Layers, Sparkles, RefreshCw, Monitor } from "lucide-react";
import { cheats } from "@/data/cheats";
import heroBg from "@/assets/hero-bg.jpg";
import securityVisual from "@/assets/security-visual.jpg";
import speedVisual from "@/assets/speed-visual.jpg";
import featureBg from "@/assets/feature-bg.jpg";

const DISCORD = "https://discord.gg/kbx46Cyc";

const DiscordIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.72 56.6.54 80.21h.02a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.31 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.04 20.87 9.53 43.46 9.53 64.08 0 .87.71 1.76 1.39 2.66 2.04a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.3A105.25 105.25 0 0 0 126.6 80.2c2.65-27.33-4.53-51.06-18.9-72.13ZM42.45 65.69c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Zm42.24 0c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Z"/>
  </svg>
);

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

// Discord-style reviews with realistic usernames and discriminators
const reviewsRow1 = [
  { name: "xqc_fan42", tag: "#7291", avatar: "🎮", platform: "Blooket", text: "X-GUI is insane. Got every blook unlocked in 5 minutes. Completely free too.", time: "Today at 2:14 AM" },
  { name: "sk8erboy_", tag: "#0420", avatar: "🛹", platform: "Kahoot", text: "K-Bot flooded a game with 200 bots in seconds. Teacher had no idea what happened lmao", time: "Today at 3:02 AM" },
  { name: "nocturnal.dev", tag: "#1337", avatar: "🌙", platform: "Quizizz", text: "QuizWare got me 100% on every quiz. The stealth mode is a lifesaver fr fr", time: "Yesterday at 11:45 PM" },
  { name: "mathphobic_", tag: "#6969", avatar: "📐", platform: "IXL", text: "IXploit saved me hours of grinding. It just solves everything automatically. goated tool", time: "Yesterday at 9:30 PM" },
  { name: "tokenfarmer", tag: "#0001", avatar: "🌾", platform: "Blooket", text: "The token farm on X-Bot runs overnight. Woke up to 50k tokens. absolutely busted", time: "Today at 6:18 AM" },
  { name: "glitchh.exe", tag: "#4444", avatar: "⚡", platform: "Blooket", text: "been using x-gui since v3, every update just gets crazier. the devs are insane", time: "Today at 1:55 AM" },
];

const reviewsRow2 = [
  { name: "underground_usr", tag: "#9182", avatar: "🕳️", platform: "Wayground", text: "Underground let me become host mid-game. Absolutely wild tool no cap", time: "Today at 4:20 AM" },
  { name: "void.walker", tag: "#8080", avatar: "🖤", platform: "Blooket", text: "Been using X-GUI since v3. Every update just gets better and better. actual W devs", time: "Yesterday at 7:12 PM" },
  { name: "kahoot_destroyer", tag: "#5555", avatar: "💀", platform: "Kahoot", text: "The auto answer on K-Bot is unreal. Gets every question right instantly. teachers malding", time: "Today at 12:33 AM" },
  { name: "silent.coder", tag: "#2048", avatar: "🤫", platform: "Quizizz", text: "Finally a free Quizizz cheat that actually works. No sketchy downloads or anything", time: "Yesterday at 10:08 PM" },
  { name: "ixl_escapee", tag: "#3141", avatar: "🏃", platform: "IXL", text: "Multi-subject support on IXploit is clutch. Works on math, ELA, everything. saved my grades", time: "Today at 5:47 AM" },
  { name: "pxlated", tag: "#7777", avatar: "🎯", platform: "Blooket", text: "x-gui v7 is the best update yet. the new UI is clean af and token gen is faster", time: "Yesterday at 8:22 PM" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageWrapper>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center">
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-20">
          <img src={heroBg} alt="" className="w-full h-[120%] object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="max-w-5xl mx-auto px-6 w-full relative z-10 py-32 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8 flex flex-col items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/60 backdrop-blur-xl border border-glass-border">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-semibold text-muted-foreground tracking-wide">All systems operational</span>
                <div className="w-px h-3 bg-glass-border" />
                <span className="text-xs font-mono text-primary">v2.0</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] leading-[0.9] mb-6">
                <span className="gradient-text">X-NETWORK</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-medium leading-snug">Dominate every school game.</p>
              <p className="text-lg md:text-xl text-muted-foreground mt-2">No downloads. No accounts. Free forever.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Shield, text: "Undetected" },
                { icon: Zap, text: "Instant" },
                { icon: Gift, text: "100% Free" },
                { icon: Code, text: "Open Source" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/40 border border-glass-border/50 text-xs text-muted-foreground">
                  <Icon className="w-3 h-3 text-primary" />
                  {text}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/cheats" className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_hsl(265_85%_60%/0.4)] hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-neon to-primary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                <span className="relative z-10 flex items-center gap-3">
                  Browse Cheats
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:-translate-y-0.5" style={{ background: "#5865f2", color: "white" }}>
                <DiscordIcon size={16} />
                Join Discord
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-10 pt-4">
              {[
                { value: "1,024+", label: "Users" },
                { value: "99.5%", label: "Uptime" },
                { value: "6", label: "Tools" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-display font-bold text-foreground">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-6 h-10 rounded-full border-2 border-glass-border flex items-start justify-center p-2">
            <motion.div className="w-1 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== DISCORD-STYLE REVIEWS MARQUEE ===== */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <DiscordIcon size={14} />
              <span className="text-[11px] font-semibold text-primary uppercase tracking-widest">Community Reviews</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">What our users are saying</h3>
          </motion.div>

          {/* Row 1 — scrolling left */}
          <div className="relative mb-4">
            <div className="flex animate-[marquee_60s_linear_infinite] w-max gap-4">
              {[...reviewsRow1, ...reviewsRow1].map((r, i) => (
                <div key={i} className="flex-shrink-0 w-[380px] rounded-2xl border border-glass-border bg-card/40 backdrop-blur-xl p-5 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#5865f2]/20 border border-[#5865f2]/30 flex items-center justify-center text-sm">
                      {r.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-foreground">{r.name}</span>
                        <span className="text-[10px] text-muted-foreground/60 font-mono">{r.tag}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-muted-foreground/50">{r.time}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">{r.platform}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-glass-border/30">
                    <button className="text-[10px] text-muted-foreground/40 flex items-center gap-1 hover:text-primary transition-colors">
                      👍 {Math.floor(Math.random() * 20) + 3}
                    </button>
                    <button className="text-[10px] text-muted-foreground/40 flex items-center gap-1 hover:text-primary transition-colors">
                      🔥 {Math.floor(Math.random() * 15) + 1}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>

          {/* Row 2 — scrolling right */}
          <div className="relative">
            <div className="flex animate-[marquee-reverse_65s_linear_infinite] w-max gap-4">
              {[...reviewsRow2, ...reviewsRow2].map((r, i) => (
                <div key={i} className="flex-shrink-0 w-[380px] rounded-2xl border border-glass-border bg-card/40 backdrop-blur-xl p-5 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#5865f2]/20 border border-[#5865f2]/30 flex items-center justify-center text-sm">
                      {r.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-foreground">{r.name}</span>
                        <span className="text-[10px] text-muted-foreground/60 font-mono">{r.tag}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-muted-foreground/50">{r.time}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">{r.platform}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-glass-border/30">
                    <button className="text-[10px] text-muted-foreground/40 flex items-center gap-1 hover:text-primary transition-colors">
                      👍 {Math.floor(Math.random() * 20) + 3}
                    </button>
                    <button className="text-[10px] text-muted-foreground/40 flex items-center gap-1 hover:text-primary transition-colors">
                      🔥 {Math.floor(Math.random() * 15) + 1}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* ===== SUPPORTED PLATFORMS ===== */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest">Supported Platforms</span>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Kahoot", "Blooket", "Quizizz", "IXL", "Wayground"].map((name, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                <span className="text-lg font-display font-bold text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors duration-500">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / STATS ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">About X-NETWORK</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Built for Speed.<br />Designed for <span className="gradient-text">Stealth</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                X-NETWORK is a free, open-source suite of tools for school platforms. Everything runs in your browser — no installs, no accounts, no tracking. We build fast, ship often, and keep every tool undetected.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Eye, title: "Stealth by Default", desc: "Every tool is engineered to avoid detection. We monitor platform updates and push patches proactively." },
                  { icon: Cpu, title: "Browser-Native", desc: "No downloads, no extensions required. Paste a script, and you're live in seconds." },
                  { icon: Lock, title: "Privacy First", desc: "No accounts, no tracking, no data collection. We don't even have a database." },
                  { icon: RefreshCw, title: "Constantly Updated", desc: "We push updates regularly. When platforms change, we adapt within hours." },
                ].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "6", label: "Active Tools", icon: Layers, color: "text-primary" },
                  { value: "<18ms", label: "Response Time", icon: Zap, color: "text-warning" },
                  { value: "5+", label: "Platforms", icon: Globe, color: "text-success" },
                  { value: "24/7", label: "Availability", icon: Activity, color: "text-primary" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="rounded-2xl border border-glass-border bg-card/40 backdrop-blur-xl p-6 hover:border-primary/20 transition-all duration-500">
                    <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
                    <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE SHOWCASE ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Why choose us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Built Different</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">We don't cut corners. Every tool is built from scratch with performance and stealth in mind.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 group">
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">Fully Undetected</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Our cheats are built to stay under the radar. We keep up with platform updates and push patches before detection.</p>
                    <div className="flex flex-wrap gap-2">
                      {["Anti-Detection", "Auto-Update", "Stealth Mode"].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-primary/8 text-[10px] text-primary font-semibold border border-primary/15">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={securityVisual} alt="Security" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" loading="lazy" width={800} height={800} />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/80" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <img src={speedVisual} alt="Speed" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" loading="lazy" width={800} height={800} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-warning/15 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-warning" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">No delays, no lag. Sub-18ms response on all tools.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20 p-8">
                <div className="w-14 h-14 rounded-2xl bg-success/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Gift className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Always Free</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">No paywalls, no subscriptions, no premium tiers. Just use it.</p>
                <div className="text-3xl font-display font-bold text-success">$0</div>
                <div className="text-xs text-muted-foreground">forever</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-2 group">
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <img src={featureBg} alt="Multi-platform" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" loading="lazy" width={1200} height={600} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
                <div className="p-8 -mt-16 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Multi-Platform</h3>
                      <p className="text-sm text-muted-foreground">One network, five platforms, six tools</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Kahoot", "Blooket", "Quizizz", "IXL", "Wayground"].map((p) => (
                      <span key={p} className="px-4 py-2 rounded-xl bg-secondary/60 text-xs text-secondary-foreground font-medium border border-glass-border/50">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Capabilities</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Everything You Need</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Bot, title: "Bot Flooding", desc: "Flood any game with hundreds of bots in seconds.", iconBg: "bg-primary/15", iconColor: "text-primary" },
              { icon: Brain, title: "Auto Answer", desc: "AI-powered answer engine for every major platform.", iconBg: "bg-warning/15", iconColor: "text-warning" },
              { icon: Download, title: "Token Farming", desc: "Passive token generation that runs while you sleep.", iconBg: "bg-success/15", iconColor: "text-success" },
              { icon: Monitor, title: "Stealth Mode", desc: "Invisible to admins and platform detection systems.", iconBg: "bg-primary/15", iconColor: "text-primary" },
              { icon: Sparkles, title: "Auto Updates", desc: "Scripts auto-patch when platforms push changes.", iconBg: "bg-warning/15", iconColor: "text-warning" },
              { icon: Lock, title: "No Tracking", desc: "Zero data collection. No accounts needed.", iconBg: "bg-success/15", iconColor: "text-success" },
              { icon: Gamepad2, title: "Game Scripts", desc: "Pre-built scripts for every game mode.", iconBg: "bg-primary/15", iconColor: "text-primary" },
              { icon: Globe, title: "Cross-Platform", desc: "Works on Chrome, Firefox, Edge, and more.", iconBg: "bg-warning/15", iconColor: "text-warning" },
            ].map((feat, i) => (
              <motion.div key={feat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group">
                <div className="relative overflow-hidden rounded-2xl border border-glass-border p-8 h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                  <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <feat.icon className={`w-5 h-5 ${feat.iconColor}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHEATS SHOWCASE ===== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Our Arsenal</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Available Cheats</h2>
              <p className="text-muted-foreground mt-3 max-w-md">Browse our complete suite of tools. All free, all undetected.</p>
            </div>
            <Link to="/cheats" className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all duration-300">
              View All Cheats
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cheats.map((cheat, i) => {
              const isOnline = cheat.status === "operational";
              return (
                <motion.div key={cheat.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                  <Link to={`/cheats/${cheat.slug}`} className="group block relative overflow-hidden rounded-2xl border border-glass-border bg-card/40 backdrop-blur-xl p-6 h-full transition-all duration-500 hover:border-primary/25 hover:bg-card/60 hover:shadow-[0_10px_50px_rgba(0,0,0,0.4),0_0_30px_hsl(265_85%_60%/0.06)]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={cheat.logoSrc} alt={`${cheat.game} logo`} className="w-10 h-10 rounded-lg object-cover shadow-md" />
                        <div>
                          <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest block mb-1">{cheat.game}</span>
                          <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">{cheat.tool}</h3>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isOnline ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-success" : "bg-warning animate-pulse"}`} />
                        {isOnline ? "Online" : "Maint."}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cheat.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cheat.features.slice(0, 3).map((f) => (
                        <span key={f} className="px-2.5 py-1 rounded-lg bg-secondary/80 text-[10px] text-secondary-foreground font-medium border border-glass-border/50">{f}</span>
                      ))}
                      {cheat.features.length > 3 && (
                        <span className="px-2.5 py-1 rounded-lg bg-primary/8 text-[10px] text-primary font-medium">+{cheat.features.length - 3} more</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-glass-border/50">
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span className="font-mono">v{cheat.version}</span>
                        <span className="w-1 h-1 rounded-full bg-glass-border" />
                        <span>{cheat.platform}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        Install
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Get started</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Three Steps. That's It.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Pick a Cheat", desc: "Browse our arsenal and find the tool for your platform.", icon: Crosshair },
              { step: "02", title: "Copy the Script", desc: "One-click copy. No downloads, no accounts, no signup.", icon: Terminal },
              { step: "03", title: "Paste & Run", desc: "Open your browser console, paste the code, and you're in.", icon: Zap },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="relative text-center group">
                {i < 2 && <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-glass-border to-transparent" />}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_hsl(265_85%_60%/0.15)] transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-mono text-primary/40 mb-2">{item.step}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative overflow-hidden rounded-3xl border border-glass-border bg-gradient-to-br from-card/80 via-card/60 to-primary/5 p-12 md:p-16 text-center">
            <div className="absolute inset-x-0 -top-8 z-0 flex justify-center pointer-events-none">
              <div className="h-16 w-[60%] rounded-[999px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-2xl" />
            </div>

            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.4, delay: 0.2 }} className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
              <Users className="w-9 h-9 text-primary" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Join the Community</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">Over 1,000 people are using X-NETWORK. Get help, share scripts, and stay updated.</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(88,101,242,0.5)] hover:-translate-y-1" style={{ background: "#5865f2", color: "white" }}>
                <DiscordIcon size={18} />
                Join Discord Server
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/cheats" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-500 hover:shadow-[0_0_40px_hsl(265_85%_60%/0.4)] hover:-translate-y-1">
                Browse All Cheats
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-success" /> Undetected</span>
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-warning" /> No Downloads</span>
              <span className="flex items-center gap-2"><Gift className="w-3.5 h-3.5 text-primary" /> 100% Free</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default Index;
