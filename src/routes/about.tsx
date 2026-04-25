import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, Zap } from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "हमारे बारे में • SparkX Electricals" },
      {
        name: "description",
        content: "Husenpur Musalman, Ambedkar Nagar में 5+ साल से इलेक्ट्रिकल सेवाएं देने वाला भरोसेमंद नाम।",
      },
      { property: "og:title", content: "हमारे बारे में • SparkX" },
      { property: "og:description", content: "5+ साल अनुभव • 1500+ ग्राहक • 221+ प्रोडक्ट्स" },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Award, num: "5+", label: "साल अनुभव" },
  { icon: Users, num: "1500+", label: "खुश ग्राहक" },
  { icon: ShieldCheck, num: "100%", label: "ओरिजिनल" },
  { icon: Zap, num: "221+", label: "प्रोडक्ट्स" },
];

function AboutPage() {
  return (
    <div className="pt-24">
      <Section title="हमारे बारे में" subtitle="भरोसा, गुणवत्ता और सेवा का संगम">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl text-primary">SparkX Electricals की कहानी</h3>
            <p className="text-muted-foreground leading-relaxed">
              SparkX Electricals की शुरुआत Husenpur Musalman, Ambedkar Nagar से एक छोटे से सपने
              के साथ हुई — हर घर, दुकान और फैक्ट्री तक भरोसेमंद इलेक्ट्रिकल सॉल्यूशन पहुंचाना।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              आज हम <span className="text-primary font-semibold">TOOFAN, HAVELLS, CROMPTON, ANCHOR, LUMINOUS, FINOLEX</span> जैसे
              टॉप ब्रांड्स के ऑथराइज़्ड डीलर हैं और 221+ प्रोडक्ट्स स्टॉक में रखते हैं।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              हमारी टीम में प्रशिक्षित इलेक्ट्रीशियन शामिल हैं जो मोटर रिपेयर, हाउस वायरिंग,
              इंडस्ट्रियल इंस्टॉलेशन और इमरजेंसी सर्विस में विशेषज्ञ हैं।
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-strong rounded-2xl p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl font-black text-gradient-accent">
                    {s.num}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
