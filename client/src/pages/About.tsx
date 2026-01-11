import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Users, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  ArrowRight 
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const teamHighlights = [
    { 
      title: "Certified Accountants & Tax Professionals", 
      icon: ShieldCheck,
      description: "Our experts hold global certifications ensuring top-tier accuracy and compliance."
    },
    { 
      title: "Experienced Payroll Specialists", 
      icon: Users,
      description: "Dedicated specialists managing complex payroll requirements across multiple jurisdictions."
    },
    { 
      title: "Skilled Bookkeepers & Compliance Experts", 
      icon: Target,
      description: "Ensuring your records are meticulous and fully compliant with international standards."
    },
  ];

  const whyChooseUs = [
    {
      title: "Dedicated Accounting Professionals",
      description: "Access highly qualified accountants and tax specialists.",
      icon: Users
    },
    {
      title: "Cost-Effective Solutions",
      description: "Reduce overhead costs while maintaining top-tier quality.",
      icon: TrendingUp
    },
    {
      title: "Scalability & Flexibility",
      description: "Scale your team up or down based on your needs.",
      icon: Globe2
    },
    {
      title: "Global Compliance Expertise",
      description: "Stay ahead of international accounting standards.",
      icon: ShieldCheck
    },
    {
      title: "Advanced Technology",
      description: "Leverage cloud-based accounting and automation tools.",
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-[#002140] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="Office background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002140] to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full flex flex-col items-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-display w-full"
            >
              <span className="text-white">Your Trusted Partner in</span> <br /> 
              <span className="text-secondary">Accounting & Financial Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/80 leading-relaxed w-full max-w-5xl"
            >
              We are a premier <span className="text-white font-bold">Knowledge Processing Outsourcing (KPO)</span> firm based in India, providing world-class accounting, bookkeeping, payroll, and tax services to firms across the <span className="text-white font-bold">USA, UK, Australia, Canada, and beyond.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-primary font-display leading-tight inline-block relative">
              Our Mission & Vision
              <div className="h-2 w-full bg-secondary rounded-full mt-2" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 flex flex-col"
            >
              <div className="bg-[#002140] p-10 rounded-[40px] relative overflow-hidden shadow-2xl flex-1 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold text-secondary">
                    Our Mission
                  </h3>
                  <p className="text-xl text-white/90 leading-relaxed">
                    Our mission is to help businesses optimize their financial operations while ensuring compliance with international accounting standards. We bridge the gap between complexity and clarity.
                  </p>
                </div>
              </div>

              <div className="bg-[#002140] p-10 rounded-[40px] relative overflow-hidden shadow-2xl flex-1 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold text-secondary">
                    Our Vision
                  </h3>
                  <p className="text-xl text-white/90 leading-relaxed font-medium italic">
                    "To be the most reliable and efficient outsourcing partner for accounting firms worldwide, enabling them to focus on <span className="text-secondary font-bold">growth, profitability, and client success.</span>"
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 h-full w-full rounded-[60px] overflow-hidden border-[16px] border-[#F5F2EA] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team Working" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-[#F5F2EA]">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Highly skilled professionals dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white rounded-[40px] p-8 group">
                  <CardContent className="p-0 space-y-6">
                    <div className="w-16 h-16 bg-[#002140] rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[80px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Global Talent" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-secondary text-primary p-8 rounded-[40px] shadow-xl max-w-[280px]">
              <p className="text-2xl font-bold leading-tight uppercase tracking-tighter">Empowering Firms with Global Talent</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary font-display leading-tight">Why Choose Us?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unlock the full potential of your firm with our expert <span className="text-primary font-bold">Knowledge Processing Outsourcing (KPO)</span> services. Specializing in Accounting, Tax, Payroll, and Bookkeeping, we provide seamless support to businesses worldwide from our highly skilled team in India.
              </p>
            </div>

            <div className="space-y-6">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5F2EA] rounded-xl flex items-center justify-center text-primary group-hover:bg-secondary transition-colors">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-[#002140] rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight font-display">
                Ready to optimize your <br /> financial operations?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Partner with India's premier KPO firm and gain access to top-tier accounting talent today.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button className="bg-secondary text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all shadow-lg shadow-secondary/20 flex items-center gap-3">
                  Get Started <ArrowRight className="w-6 h-6" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified for About Page) */}
      <footer className="bg-[#002140] py-20 text-white border-t border-white/10">
        <div className="container-custom text-center space-y-8">
          <div className="text-4xl font-bold tracking-tighter">
            BT <span className="text-secondary text-lg uppercase tracking-[0.3em] font-medium ml-2">Bennett Thrasher</span>
          </div>
          <p className="text-white/50">© 2026 Bennett Thrasher LLP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
