import { Link } from "wouter";
import { Phone, ArrowUpRight, Search } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#0a1e36] text-white/80 py-2 text-xs border-b border-white/5">
        <div className="container-custom flex justify-end gap-6">
          <a href="#" className="hover:text-secondary transition-colors">Online Payments & Client Resources</a>
          <a href="#" className="hover:text-secondary transition-colors">Careers</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-primary shadow-lg text-white">
        <div className="container-custom flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-secondary transition-colors">BT</span>
              <span className="text-[10px] tracking-widest uppercase text-secondary font-semibold">Bennett Thrasher</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-medium">
            <a href="#services" className="hover:text-secondary transition-colors py-2">Services</a>
            <a href="#industries" className="hover:text-secondary transition-colors py-2">Industries</a>
            <a href="#people" className="hover:text-secondary transition-colors py-2">People</a>
            <a href="#resources" className="hover:text-secondary transition-colors py-2">Resources</a>
            <button className="hover:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 hover:border-secondary hover:text-secondary transition-colors text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>404.752.0600</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary shadow-lg shadow-secondary/20 hover:shadow-secondary/40"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
