import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Zap } from "lucide-react";
import { Section } from "@/components/Section";
import { productCategories, totalProducts } from "@/lib/products";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: `पूरी प्रोडक्ट सूची (${221}) • SparkX Electricals` },
      {
        name: "description",
        content: "221+ इलेक्ट्रिकल प्रोडक्ट्स — फैन, लाइट, स्विच, MCB, इन्वर्टर, मोटर, वायर सब कुछ।",
      },
      { property: "og:title", content: "प्रोडक्ट कैटलॉग • SparkX" },
      { property: "og:description", content: "हर ब्रांड का स्टॉक, हर ज़रूरत का सॉल्यूशन।" },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q.trim()) return productCategories;
    const term = q.toLowerCase();
    return productCategories
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => i.toLowerCase().includes(term)),
      }))
      .filter((c) => c.items.length > 0);
  }, [q]);

  return (
    <div className="pt-24">
      <Section
        title="📋 पूरी प्रोडक्ट सूची"
        subtitle={`${totalProducts}+ प्रोडक्ट्स — सभी कैटेगरी एक जगह`}
      >
        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="प्रोडक्ट खोजें... जैसे 'LED बल्ब', 'MCB'"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full glass-strong border-primary/30 focus:border-primary outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h3 className="font-display text-lg text-accent border-b-2 border-primary pb-2 mb-4 inline-block">
                {cat.title}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground py-1 border-b border-dashed border-border/30 hover:text-primary transition-colors"
                  >
                    <Zap className="w-3 h-3 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-16">
            कोई रिज़ल्ट नहीं मिला। कृपया दूसरा कीवर्ड आज़माएं।
          </div>
        )}

        <div className="mt-10 text-center">
          <div className="inline-block px-8 py-4 rounded-2xl glass-strong border-dashed border-primary">
            <div className="font-display text-2xl text-accent" style={{ textShadow: "0 0 20px var(--primary-glow)" }}>
              ⚡ कुल {totalProducts}+ प्रोडक्ट्स ⚡
            </div>
            <div className="text-sm text-muted-foreground mt-1">सभी ब्रांड • वारंटी के साथ</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
