import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { cheats } from "@/data/cheats";
import { Download, ChevronRight, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Cheats = () => {
  const [search, setSearch] = useState("");

  const filtered = cheats.filter((c) => {
    return c.tool.toLowerCase().includes(search.toLowerCase()) || c.game.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Download className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Arsenal</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
            Our <span className="gradient-text">Cheats</span>
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg">
            Our complete suite of tools, built for speed and stealth. All free.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cheats..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card/60 border border-glass-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 transition-colors duration-300"
            />
          </div>
        </motion.div>

        {/* Cheats grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="grid md:grid-cols-2 gap-5"
        >
          {filtered.map((c) => {
            const isOnline = c.status === "operational";
            const logoSrc = c.logoSrc;
            const Icon = c.icon;
            return (
              <motion.div
                key={c.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  to={`/cheats/${c.slug}`}
                  className="group block relative overflow-hidden h-full flex flex-col rounded-2xl border border-glass-border bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/25 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_80px_hsl(265_85%_60%/0.08)] hover:-translate-y-1"
                >
                  {/* Top accent line */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Header row: Logo + info + status */}
                    <div className="flex items-start gap-4 mb-4">
                      <img src={c.logoSrc} alt={`${c.game} logo`} className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-lg" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{c.game}</span>
                          <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider ${
                            isOnline ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-success" : "bg-warning animate-pulse"}`} />
                            {isOnline ? "Online" : "Maintenance"}
                          </div>
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                          {c.tool}
                          <Icon className="w-4 h-4 text-muted-foreground/50" />
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5 mb-auto">
                      {c.features.slice(0, 4).map((f) => (
                        <span key={f} className="px-2.5 py-1 rounded-md bg-secondary/60 text-[10px] text-secondary-foreground font-medium border border-glass-border/40">
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Bottom meta */}
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-glass-border/30">
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span className="font-mono bg-secondary/50 px-2 py-0.5 rounded">v{c.version}</span>
                        <span>{c.platform}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                        View
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/0 group-hover:bg-primary/5 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No cheats found matching your search.</p>
          </div>
        )}
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default Cheats;
