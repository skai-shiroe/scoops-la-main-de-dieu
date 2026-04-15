import { motion } from "framer-motion";
import { Leaf, Users, Shield, Heart } from "lucide-react";
import aboutImg from "@/assets/about-farmers.jpg";

const values = [
  { icon: Leaf, label: "Durabilité", desc: "Agriculture respectueuse de l'environnement" },
  { icon: Users, label: "Solidarité", desc: "Entraide entre producteurs coopérants" },
  { icon: Shield, label: "Qualité", desc: "Produits sains et conformes aux normes" },
  { icon: Heart, label: "Respect", desc: "De la terre, des hommes et de la nature" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="apropos" className="section-padding bg-card">
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
            alt="Producteurs de la coopérative au travail"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]"
            loading="lazy"
            width={1280}
            height={720}
          />
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            À propos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl text-foreground mt-3 mb-6"
          >
            Notre histoire & notre mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            Créée le 09 janvier 2013, SCOOPS LA MAIN DE DIEU est une Société Coopérative Simplifiée
            immatriculée sous le N° 00219/2013/MAEP/SG/DPCA/DIR, en conformité avec l'Acte uniforme
            OHADA relatif au droit des sociétés coopératives.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground leading-relaxed mb-8"
          >
            Notre mission est de promouvoir une agriculture durable respectueuse de l'environnement
            et d'organiser la commercialisation des produits agricoles et d'élevage au service de
            nos producteurs et de notre communauté.
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-green-light rounded-xl p-4 flex items-start gap-3"
              >
                <v.icon className="text-primary mt-0.5 shrink-0" size={22} />
                <div>
                  <p className="font-semibold text-foreground text-sm">{v.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
