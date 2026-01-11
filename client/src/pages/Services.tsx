import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Calculator, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  ArrowRight,
  Lock,
  Cloud
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Services() {
  const mainServices = [
    {
      title: "Accounting & Bookkeeping",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1554224155-1659a7245222?auto=format&fit=crop&w=800&q=80",
      points: [
        "General Ledger & Trial Balance Preparation",
        "Accounts Payable & Receivable Management",
        "Financial Statement Preparation",
        "Bank & Credit Card Reconciliations",
        "Cloud-Based Accounting Support (Xero, QuickBooks, Sage, etc.)"
      ]
    },
    {
      title: "Tax Preparation & Compliance",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      points: [
        "Corporate & Individual Tax Returns",
        "VAT/GST & Sales Tax Filings",
        "Tax Planning & Advisory",
        "IRS & HMRC Compliance Support"
      ]
    },
    {
      title: "Payroll Processing",
      icon: Users,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      points: [
        "Payroll Setup & Processing",
        "Payslip Generation & Compliance Reporting",
        "Superannuation & Pension Contributions",
        "End-of-Year Payroll Reconciliation"
      ]
    },
    {
      title: "Financial Analysis & Reporting",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      points: [
        "Budgeting & Forecasting",
        "Cash Flow & Profitability Analysis",
        "Management Reporting & KPI Tracking"
      ]
    }
  ];

  const softwareExpertise = ["Xero", "QuickBooks", "Sage", "NetSuite", "MYOB", "FreshBooks"];
  const securityFeatures = [
    "End-to-End Data Encryption",
    "GDPR & HIPAA Compliance",
    "Multi-Factor Authentication",
    "Secure Access Controls"
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#002140] text-white overflow-hidden py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="Office background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002140] to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">Comprehensive</span> <span className="text-secondary">Accounting & Finance</span> <span className="text-white">Solutions</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
              Tailored services designed to optimize your financial operations and drive global growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Detail */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid gap-24">
            {mainServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''} space-y-8`}>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-primary font-display">{service.title}</h2>
                    <div className="h-1.5 w-full bg-secondary rounded-full" />
                  </div>
                  <ul className="grid gap-6">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-4 items-start group">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-xl text-black font-semibold leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-3 text-primary font-bold text-lg hover:text-secondary transition-colors group">
                    Inquire About This Service 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                  <div className="aspect-[4/3] rounded-[60px] overflow-hidden border-8 border-[#F5F2EA] shadow-2xl">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className={`absolute -z-10 w-full h-full bg-secondary/5 rounded-[60px] -bottom-6 ${idx % 2 === 1 ? '-left-6' : '-right-6'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Security Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-display tracking-tight">
              Securing Your <span className="text-secondary">Financial Future</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Enterprise-grade security meets industry-leading cloud platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex-1 bg-secondary rounded-2xl p-10 border border-secondary/20 shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
                <div className="space-y-10 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary text-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-110">
                      <Cloud className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary tracking-tight">Platform Expertise</h3>
                      <p className="text-primary/60 text-base mt-1 font-medium">Certified cloud accounting specialists.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-y-5">
                    {softwareExpertise.map((sw, i) => (
                      <div key={i} className="flex items-center gap-5 group/item p-3 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-primary">
                          <CheckCircle2 className="w-6 h-6 text-primary group-hover/item:text-secondary transition-colors" />
                        </div>
                        <span className="font-bold text-primary tracking-tight text-2xl">{sw}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="flex-1 bg-[#002140] text-white rounded-2xl p-10 border border-white/5 shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
                <div className="space-y-10 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-secondary text-primary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20 transition-transform duration-500 group-hover:scale-110">
                      <Lock className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white tracking-tight">Data Integrity</h3>
                      <p className="text-white/40 text-base mt-1 font-medium">Uncompromising compliance standards.</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {securityFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-5 group/item p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-secondary/50 group-hover/item:bg-secondary/10 transition-all">
                          <ShieldCheck className="w-6 h-6 text-secondary" />
                        </div>
                        <span className="text-2xl font-bold tracking-wide text-white/90">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-[#002140] rounded-[60px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight font-display text-white">
                Get Started with <br /> <span className="text-secondary">Expert Financial Support</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Connect with our team today to learn how our specialized services can drive value for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-secondary text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all shadow-lg flex items-center gap-3">
                  Connect Now <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Consistent with About Page) */}
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
