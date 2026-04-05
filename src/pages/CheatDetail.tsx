import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { getCheatBySlug } from "@/data/cheats";
import { ArrowLeft, Download, CheckCircle, AlertTriangle, Monitor, Tag, List, Cpu, Copy, ExternalLink, Shield, Clock } from "lucide-react";
import { useState } from "react";

const CheatDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cheat = slug ? getCheatBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);

  if (!cheat) return <Navigate to="/cheats" replace />;

  const logoSrc = cheat.logoSrc;
  const isOperational = cheat.status === "operational";

  return (
    <PageWrapper>
      <section className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        {/* Back button */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to="/cheats"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Arsenal
          </Link>
        </motion.div>

        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card p-8 md:p-10 mb-8 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.3 }}
              >
                <img src={logoSrc} alt={`${cheat.game} logo`} className="w-20 h-20 rounded-2xl object-cover shadow-lg" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs font-mono text-primary/60 uppercase tracking-widest">{cheat.game}</span>
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    isOperational ? "bg-success/10 text-success border border-success/20" : "bg-warning/10 text-warning border border-warning/20"
                  }`}>
                    {isOperational ? <CheckCircle className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                    {cheat.status}
                  </div>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">{cheat.tool}</h1>
                <p className="text-muted-foreground leading-relaxed">{cheat.longDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {[
            { label: "Version", value: cheat.version, icon: Tag },
            { label: "Platform", value: cheat.platform, icon: Monitor },
            { label: "Features", value: `${cheat.features.length}`, icon: Cpu },
            { label: "Status", value: isOperational ? "Online" : "Offline", icon: Shield },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="glass-card px-5 py-4 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors" />
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</span>
              </div>
              <span className="text-sm font-bold text-foreground font-display">{item.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 md:p-8 mb-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <List className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-display text-lg font-bold text-foreground">Features</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cheat.features.map((f) => (
              <div key={f} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10">
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 md:p-8 mb-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
              <Monitor className="w-4 h-4 text-warning" />
            </div>
            <h2 className="font-display text-lg font-bold text-foreground">Requirements</h2>
          </div>
          <div className="space-y-3">
            {cheat.requirements.map((r, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-lg bg-secondary/80 border border-glass-border flex items-center justify-center text-[10px] font-bold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                  {i + 1}
                </div>
                <span className="text-sm text-muted-foreground">{r}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Installation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 md:p-8 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
              <Download className="w-4 h-4 text-success" />
            </div>
            <h2 className="font-display text-lg font-bold text-foreground">Installation Guide</h2>
          </div>
          <div className="space-y-4">
            {cheat.instructions.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-start gap-5 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:shadow-[0_0_15px_hsl(265_85%_60%/0.15)] transition-all duration-500">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <span className="text-sm text-foreground leading-relaxed">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-center"
        >
          {isOperational ? (
            <a
              href={cheat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-sm transition-all duration-500 bg-primary text-primary-foreground hover:shadow-[0_0_50px_hsl(265_85%_60%/0.4)] hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
              {cheat.buttonLabel}
            </a>
          ) : (
            <>
              <button
                disabled
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-sm bg-secondary text-muted-foreground cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                {cheat.tool} — Under Maintenance
              </button>
              <p className="text-xs text-muted-foreground mt-4">This tool is currently under maintenance. Check back soon.</p>
            </>
          )}
        </motion.div>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default CheatDetail;
