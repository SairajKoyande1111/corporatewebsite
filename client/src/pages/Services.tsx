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
                          <BarChart3 className="w-4 h-4" />
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
      <section className="py-24 bg-[#FAF9F6] overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold tracking-wider uppercase text-[10px]">
              <Cpu className="w-3 h-3" />
              <span>Technology & Security</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary font-display tracking-tight">
              Securing Your <span className="text-secondary italic">Financial Future</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              We integrate enterprise-grade security with industry-leading cloud platforms to ensure your data is always protected and your operations remain seamless.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <Card className="flex-1 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-3xl p-12 overflow-hidden relative group hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F2EA] rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />
                <CardContent className="p-0 space-y-10 relative z-10">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-primary text-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                      <Cloud className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary tracking-tight">Platform Expertise</h3>
                    <p className="text-gray-400 text-sm max-w-xs">Certified experts in global accounting ecosystems.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {softwareExpertise.map((sw, i) => (
                      <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-gray-50/50 border border-gray-100 group-hover:border-secondary/20 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1">
                        <span className="font-bold text-primary/80 tracking-tight">{sw}</span>
                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-secondary" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <Card className="flex-1 border-none shadow-2xl bg-[#002140] text-white rounded-3xl p-12 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <CardContent className="p-0 h-full flex flex-col justify-between space-y-10 relative z-10">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
                      <Lock className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">Data Integrity</h3>
                    <p className="text-white/40 text-sm max-w-xs">Uncompromising standards for global compliance.</p>
                  </div>

                  <div className="space-y-3">
                    {securityFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                          <ShieldCheck className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-lg font-medium tracking-wide">{feat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <h2 className="text-4xl md:text-6xl font-bold leading-tight font-display">
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
