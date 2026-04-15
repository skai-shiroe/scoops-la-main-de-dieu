import { motion } from "framer-motion";

interface PageHeroProps {
  tag: string;
  title: string;
  description?: string;
}

const PageHero = ({ tag, title, description }: PageHeroProps) => (
  <section className="bg-gradient-green py-20 md:py-28 px-4">
    <div className="container mx-auto text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gold font-semibold uppercase tracking-widest text-sm"
      >
        {tag}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-heading text-3xl md:text-5xl text-primary-foreground mt-3 max-w-3xl mx-auto"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-primary-foreground/75 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
