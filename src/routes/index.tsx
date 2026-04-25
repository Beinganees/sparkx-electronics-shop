import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Layers,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { PromoBanner } from "@/components/PromoBanner";
import { Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { productCards, totalProducts } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SparkX Electricals • Husenpur Musalman • मोटर, फैन, वायरिंग" },
      {
        name: "description",
        content:
          "Husenpur Musalman, Ambedkar Nagar में 221+ इलेक्ट्रिकल प्रोडक्ट्स, मोटर/पंखा रिपेयर, हाउस वायरिंग और एक्सपर्ट इंस्टॉलेशन।",
      },
      { property: "og:title", content: "SparkX Electricals • भरोसेमंद इलेक्ट्रिकल पार्टनर" },
      {
        property: "og:description",
        content: "TOOFAN, HAVELLS, CROMPTON, ANCHOR, LUMINOUS, FINOLEX — सभी ब्रांड वारंटी के साथ।",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Award, title: "5+ साल अनुभव", desc: "प्रशिक्षित इलेक्ट्रीशियन टीम" },
  { icon: ShieldCheck, title: "100% ओरिजिनल", desc: "ऑथराइज़्ड डीलर • वारंटी" },
  { icon: Truck, title: "होम सर्विस", desc: "घर बैठे फिटिंग एवं रिपेयर" },
  { icon: Sparkles, title: "किफायती दाम", desc: "मार्केट से बेहतर रेट" },
];

const stats = [
  { num: "221+", label: "प्रोडक्ट्स" },
  { num: "1500+", label: "खुश ग्राहक" },
  { num: "12+", label: "ब्रांड्स" },
  { num: "24/7", label: "सपोर्ट" },
];

function HomePage() {
  return (
    <>
      <PromoBanner />

      {/* HERO */}
      <section className="relative px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-primary mb-6"
          >
            <Zap className="w-4 h-4" /> ऑथराइज़्ड डीलर — Ambedkar Nagar 224181
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-gradient-hero"
          >
            SparkX
            <br />
            <span className="shimmer">Electricals</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            बिजली से जुड़ी हर ज़रूरत का भरोसेमंद साथी —
            <span className="text-primary"> मोटर, फैन, वायरिंग, इन्वर्टर, सोलर</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 inline-block"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/15 border border-primary text-primary font-semibold">
              <Layers className="w-4 h-4" /> {totalProducts} प्रोडक्ट्स स्टॉक में
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-primary hover:scale-105 transition-transform"
            >
              🃏 प्रोडक्ट कार्ड देखें
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              📋 पूरी लिस्ट ({totalProducts})
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <div className="font-display font-black text-3xl text-gradient-accent">
                  {s.num}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <Section title="क्यों चुनें SparkX?" subtitle="भरोसेमंद, तेज़ और किफायती सर्विस">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-foreground text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* FEATURED PRODUCTS */}
      <Section title="फीचर्ड प्रोडक्ट कार्ड्स" subtitle="हर प्रोडक्ट के साथ इंस्टॉलेशन गाइड">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCards.slice(0, 6).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            सभी प्रोडक्ट कार्ड देखें <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* CTA STRIP */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center bg-gradient-primary glow-primary"
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%), radial-gradient(circle at 70% 70%, white, transparent 50%)",
          }} />
          <div className="relative">
            <Star className="w-10 h-10 text-accent mx-auto mb-3 float-y" />
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
              एक्सपर्ट सर्विस चाहिए?
            </h3>
            <p className="text-primary-foreground/85 mt-2 max-w-xl mx-auto">
              कॉल करें और घर बैठे पाएं प्रोफेशनल इलेक्ट्रिकल सॉल्यूशन।
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="tel:9120795494" className="px-7 py-3 rounded-full bg-background text-primary font-bold inline-flex items-center gap-2">
                <Wrench className="w-4 h-4" /> 9120795494 कॉल करें
              </a>
              <Link to="/contact" className="px-7 py-3 rounded-full border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
                संपर्क करें
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
