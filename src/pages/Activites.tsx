import { motion } from "framer-motion";
import { Sprout, PawPrint, ShoppingBasket, GraduationCap, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/hero-farm.jpg";

const activities = [
  {
    icon: Sprout,
    title: "Agriculture durable",
    desc: "Nous cultivons une variété de produits agricoles en utilisant des techniques respectueuses de l'environnement, combinant savoir-faire traditionnel et innovations modernes. Nos pratiques préservent la fertilité des sols et protègent la biodiversité.",
    details: ["Cultures vivrières", "Maraîchage", "Agroforesterie", "Agriculture biologique"],
  },
  {
    icon: PawPrint,
    title: "Élevage",
    desc: "Notre activité d'élevage couvre le bétail et la volaille, dans des conditions respectant le bien-être animal. Nous contribuons à la sécurité alimentaire tout en maintenant des standards de qualité élevés.",
    details: ["Élevage bovin", "Élevage de volaille", "Élevage caprin", "Soins vétérinaires"],
  },
  {
    icon: ShoppingBasket,
    title: "Commercialisation",
    desc: "Nous organisons la vente des produits agricoles et d'élevage de nos membres sur les marchés locaux, nationaux et régionaux, garantissant des prix justes pour les producteurs et la qualité pour les acheteurs.",
    details: ["Marchés locaux", "Distribution régionale", "Prix équitables", "Contrôle qualité"],
  },
  {
    icon: GraduationCap,
    title: "Accompagnement des producteurs",
    desc: "Nous formons et soutenons nos membres pour améliorer leurs techniques agricoles, leur gestion et leur accès aux ressources, afin de maximiser leurs rendements et leurs revenus.",
    details: ["Formation technique", "Conseil en gestion", "Accès aux intrants", "Suivi personnalisé"],
  },
  {
    icon: Truck,
    title: "Logistique & Distribution",
    desc: "Notre réseau logistique assure l'acheminement efficace des produits du champ au marché, réduisant les pertes post-récolte et garantissant la fraîcheur des produits.",
    details: ["Transport réfrigéré", "Stockage adapté", "Réseau de distribution", "Traçabilité"],
  },
];

const Activites = () => (
  <PageLayout>
    <PageHero
      tag="Ce que nous faisons"
      title="Nos activités"
      description="De la production à la commercialisation, découvrez l'ensemble de nos domaines d'intervention."
    />

    {/* Detailed Activities */}
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-16">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <a.icon className="text-primary" size={28} />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{a.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{a.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {a.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-green-light rounded-2xl aspect-square flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <a.icon className="text-primary/20" size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-green">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
            Intéressé par nos activités ?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Contactez-nous pour en savoir plus sur nos services ou devenir partenaire.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Nous contacter <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Activites;
