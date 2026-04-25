import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wrench, Home, Factory, Lightbulb, Battery, Wind, Sun, Phone } from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "हमारी सेवाएं • SparkX Electricals" },
      { name: "description", content: "मोटर/पंखा रिपेयर, हाउस वायरिंग, इंडस्ट्रियल वायरिंग, LED इंस्टॉलेशन और बहुत कुछ।" },
      { property: "og:title", content: "इलेक्ट्रिकल सेवाएं • SparkX" },
      { property: "og:description", content: "घर, दुकान, फैक्ट्री के लिए एक्सपर्ट इलेक्ट्रिकल सॉल्यूशन।" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Wrench,
    title: "मोटर/पंखा रिपेयर",
    desc: "TOOFAN, HAVELLS, CROMPTON आदि की विशेषज्ञ मरम्मत। बेयरिंग, कॉइल, कैपेसिटर रिप्लेसमेंट।",
    points: ["सीलिंग फैन", "टेबल फैन", "एग्जॉस्ट फैन", "वॉटर पंप मोटर"],
  },
  {
    icon: Home,
    title: "हाउस वायरिंग",
    desc: "नई या पुरानी वायरिंग, MCB बॉक्स, अर्थिंग और लोड कैलकुलेशन।",
    points: ["कंसील्ड वायरिंग", "ओपन वायरिंग", "MCB / DB", "अर्थिंग"],
  },
  {
    icon: Factory,
    title: "इंडस्ट्रियल वायरिंग",
    desc: "फैक्ट्री, शॉप, गोदाम और पैनल बोर्ड वायरिंग।",
    points: ["3-Phase वायरिंग", "पैनल बोर्ड", "केबल ट्रे", "हैवी ड्यूटी"],
  },
  {
    icon: Lightbulb,
    title: "लाइटिंग सॉल्यूशन",
    desc: "LED, स्मार्ट लाइट, डेकोरेटिव झूमर इंस्टॉलेशन।",
    points: ["LED पैनल", "स्ट्रीट लाइट", "डेकोरेटिव", "स्मार्ट लाइट"],
  },
  {
    icon: Battery,
    title: "इन्वर्टर सर्विस",
    desc: "इन्वर्टर इंस्टॉलेशन, बैटरी रिप्लेसमेंट और मेंटेनेंस।",
    points: ["इन्वर्टर सेटअप", "बैटरी सर्विस", "टर्मिनल क्लीनिंग", "वारंटी सपोर्ट"],
  },
  {
    icon: Sun,
    title: "सोलर पैनल",
    desc: "ऑन-ग्रिड और ऑफ-ग्रिड सोलर सॉल्यूशन।",
    points: ["सोलर पैनल फिटिंग", "इन्वर्टर सेट", "बैटरी बैकअप", "मेंटेनेंस"],
  },
  {
    icon: Wind,
    title: "एग्जॉस्ट फैन",
    desc: "किचन, बाथरूम और फैक्ट्री के लिए वेंटिलेशन।",
    points: ["किचन फैन", "बाथरूम फैन", "इंडस्ट्रियल", "साइलेंट मॉडल"],
  },
  {
    icon: Phone,
    title: "इमरजेंसी सर्विस",
    desc: "24/7 इमरजेंसी कॉल पर तुरंत सर्विस।",
    points: ["शॉर्ट सर्किट", "फ्यूज ब्लो", "नो पावर", "ट्रिप MCB"],
  },
];

function ServicesPage() {
  return (
    <div className="pt-24">
      <Section title="🔌 हमारी सेवाएं" subtitle="घर, ऑफिस और इंडस्ट्री — हर ज़रूरत का सॉल्यूशन">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-strong rounded-3xl p-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <span key={p} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
