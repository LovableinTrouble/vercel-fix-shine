import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Heart, Code, Globe, Users, Crown, Wrench, Star, Github, ExternalLink, Sparkles } from "lucide-react";

const DISCORD = "https://discord.gg/kbx46Cyc";

const team = [
  { name: "landsedge", role: "Owner", badge: "owner", desc: "Project founder and lead developer. Drives the vision and direction of X-NETWORK.", color: "#fee75c" },
  { name: "xullys", role: "Founder", badge: "founder", desc: "Co-founder and strategist. Handles community growth and partnerships.", color: "#a855f7" },
  { name: "lil_skittle", role: "Developer", badge: "dev", desc: "Core cheat development. Builds and maintains key exploit tools.", color: "#5865f2" },
  { name: "redhorse26", role: "Developer", badge: "dev", desc: "Backend and infrastructure. Keeps everything running smoothly.", color: "#ed4245" },
  { name: "cathead132", role: "Developer", badge: "dev", desc: "Feature development. Always shipping new capabilities.", color: "#57f287" },
  { name: "dannydan", role: "Contributor", badge: "contributor", desc: "Community contributions. Bug reports, testing, and improvements.", color: "#eb459e" },
];

const badgeConfig: Record<string, { bg: string; text: string; border: string; icon: typeof Crown }> = {
  owner: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20", icon: Crown },
  founder: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", icon: Star },
  dev: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", icon: Wrench },
  contributor: { bg: "bg-secondary/60", text: "text-muted-foreground", border: "border-glass-border", icon: Heart },
};

const Credits = () => (
  <PageWrapper>
    <section className="max-w-5xl mx-auto px-6 py-24 relative z-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
          <Users className="w-3 h-3 text-primary" />
          <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Our Team</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
          The People Behind
          <br />
          <span className="gradient-text">X-NETWORK</span>
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-lg">
          Meet the developers and contributors who make it all possible.
        </p>
      </motion.div>

      {/* Leadership row */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="grid md:grid-cols-2 gap-4 mb-4"
      >
        {team.slice(0, 2).map((member) => {
          const badge = badgeConfig[member.badge];
          const BadgeIcon = badge.icon;
          return (
            <motion.div
              key={member.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="glass-card-hover p-8 group relative overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-20" style={{ background: member.color }} />
              
              <div className="relative z-10 flex items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{ background: member.color, color: member.color === "#fee75c" ? "#000" : "#fff" }}
                >
                  {member.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-lg font-bold text-foreground">{member.name}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${badge.bg} ${badge.text} border ${badge.border} flex items-center gap-1`}>
                      <BadgeIcon className="w-2.5 h-2.5" />
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dev & contributor grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
      >
        {team.slice(2).map((member) => {
          const badge = badgeConfig[member.badge];
          const BadgeIcon = badge.icon;
          return (
            <motion.div
              key={member.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="glass-card-hover p-6 group text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                style={{ background: member.color, color: member.color === "#fee75c" ? "#000" : "#fff" }}
              >
                {member.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-display text-sm font-bold text-foreground">{member.name}</span>
              </div>
              <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${badge.bg} ${badge.text} border ${badge.border} mb-3`}>
                <BadgeIcon className="w-2.5 h-2.5" />
                {member.role}
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">{member.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Acknowledgements section */}
      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {/* Website credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-sm font-bold text-foreground mb-4 flex items-center gap-3 uppercase tracking-wider">
            <Globe className="w-4 h-4 text-primary" />
            Website
          </h2>
          <div className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Code className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-display text-sm font-bold text-foreground">xullys / landsedge</span>
                <p className="text-xs text-muted-foreground">Website design &amp; development</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built from the ground up for the X-NETWORK community. Designed to be fast, clean, and easy to use.
            </p>
          </div>
        </motion.div>

        {/* Special thanks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-sm font-bold text-foreground mb-4 flex items-center gap-3 uppercase tracking-wider">
            <Heart className="w-4 h-4 text-primary" />
            Special Thanks
          </h2>
          <div className="glass-card p-6 h-[calc(100%-2rem)]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thanks to our entire Discord community for bug reports, feature suggestions, and spreading the word.
              X-NETWORK wouldn't exist without you.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary font-semibold">1,024+ community members</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Discord CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden glass-card p-8 md:p-10 border-[#5865f2]/20">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#5865f2]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(88,101,242,0.15)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#818cf8">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-display text-xl font-bold text-foreground mb-1">Want to contribute?</p>
              <p className="text-sm text-muted-foreground">Join the Discord to get involved with development, report bugs, or suggest new features.</p>
            </div>
            <a
              href={DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:-translate-y-0.5 flex-shrink-0"
              style={{ background: "#5865f2", color: "white" }}
            >
              Join Discord
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3 h-3 text-primary fill-primary" /> by the X-NETWORK team
        </p>
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Credits;