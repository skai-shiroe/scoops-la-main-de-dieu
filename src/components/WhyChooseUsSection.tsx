import { motion } from "framer-motion";
import { Award, Network, ShieldCheck, Leaf, Handshake } from "lucide-react";

const reasons = [
  { icon: Award, title: "Expertise depuis 2013", desc: "Plus de 10 ans d'expérience dans l'agriculture durable et la coopération." },
  { icon: Network, title: "Réseau de producteurs", desc: "Un vaste réseau de coopérants engagés à travers le Togo." },
  { icon: ShieldCheck, title: "Respect des normes", desc: "Conformité OHADA et respect des standards de qualité." },
  { icon: Leaf, title: "Engagement écologique", desc: "Pratiques agricoles respectueuses de l'environnement." },
  { icon: Handshake, title: "Fiabilité commerciale", desc: "Partenaire de confiance pour les clients et investisseurs." },
];

const WhyChooseUsSection = () => (
  <section id="pourquoi" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold font-semibold uppercase tracking-widest text-sm">Nos atouts</span>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3">Pourquoi nous choisir</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <r.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-1">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
