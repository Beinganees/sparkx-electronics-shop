import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gradient-accent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="mx-auto mt-5 h-1 w-24 bg-gradient-primary rounded-full glow-primary" />
        </motion.div>
      )}
      {children}
    </section>
  );
}
