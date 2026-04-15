import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-green text-primary-foreground py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <Link to="/" className="font-heading text-2xl mb-3 block">
            SCOOPS <span className="text-gold">LA MAIN DE DIEU</span>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Société Coopérative Simplifiée au service d'une agriculture durable et solidaire au Togo.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold">Liens rapides</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-primary-foreground transition-colors">À propos</Link></li>
            <li><Link to="/activites" className="hover:text-primary-foreground transition-colors">Activités</Link></li>
            <li><Link to="/produits" className="hover:text-primary-foreground transition-colors">Produits</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p className="flex items-center gap-2"><Phone size={14} /> +228 90 25 60 85</p>
            <p className="flex items-center gap-2"><Phone size={14} /> +228 90 28 09 08</p>
            <p className="flex items-center gap-2"><MapPin size={14} /> Togo</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} SCOOPS LA MAIN DE DIEU. Tous droits réservés.</p>
        <p className="mt-1">Immatriculation N° 00219/2013/MAEP/SG/DPCA/DIR — Conformité OHADA</p>
      </div>
    </div>
  </footer>
);

export default Footer;
