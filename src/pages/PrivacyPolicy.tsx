import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => (
  <PageWrapper>
    <section className="max-w-3xl mx-auto px-6 py-24 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
          <Shield className="w-3 h-3 text-primary" />
          <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Legal</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
          Privacy <span className="gradient-text">Policy</span>
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
            title: "1. Information We Collect",
            content: "X-NETWORK does not collect personal information. We do not require accounts, registrations, or logins to use our Services. Our website may use basic analytics (such as page views and visitor counts) to improve our Services, but we do not track individual users or collect personally identifiable information."
          },
          {
            title: "2. Cookies",
            content: "Our website may use minimal cookies for basic functionality (such as remembering preferences). We do not use tracking cookies, advertising cookies, or any third-party cookies that collect personal data."
          },
          {
            title: "3. Third-Party Services",
            content: "Our website may link to third-party services such as Discord. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services."
          },
          {
            title: "4. Data Storage",
            content: "Since we do not collect personal data, we do not store personal information. Our tools and scripts run entirely in your browser and do not transmit data to our servers."
          },
          {
            title: "5. Children's Privacy",
            content: "Our Services are not directed at children under the age of 13. We do not knowingly collect information from children. If you believe a child has provided us with personal information, please contact us through Discord so we can take appropriate action."
          },
          {
            title: "6. Security",
            content: "We take reasonable measures to protect our website and Services. However, no method of transmission over the internet is 100% secure. We cannot guarantee the absolute security of any information."
          },
          {
            title: "7. Your Rights",
            content: "Since we do not collect personal data, there is generally no personal information for us to provide, modify, or delete. If you have concerns about any data related to your use of our Services, please contact us through our Discord server."
          },
          {
            title: "8. Changes to This Policy",
            content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of the Services after changes constitutes acceptance of the updated policy."
          },
          {
            title: "9. Contact Us",
            content: "If you have any questions or concerns about this Privacy Policy, please reach out to us through our Discord server."
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

export default PrivacyPolicy;
