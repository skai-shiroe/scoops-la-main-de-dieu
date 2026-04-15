import { motion } from "framer-motion";
import { Sprout, PawPrint, ShoppingBasket, GraduationCap, Truck } from "lucide-react";

const activities = [
  { icon: Sprout, title: "Agriculture durable", desc: "Cultures respectueuses de l'environnement avec des techniques modernes et traditionnelles adaptées au climat togolais." },
  { icon: PawPrint, title: "Élevage", desc: "Élevage de bétail et de volaille en conditions saines, contribuant à la sécurité alimentaire locale." },
  { icon: ShoppingBasket, title: "Commercialisation", desc: "Organisation de la vente des produits agricoles et d'élevage sur les marchés locaux et régionaux." },
  { icon: GraduationCap, title: "Accompagnement", desc: "Formation et soutien technique aux producteurs pour améliorer leurs pratiques et rendements." },
  { icon: Truck, title: "Logistique & Distribution", desc: "Acheminement efficace des produits du champ au marché grâce à notre réseau logistique." },
];

const ActivitiesSection = () => (
  <section id="activites" className="section-padding bg-gradient-green">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold font-semibold uppercase tracking-widest text-sm">Ce que nous faisons</span>
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mt-3">Nos activités</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-6 hover:bg-card/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
              <a.icon className="text-gold" size={24} />
            </div>
            <h3 className="font-heading text-xl text-primary-foreground mb-2">{a.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
