import { motion } from "framer-motion";
import { Award, Network, ShieldCheck, Leaf, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const reasons = [
  {
    icon: Award,
    title: "Expertise depuis 2013",
    desc: "Plus d'une décennie d'expérience nous a permis de maîtriser les défis de l'agriculture tropicale et de bâtir une expertise reconnue dans le secteur coopératif.",
  },
  {
    icon: Network,
    title: "Réseau de producteurs",
    desc: "Notre vaste réseau de coopérants à travers le Togo nous permet de garantir un approvisionnement régulier et diversifié en produits de qualité.",
  },
  {
    icon: ShieldCheck,
    title: "Respect des normes",
    desc: "Conformes à l'Acte uniforme OHADA et aux réglementations nationales, nous offrons un cadre juridique transparent et fiable à nos partenaires.",
  },
  {
    icon: Leaf,
    title: "Engagement écologique",
    desc: "Chaque décision est guidée par notre engagement envers une agriculture durable, préservant les sols, l'eau et la biodiversité pour les générations futures.",
  },
  {
    icon: Handshake,
    title: "Fiabilité commerciale",
    desc: "Partenaire de confiance pour les clients, ONG et investisseurs, nous construisons des relations durables basées sur la transparence et la qualité.",
  },
];

const stats = [
  { value: "12+", label: "Années d'expérience" },
  { value: "OHADA", label: "Conformité juridique" },
  { value: "100%", label: "Agriculture durable" },
  { value: "Togo", label: "Réseau national" },
];

const PourquoiNous = () => (
  <PageLayout>
    <PageHero
      tag="Nos atouts"
      title="Pourquoi nous choisir"
      description="Découvrez ce qui fait de SCOOPS LA MAIN DE DIEU un partenaire de confiance."
    />

    {/* Stats */}
    <section className="bg-card py-12 border-b border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-heading text-3xl md:text-4xl text-primary">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Reasons */}
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-start gap-6 bg-secondary rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Engagements */}
    <section className="section-padding bg-gradient-green">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">Notre promesse</span>
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mt-3 mb-8">
            Nos engagements envers vous
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
          {[
            "Transparence totale dans nos opérations",
            "Qualité constante de nos produits",
            "Respect de toutes les réglementations",
            "Prix justes pour producteurs et acheteurs",
            "Livraisons fiables et ponctuelles",
            "Accompagnement personnalisé",
          ].map((e, i) => (
            <motion.div
              key={e}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 bg-card/10 backdrop-blur-sm rounded-xl p-4"
            >
              <CheckCircle2 className="text-gold shrink-0" size={20} />
              <span className="text-primary-foreground text-sm">{e}</span>
            </motion.div>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Devenir partenaire <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default PourquoiNous;
