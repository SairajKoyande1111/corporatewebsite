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
  ArrowRight,
  ArrowUpRight 
} from "lucide-react";
import { Footer } from "@/components/Footer";
import missionVideo from "@assets/uhd_25fps_1768141240054.mp4";
import whyChooseUsVideo from "@assets/8348724-uhd_2160_3840_25fps_1768142292931.mp4";
import teamImage1 from "@assets/image_1768141896225.png";
import teamImage2 from "@assets/image_1768141987305.png";
import teamImage3 from "@assets/image_1768142027474.png";

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
      image: teamImage1,
      description: "Our experts hold global certifications ensuring top-tier accuracy and compliance."
    },
    { 
      title: "Experienced Payroll Specialists", 
      image: teamImage2,
      description: "Dedicated specialists managing complex payroll requirements across multiple jurisdictions."
    },
    { 
      title: "Skilled Bookkeepers & Compliance Experts", 
      image: teamImage3,
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

  const outsourcingAdvantages = [
    {
      title: "Highly Qualified Talent",
      description: "Access a pool of CA, CPA, ACCA, and experienced professionals with deep technical expertise.",
      icon: Users,
      highlight: "Expertise"
    },
    {
      title: "Cost Efficiency",
      description: "Optimize your bottom line by saving up to 50% on operational and overhead costs.",
      icon: TrendingUp,
      highlight: "50% Savings"
    },
    {
      title: "Time Zone Advantage",
      description: "Benefit from work done overnight for faster turnaround times and 24/7 productivity.",
      icon: Globe2,
      highlight: "Overnight Delivery"
    },
    {
      title: "Global Standards",
      description: "Total fluency in US GAAP, IFRS, Australian & UK Tax Laws, and international compliance.",
      icon: ShieldCheck,
      highlight: "Compliant"
    }
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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#002140] rounded-[32px] p-10 shadow-xl relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <h3 className="text-secondary font-bold text-2xl mb-6">Our Mission</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Our mission is to help businesses optimize their financial operations while ensuring compliance with international accounting standards. We bridge the gap between complexity and clarity.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-secondary/20 transition-colors" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#002140] rounded-[32px] p-10 shadow-xl relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <h3 className="text-secondary font-bold text-2xl mb-6">Our Vision</h3>
                  <p className="text-white/90 text-lg leading-relaxed italic">
                    "To be the most reliable and efficient outsourcing partner for accounting firms worldwide, enabling them to focus on <span className="text-secondary font-bold">growth, profitability, and client success.</span>"
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:bg-secondary/20 transition-colors" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F5F2EA]"
            >
              <video
                src={missionVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
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
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white rounded-[40px] overflow-hidden group">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <CardContent className="p-8 space-y-4">
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
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-[#F5F2EA] shadow-xl max-h-[600px] mx-auto lg:mx-0">
                <video 
                  src={whyChooseUsVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 z-20 bg-secondary text-primary p-6 rounded-[30px] shadow-lg max-w-[260px] border-4 border-white"
              >
                <p className="text-xl font-bold leading-tight uppercase tracking-tight">Empowering Firms with Global Talent</p>
              </motion.div>
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary font-display leading-tight">Why Choose Us?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Unlock the full potential of your firm with our expert <span className="text-primary font-bold">Knowledge Processing Outsourcing (KPO)</span> services. Specializing in Accounting, Tax, Payroll, and Bookkeeping, we provide seamless support to businesses worldwide from our highly skilled team in India.
                </p>
              </div>

              <div className="space-y-4">
                {whyChooseUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 p-4 rounded-2xl bg-[#F5F2EA]/50 border border-transparent hover:border-secondary/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-secondary rounded-xl flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Outsource to India Section - NEW PREMIUM SECTION */}
      <section className="py-20 bg-[#002140] relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[100px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border-[80px] border-secondary rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.3em] uppercase text-lg"
            >
              Strategic Advantage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white font-display leading-tight"
            >
              Why Outsource to <span className="text-secondary">India?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              India is a global leader in <span className="text-white font-bold">accounting and financial outsourcing</span>, offering an unmatched combination of talent, efficiency, and technological prowess.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {outsourcingAdvantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-white/5 hover:bg-white/10 p-8 md:p-10 rounded-[40px] border border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                <div className="relative z-10 space-y-4">
                  <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    {advantage.highlight}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-secondary transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/60 group-hover:text-white/90 leading-relaxed transition-colors">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 bg-secondary/10 border border-secondary/20 rounded-[40px] text-center"
          >
            <p className="text-xl md:text-2xl text-white font-medium italic">
              "India remains the top choice for <span className="text-secondary">quality-driven financial outsourcing</span>, providing seamless integration with global accounting workflows."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-[#002140] rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight font-display text-white">
                Ready to optimize your <br /> <span className="text-secondary">financial operations?</span>
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

      <Footer />
    </div>
  );
}
