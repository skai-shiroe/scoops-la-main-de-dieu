import { motion } from "framer-motion";
import agricultureImg from "@/assets/products-agriculture.jpg";
import elevageImg from "@/assets/products-elevage.jpg";
import distributionImg from "@/assets/distribution.jpg";

const products = [
  { img: agricultureImg, title: "Produits agricoles", desc: "Céréales, légumes, tubercules et fruits cultivés de manière durable." },
  { img: elevageImg, title: "Produits d'élevage", desc: "Bétail, volaille et produits dérivés issus d'un élevage responsable." },
  { img: distributionImg, title: "Distribution", desc: "Livraison et commercialisation vers les marchés locaux et régionaux." },
];

const ProductsSection = () => (
  <section id="produits" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold font-semibold uppercase tracking-widest text-sm">Notre offre</span>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3">Nos produits</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
