import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex items-center justify-center min-h-[70vh]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary font-display">{title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're working hard to bring you more information about our firm. 
              This page is coming soon.
            </p>
            <div className="pt-8">
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
