import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919120795494"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl"
      style={{ background: "var(--whatsapp)" }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      whileHover={{ scale: 1.1 }}
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full pulse-glow" />
    </motion.a>
  );
}
