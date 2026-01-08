import { Link } from "wouter";
import { Phone, ArrowUpRight, Search, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[hsl(var(--header-top))] text-white/90 py-2.5 text-[18px] font-['Poppins',sans-serif] border-b border-white/5">
        <div className="container-custom flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a href="tel:4047520600" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              404.752.0600
            </a>
            <a href="mailto:info@btcpa.net" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              info@btcpa.net
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Online Payments & Client Resources</a>
            <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Careers</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-[hsl(var(--header-main))] text-white">
        <div className="container-custom flex items-center justify-between h-[105px]">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="text-4xl font-display font-medium tracking-tight text-white group-hover:text-secondary transition-colors">BT</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-secondary font-medium -mt-1">Bennett Thrasher</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-12 font-['Poppins',sans-serif] text-[18px] font-medium uppercase tracking-[0.15em] text-white">
            <a href="/" className="hover:text-secondary transition-colors py-2">Home</a>
            <a href="#about" className="hover:text-secondary transition-colors py-2">About Us</a>
            <a href="#services" className="hover:text-secondary transition-colors py-2">Services</a>
            <a href="#contact" className="hover:text-secondary transition-colors py-2">Contact</a>
          </nav>

          <div className="flex items-center gap-8">
            <button className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-secondary/20 uppercase tracking-widest text-sm">
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
