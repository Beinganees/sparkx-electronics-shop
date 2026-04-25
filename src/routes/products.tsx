import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { productCards } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "प्रोडक्ट कार्ड्स + इंस्टॉलेशन गाइड • SparkX Electricals" },
      {
        name: "description",
        content:
          "हर प्रोडक्ट के साथ उपयोग, इंस्टॉलेशन और सर्विसिंग गाइड — फैन, MCB, बल्ब, पंप, इन्वर्टर और बहुत कुछ।",
      },
      { property: "og:title", content: "प्रोडक्ट कार्ड्स • SparkX" },
      { property: "og:description", content: "TOOFAN, HAVELLS, CROMPTON, ANCHOR, LUMINOUS की पूरी जानकारी।" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="pt-24">
      <Section
        title="🃏 प्रोडक्ट कार्ड्स"
        subtitle="हर कार्ड में फोटो, उपयोग, इंस्टॉलेशन स्टेप्स और सर्विसिंग गाइड"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCards.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
}
