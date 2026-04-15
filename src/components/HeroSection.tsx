import { motion } from "framer-motion";
import heroImg from "@/assets/hero-farm.jpg";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Champs agricoles verdoyants au Togo"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gold font-semibold tracking-widest uppercase text-sm mb-4"
      >
        Société Coopérative Simplifiée
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight max-w-4xl mx-auto"
      >
        Une agriculture durable au service des producteurs et de l'avenir
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
      >
        Depuis 2013, SCOOPS LA MAIN DE DIEU accompagne les producteurs togolais vers une agriculture respectueuse de l'environnement et une commercialisation équitable.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="bg-gold text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Nous contacter
        </a>
        <a
          href="#apropos"
          className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
        >
          En savoir plus
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
