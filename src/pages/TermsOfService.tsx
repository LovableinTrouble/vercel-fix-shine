import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => (
  <PageWrapper>
    <section className="max-w-3xl mx-auto px-6 py-24 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
          <FileText className="w-3 h-3 text-primary" />
          <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Legal</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-muted-foreground">Last updated: April 1, 2026</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-8"
      >
        {[
          {
            title: "1. Acceptance of Terms",
            content: "By accessing or using X-NETWORK's website, tools, scripts, or any related services (collectively, the \"Services\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our Services."
          },
          {
            title: "2. Description of Services",
            content: "X-NETWORK provides free, open-source scripts and tools designed for educational platforms. Our Services are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied."
          },
          {
            title: "3. Use at Your Own Risk",
            content: "You acknowledge that using our tools may violate the terms of service of third-party platforms. X-NETWORK is not responsible for any consequences resulting from the use of our Services, including but not limited to account suspensions, bans, or any other disciplinary actions taken by third-party platforms."
          },
          {
            title: "4. No Warranty",
            content: "The Services are provided without warranty of any kind. We do not guarantee that our tools will be undetected, functional, or available at all times. We make no warranties regarding the accuracy, reliability, or completeness of any information provided through our Services."
          },
          {
            title: "5. Limitation of Liability",
            content: "In no event shall X-NETWORK, its developers, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Services."
          },
          {
            title: "6. User Conduct",
            content: "You agree not to: (a) use our Services for any illegal purpose; (b) attempt to reverse-engineer, decompile, or disassemble our tools beyond what is permitted by open-source licenses; (c) redistribute our tools under a different name or claim ownership; (d) use our Services to harass, abuse, or harm others."
          },
          {
            title: "7. Intellectual Property",
            content: "All tools, scripts, and content provided by X-NETWORK are the intellectual property of their respective creators. Our open-source tools are licensed under their respective licenses. The X-NETWORK brand, logo, and website design remain our property."
          },
          {
            title: "8. Modifications",
            content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of the Services after changes constitutes acceptance of the modified terms."
          },
          {
            title: "9. Termination",
            content: "We reserve the right to terminate or suspend access to our Services at any time, without prior notice, for any reason, including breach of these Terms."
          },
          {
            title: "10. Contact",
            content: "If you have any questions about these Terms of Service, please reach out to us through our Discord server."
          },
        ].map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.03 }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="font-display text-lg font-bold text-foreground mb-3">{section.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default TermsOfService;
