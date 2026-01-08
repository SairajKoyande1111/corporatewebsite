import { Link } from "wouter";
import { Phone, ArrowUpRight, Search } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#0a1e36] text-white/90 py-2 text-xs border-b border-white/5">
        <div className="container-custom flex justify-end gap-6">
          <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Online Payments & Client Resources</a>
          <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Careers</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-[#0a1e36] text-white">
        <div className="container-custom flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="text-4xl font-display font-bold tracking-tight text-white group-hover:text-secondary transition-colors">BT</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-secondary font-semibold -mt-1">Bennett Thrasher</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-12 font-bold text-sm uppercase tracking-[0.15em]">
            <a href="#services" className="hover:text-secondary transition-colors py-2">Services</a>
            <a href="#industries" className="hover:text-secondary transition-colors py-2">Industries</a>
            <a href="#people" className="hover:text-secondary transition-colors py-2">People</a>
            <a href="#resources" className="hover:text-secondary transition-colors py-2">Resources</a>
          </nav>

          <div className="flex items-center gap-8">
            <div className="hidden xl:flex items-center gap-2 text-xl font-bold tracking-wide">
              <span>770.396.2200</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-[#0a1e36] hover:bg-white transition-all duration-300 shadow-xl shadow-black/20"
            >
              <ArrowUpRight className="w-8 h-8" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
