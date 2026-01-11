import { Link } from "wouter";
import { Phone, ArrowUpRight, Search, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[hsl(var(--header-top))] text-white/90 py-2.5 text-[14px] md:text-[18px] font-['Poppins',sans-serif] border-b border-white/5">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex gap-4 md:gap-6 items-center">
            <a href="tel:4047520600" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
              404.752.0600
            </a>
            <a href="mailto:info@btcpa.net" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
              info@btcpa.net
            </a>
          </div>
          <div className="flex gap-4 md:gap-6 text-center">
            <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Online Payments & Client Resources</a>
            <a href="#" className="hidden sm:block hover:text-secondary transition-colors underline-offset-4 hover:underline">Careers</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-[hsl(var(--header-main))] text-white">
        <div className="container-custom flex items-center justify-between h-[80px] md:h-[105px]">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="text-2xl md:text-4xl font-display font-medium tracking-tight text-white group-hover:text-secondary transition-colors">BT</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-secondary font-medium -mt-1">Bennett Thrasher</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-12 font-['Poppins',sans-serif] text-[18px] font-medium uppercase tracking-[0.15em] text-white">
            <Link href="/" className="hover:text-secondary transition-colors py-2">Home</Link>
            <Link href="/about" className="hover:text-secondary transition-colors py-2">About Us</Link>
            <Link href="/services" className="hover:text-secondary transition-colors py-2">Services</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors py-2">Contact</Link>
          </nav>

          <div className="flex items-center gap-4 md:gap-8">
            <button className="hidden sm:block bg-secondary text-primary px-4 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-secondary/20 uppercase tracking-widest text-xs md:text-sm">
              Connect Now
            </button>
            <button 
              className="lg:hidden p-2 text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[hsl(var(--header-main))] border-t border-white/5 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6 font-['Poppins',sans-serif] text-lg font-medium uppercase tracking-widest">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors">About Us</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors">Services</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors">Contact</Link>
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm mt-4">
                Connect Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
