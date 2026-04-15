import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageLayout>
      <PageHero
        tag="Parlons ensemble"
        title="Contactez-nous"
        description="Une question, un projet ou une demande de partenariat ? Nous sommes à votre écoute."
      />

      {/* Contact Info Cards */}
      <section className="bg-card py-12 border-b border-border">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: "Téléphone", value: "+228 90 25 60 85", sub: "+228 90 28 09 08" },
              { icon: MapPin, label: "Localisation", value: "Togo", sub: "Afrique de l'Ouest" },
              { icon: Clock, label: "Horaires", value: "Lun – Ven", sub: "8h00 – 17h00" },
              { icon: MessageCircle, label: "WhatsApp", value: "+228 90 25 60 85", sub: "Réponse rapide", link: "https://wa.me/22890256085" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-secondary rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <c.icon className="text-primary" size={22} />
                </div>
                <p className="font-semibold text-foreground text-sm">{c.label}</p>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{c.value}</p>
                )}
                <p className="text-muted-foreground text-xs mt-0.5">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-secondary rounded-2xl p-8 space-y-5"
            >
              <h2 className="font-heading text-2xl text-foreground mb-2">Envoyez-nous un message</h2>
              <p className="text-muted-foreground text-sm mb-4">Nous vous répondrons dans les plus brefs délais.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Sujet</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Objet de votre message"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Envoyer le message
              </button>
              {sent && (
                <p className="text-primary text-sm text-center font-medium">
                  ✓ Message envoyé avec succès !
                </p>
              )}
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl text-foreground">Notre localisation</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Basée au Togo, SCOOPS LA MAIN DE DIEU opère à travers le pays pour accompagner
                les producteurs et distribuer des produits agricoles de qualité.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border h-80">
                <iframe
                  title="Localisation Togo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4066662.8830498857!2d-0.8328475!3d8.6195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422ceda95b!2sTogo!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
