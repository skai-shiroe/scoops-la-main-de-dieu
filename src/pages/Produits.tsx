import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import agricultureImg from "@/assets/products-agriculture.jpg";
import elevageImg from "@/assets/products-elevage.jpg";
import distributionImg from "@/assets/distribution.jpg";

const productCategories = [
  {
    img: agricultureImg,
    title: "Produits agricoles",
    desc: "Nos cultures couvrent une large gamme de produits vivriers et maraîchers, cultivés dans le respect de l'environnement.",
    items: ["Céréales (maïs, riz, sorgho)", "Tubercules (igname, manioc)", "Légumes frais", "Fruits tropicaux", "Légumineuses"],
  },
  {
    img: elevageImg,
    title: "Produits d'élevage",
    desc: "Notre élevage responsable fournit des produits sains et de qualité, répondant aux besoins alimentaires locaux.",
    items: ["Bétail (bovins, caprins)", "Volaille", "Œufs frais", "Produits laitiers", "Viande de qualité"],
  },
  {
    img: distributionImg,
    title: "Services de distribution",
    desc: "Nous assurons l'acheminement de nos produits vers les marchés, garantissant fraîcheur et disponibilité.",
    items: ["Livraison locale", "Distribution régionale", "Conditionnement", "Stockage adapté", "Vente en gros"],
  },
];

const Produits = () => (
  <PageLayout>
    <PageHero
      tag="Notre offre"
      title="Nos produits"
      description="Des produits agricoles et d'élevage de qualité, cultivés et élevés de manière durable au Togo."
    />

    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="space-y-20">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-gold font-semibold uppercase tracking-widest text-xs">Catégorie</span>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-2 mb-4">{cat.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{cat.desc}</p>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Vous souhaitez commander nos produits ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contactez-nous pour discuter de vos besoins et recevoir un devis personnalisé.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Demander un devis <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Produits;
