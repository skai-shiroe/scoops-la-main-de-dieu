import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/22890256085"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contacter sur WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="text-[#fff]" size={28} />
  </a>
);

export default WhatsAppButton;
