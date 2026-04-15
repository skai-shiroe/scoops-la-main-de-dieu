import { motion } from "framer-motion";
import { Leaf, Users, Shield, Heart, Target, Eye } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import aboutImg from "@/assets/about-farmers.jpg";

const values = [
  { icon: Leaf, label: "Durabilité", desc: "Nous pratiquons une agriculture qui préserve les ressources naturelles pour les générations futures." },
  { icon: Users, label: "Solidarité", desc: "L'entraide et la coopération sont au cœur de notre modèle, rassemblant les producteurs togolais." },
  { icon: Shield, label: "Qualité", desc: "Nos produits répondent aux normes les plus exigeantes, de la culture à la commercialisation." },
  { icon: Heart, label: "Respect de l'environnement", desc: "Chaque action est guidée par le souci de protéger notre terre et nos écosystèmes." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const APropos = () => (
  <PageLayout>
    <PageHero
      tag="Qui sommes-nous"
      title="À propos de SCOOPS LA MAIN DE DIEU"
      description="Découvrez notre histoire, notre mission et les valeurs qui guident notre coopérative depuis 2013."
    />

    {/* Histoire */}
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="Les producteurs de la coopérative"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Notre histoire</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Depuis 2013, au service des producteurs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Créée le 09 janvier 2013, SCOOPS LA MAIN DE DIEU est née de la volonté de producteurs togolais
              de s'unir pour développer une agriculture durable et équitable. Notre coopérative rassemble
              des hommes et des femmes passionnés par la terre et engagés pour un avenir meilleur.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Immatriculée sous le N° 00219/2013/MAEP/SG/DPCA/DIR, notre société est en conformité avec
              l'Acte uniforme OHADA relatif au droit des sociétés coopératives, en vigueur depuis le 16 mai 2011.
            </p>
            <div className="bg-green-light rounded-xl p-4 border-l-4 border-primary mt-6">
              <p className="text-sm text-foreground font-medium">
                📋 Immatriculation : N° 00219/2013/MAEP/SG/DPCA/DIR
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Conformité Acte uniforme OHADA — Droit des sociétés coopératives
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-3">Notre mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Promouvoir une agriculture durable respectueuse de l'environnement et organiser
              la commercialisation des produits agricoles et d'élevage, afin d'améliorer les
              conditions de vie de nos membres et de contribuer au développement rural.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
              <Eye className="text-gold" size={24} />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-3">Notre vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Devenir une coopérative de référence en Afrique de l'Ouest pour l'agriculture
              durable, en bâtissant un réseau solide de producteurs prospères et en contribuant
              à la sécurité alimentaire de notre région.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Valeurs */}
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">Ce qui nous guide</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3">Nos valeurs</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-green-light rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{v.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default APropos;
