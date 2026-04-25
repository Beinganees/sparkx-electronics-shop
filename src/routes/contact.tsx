import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Camera,
} from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const contacts = [
  { icon: Phone, label: "फ़ोन", value: "9120795494", href: "tel:9120795494" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "9120795494",
    href: "https://wa.me/919120795494",
  },
  {
    icon: Camera,
    label: "इंस्टाग्राम",
    value: "sparkx_electronics",
    href: "https://instagram.com/sparkx_electronics",
  },
  {
    icon: MapPin,
    label: "पता",
    value:
      "Husenpur Musalman, Post Shajana, Hamjapur, Allapur, Ambedkar Nagar, Uttar Pradesh - 224181",
  },
  {
    icon: Clock,
    label: "समय",
    value: "सोम-रवि • सुबह 8 बजे - रात 9 बजे",
  },
];

function ContactPage() {
  return (
    <div className="pt-24">
      <Section title="📞 संपर्क करें" subtitle="हम आपकी सेवा में हाजिर हैं">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            {contacts.map((c, i) => {
              const Icon = c.icon;

              const inner = (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 glass-strong rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-semibold">
                      {c.label}
                    </div>
                    <div>{c.value}</div>
                  </div>
                </motion.div>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                inner
              );
            })}

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border mt-4">
              <iframe
                src="https://www.google.com/maps?q=Husenpur%20Musalman%20Post%20Shajana%20Hamjapur%20Allapur%20Ambedkar%20Nagar%20Uttar%20Pradesh%20224181&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* OPEN IN MAP */}
            <a
              href="https://www.google.com/maps?q=Husenpur%20Musalman%20Post%20Shajana%20Hamjapur%20Allapur%20Ambedkar%20Nagar%20Uttar%20Pradesh%20224181"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm underline"
            >
              📍 Google Maps में खोलें
            </a>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-6 space-y-4"
          >
            <h3 className="text-xl text-accent">मैसेज भेजें</h3>

            <div>
              <label className="text-xs">आपका नाम</label>
              <input
                className="mt-1 w-full px-4 py-3 rounded-xl border"
                placeholder="राम कुमार"
              />
            </div>

            <div>
              <label className="text-xs">फ़ोन नंबर</label>
              <input
                type="tel"
                className="mt-1 w-full px-4 py-3 rounded-xl border"
                placeholder="9876543210"
              />
            </div>

            <div>
              <label className="text-xs">कैसी सर्विस चाहिए?</label>
              <textarea
                rows={4}
                className="mt-1 w-full px-4 py-3 rounded-xl border"
                placeholder="जैसे: फैन रिपेयर..."
              />
            </div>

            {/* WhatsApp Button */}
            <button
              type="button"
              onClick={() => {
                window.open("https://wa.me/919120795494", "_blank");
              }}
              className="w-full py-3 rounded-xl bg-green-600 text-white flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> भेजें
            </button>
          </motion.form>
        </div>
      </Section>
    </div>
  );
}