import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Wrench, BookOpen } from "lucide-react";
import type { ProductCard as ProductCardType } from "@/lib/products";

export function ProductCard({ product, index }: { product: ProductCardType; index: number }) {
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-strong rounded-3xl overflow-hidden flex flex-col group"
    >
      <div
        className="h-44 relative flex items-center justify-center overflow-hidden"
        style={{ background: product.bg }}
      >
        <div className="absolute inset-0 opacity-30 bg-grid" style={{
          backgroundImage:
            "linear-gradient(var(--primary-glow) 1px, transparent 1px), linear-gradient(90deg, var(--primary-glow) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
        <motion.div
          whileHover={{ scale: 1.15, rotate: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, ${product.brandColor}, transparent 70%)`,
          }}
        >
          <Icon className="w-14 h-14 text-foreground drop-shadow-[0_0_15px_var(--primary-glow)]" strokeWidth={1.4} />
        </motion.div>
        <span
          className="absolute top-3 right-3 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full text-white"
          style={{ background: product.brandColor }}
        >
          {product.brand}
        </span>
        <span className="absolute bottom-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-accent text-accent-foreground">
          {product.price}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-3">
        <h3 className="font-display text-accent text-xl border-b-2 border-primary pb-2">
          {product.title}
        </h3>

        <div className="flex gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">उपयोग: </span>
            {product.use}
          </p>
        </div>

        <div className="flex gap-2 text-sm">
          <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">कैसे उपयोग: </span>
            {product.howTo}
          </p>
        </div>

        <div className="text-sm">
          <p className="text-primary font-semibold flex items-center gap-2 mb-1">
            <Wrench className="w-4 h-4" /> इंस्टॉलेशन:
          </p>
          <ul className="space-y-1 pl-1">
            {product.steps.map((s, i) => (
              <li key={i} className="flex gap-2 text-muted-foreground text-[13px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-1" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto p-3 rounded-xl bg-secondary/10 border-l-4 border-secondary text-sm text-muted-foreground">
          🔧 <span className="text-foreground/90">सर्विसिंग: </span>
          {product.service}
        </div>
      </div>
    </motion.div>
  );
}
