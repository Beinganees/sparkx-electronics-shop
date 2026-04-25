import { Phone, Sparkles } from "lucide-react";

const items = [
  "🔧 मोटर/पंखा रिपेयर",
  "⚡ हाउस वायरिंग",
  "💡 LED इंस्टॉलेशन",
  "🔋 इन्वर्टर सर्विस",
  "🌀 फैन सर्विसिंग",
  "📦 221 प्रोडक्ट्स स्टॉक",
  "🛡️ वारंटी के साथ",
];

export function PromoBanner() {
  return (
    <div className="mt-16 glass border-y border-primary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
        <a
          href="tel:9120795494"
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/40 border border-primary text-accent font-display font-bold tracking-wider text-base sm:text-lg glow-primary"
        >
          <Phone className="w-4 h-4" />
          9120795494
        </a>
        <div className="flex items-center gap-2 font-display font-extrabold text-sm sm:text-base">
          <span style={{ color: "var(--toofan)", textShadow: "0 0 8px var(--toofan)" }}>
            TOOFAN
          </span>
          <span className="text-muted-foreground">|</span>
          <span style={{ color: "var(--havells)", textShadow: "0 0 8px var(--havells)" }}>
            HAVELLS
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="text-gradient-primary">SPARKX</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground bg-background/40 px-3 py-1.5 rounded-full border-l-2 border-primary">
          <Sparkles className="w-3 h-3 text-primary" />
          ऑथराइज़्ड डीलर • 100% ऑरिजिनल
        </div>
      </div>
      <div className="border-t border-primary/20 bg-background/20 py-2 overflow-hidden">
        <div className="marquee gap-12 text-sm text-muted-foreground whitespace-nowrap">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="px-6">
              {it}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
