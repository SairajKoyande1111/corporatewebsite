import { Link } from "wouter";
import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#002140] py-20 text-white border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-tight">
              Bennett <br /> Thrasher
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              We believe that the best results come from true partnership. Delivering financial confidence since 1980.
            </p>
            <div className="flex gap-6 text-sm font-semibold">
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
              <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">Quick Links</h3>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">Experts</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Industries</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">Contact Us</h3>
            <div className="space-y-4 text-white/70">
              <p>
                3310 Northside Parkway <br />
                Suite 600 <br />
                Atlanta, GA 30327
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:770.396.2200" className="hover:text-secondary transition-colors">770.396.2200</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Bennett Thrasher LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
