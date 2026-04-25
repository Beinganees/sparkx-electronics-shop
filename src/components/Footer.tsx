import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Zap, Share2, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border bg-darker/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-black text-xl text-gradient-accent">
              SPARKX
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Husenpur Musalman में बिजली से जुड़ी हर ज़रूरत का भरोसेमंद साथी। 221+ ओरिजिनल प्रोडक्ट्स, वारंटी और एक्सपर्ट सर्विस।
          </p>
        </div>

        <div>
          <h4 className="font-display text-primary mb-3 text-sm tracking-wide">क्विक लिंक</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">सेवाएं</Link></li>
            <li><Link to="/products" className="hover:text-primary">प्रोडक्ट कार्ड</Link></li>
            <li><Link to="/catalog" className="hover:text-primary">पूरी लिस्ट</Link></li>
            <li><Link to="/contact" className="hover:text-primary">संपर्क</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-primary mb-3 text-sm tracking-wide">संपर्क</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="w-4 h-4 text-primary mt-0.5" /> 9120795494</li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Husenpur Musalman, Ambedkar Nagar 224181</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-primary mt-0.5" /> sparkx_electronitcs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-primary mb-3 text-sm tracking-wide">सोशल</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SparkX Electricals. सभी अधिकार सुरक्षित।
      </div>
    </footer>
  );
}
