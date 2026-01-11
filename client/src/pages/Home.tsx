import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calculator,
  FileText,
  Globe,
  Layers,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import {
  useServices,
  useExperts,
  useTestimonials,
  useAwards,
  useIndustries,
} from "@/hooks/use-content";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import vaultLogo from "@assets/logoipsum-344_1767855967338.png";
import ipaLogo from "@assets/logoipsum-349_1767855967339.png";
import accountingTodayLogo from "@assets/logoipsum-356_1767855967339.png";
import forbesLogo from "@assets/logoipsum-385_1767855967342.png";
import logo404 from "@assets/logoipsum-404_1767855967342.png";
import logo411 from "@assets/logoipsum-411_1767855967343.png";
import logo415 from "@assets/logoipsum-415_1767855967343.png";
import logo417 from "@assets/logoipsum-417_1767855967343.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const { data: services } = useServices();
  const { data: experts } = useExperts();
  const { data: testimonials } = useTestimonials();
  const { data: awards } = useAwards();
  const { data: industries } = useIndustries();

  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const heroTexts = [
    { main: "Financial", sub: "confidence for", highlight: "today" },
    { main: "Strategic", sub: "guidance for", highlight: "growth" },
    { main: "Expert", sub: "solutions for", highlight: "success" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const TypewriterEffect = ({ text }: { text: string }) => {
    return (
      <motion.span>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: i * 0.05,
              ease: "easeIn",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  // Mocks if data is empty (for immediate preview)
  const mockServices = [
    { id: 1, title: "Advisory", icon: "BarChart3" },
    { id: 2, title: "Audit", icon: "ShieldCheck" },
    { id: 3, title: "Tax", icon: "Calculator" },
    { id: 4, title: "Technology", icon: "Globe" },
    { id: 5, title: "Client Accounting", icon: "FileText" },
    { id: 6, title: "Wealth Management", icon: "Layers" },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "BarChart3":
        return <BarChart3 className="w-8 h-8" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8" />;
      case "Calculator":
        return <Calculator className="w-8 h-8" />;
      case "Globe":
        return <Globe className="w-8 h-8" />;
      case "FileText":
        return <FileText className="w-8 h-8" />;
      case "Layers":
        return <Layers className="w-8 h-8" />;
      default:
        return <BarChart3 className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#002140] overflow-hidden">
        {/* Background Image with Overlay and Pattern */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Corporate Meeting"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          {/* Complex Gradient Overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002140] via-[#002140]/95 to-transparent" />

          {/* Large "BT" Pattern Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[900px] h-[900px] border-[140px] border-white/10 rounded-full" />
            <div className="absolute -right-40 top-1/2 -translate-y-1/3 w-[700px] h-[700px] border-[120px] border-white/5 rounded-full" />
          </div>
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center -mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <div className="h-[240px] mb-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={heroTextIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-medium text-white font-['Poppins',sans-serif] leading-[1.1] tracking-tight"
                >
                  {heroTexts[heroTextIndex].main} <br />
                  {heroTexts[heroTextIndex].sub} <br />
                  <span className="text-secondary">
                    {heroTexts[heroTextIndex].highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-3xl text-white/90 mb-10 max-w-2xl leading-relaxed font-['Poppins',sans-serif] font-medium min-h-[3.5rem]"
            >
              <TypewriterEffect text="45+ years of tax, audit & advisory solutions." />
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-secondary/20">
                Explore Services
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300">
                Connect Now
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-12 flex flex-col items-center gap-2 opacity-80"></div>
      </section>

      {/* Collaborative Approach Section */}
      <section className="py-20 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col justify-center h-full"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span
                  variants={fadeIn}
                  className="text-secondary font-bold tracking-[0.2em] uppercase text-xl block"
                >
                  Our Philosophy
                </motion.span>
                <motion.h2
                  variants={fadeIn}
                  className="text-5xl md:text-6xl font-bold text-primary font-display leading-[1.1]"
                >
                  A Collaborative <br /> Approach
                </motion.h2>
              </div>

              <div className="space-y-6 max-w-xl">
                <motion.p
                  variants={fadeIn}
                  className="text-2xl text-primary font-semibold leading-tight"
                >
                  Your goals are our goals. We don't just work for you; we work
                  with you.
                </motion.p>
                <motion.p
                  variants={fadeIn}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  We believe that the best results come from true partnership.
                  By combining our deep technical expertise with a genuine
                  understanding of your business, we create solutions that drive
                  real value and long-term success.
                </motion.p>
              </div>

              <motion.div variants={fadeIn} className="pt-4">
                <button className="group flex items-center gap-3 text-primary font-bold text-xl hover:text-secondary transition-colors">
                  <span className="border-b-2 border-secondary pb-1 group-hover:border-primary transition-colors">
                    Read Our Story
                  </span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Collaboration image */}
            <div className="aspect-[4/3] rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative z-10 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Team Collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-12 -right-12 w-full h-full bg-[#F5F2EA] rounded-tl-[120px] rounded-br-[120px] -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.2em] uppercase text-xl md:text-2xl"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-display leading-tight"
            >
              Backed by Deep Industry Knowledge
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services?.length ? services : mockServices).map(
              (service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden bg-white">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={
                          service.title.includes("Accounting")
                            ? "https://images.unsplash.com/photo-1554224155-1659a7245222?auto=format&fit=crop&w=800&q=80"
                            : service.title.includes("Tax")
                              ? "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                              : service.title.includes("Payroll")
                                ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                                : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                        }
                        alt={service.title}
                        loading="eager"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />
                    </div>

                    <CardContent className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="pt-4 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section id="industries" className="py-20 bg-[#F5F2EA] overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.2em] uppercase text-xl"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-display"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl"
            >
              We provide specialized accounting outsourcing services to firms across multiple industries
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries?.map((industry, idx) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden bg-white">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={industry.imageUrl}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-[#002140] text-white overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Our Culture" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Culture</span>
              <h2 className="text-5xl font-bold leading-tight">Our Team, Your Success</h2>
            </div>
            <p className="text-xl text-white/80 leading-relaxed">
              We believe that happy employees lead to happy clients. Our unique culture fosters collaboration, innovation, and a relentless commitment to excellence. When our team thrives, so does your business.
            </p>
            <button className="bg-secondary text-primary px-10 py-4 rounded-full font-bold hover:bg-white transition-all">
              Meet Our Team
            </button>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-[#F5F2EA] overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            <h2 className="text-5xl font-bold text-primary">Join Us</h2>
            <div className="space-y-6">
              <p className="text-2xl font-bold text-primary leading-tight">
                We are one of the largest and fastest-growing certified public accounting and consulting firms.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Consistently named one of the Best Accounting Firms to Work for in the United States by Accounting Today, Bennett Thrasher offers you the opportunities of a large accounting firm, with a collaborative, fun culture and a flexible, supportive work atmosphere.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white border-2 border-primary/10 text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                Explore Careers <ArrowUpRight className="w-5 h-5 bg-secondary text-primary rounded-full p-1" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Join Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.2em] uppercase text-xl"
            >
              Client Feedback
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-display"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials?.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-full lg:basis-full px-4">
                  <div className="bg-[#002140] rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                    <div className="relative z-10 space-y-10">
                      <div className="flex gap-1 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <ArrowUpRight className="w-6 h-6 text-secondary fill-secondary" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-2xl md:text-3xl lg:text-4xl text-white text-center font-medium leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex flex-col items-center gap-4 pt-4">
                        <div className="w-16 h-1 bg-secondary rounded-full" />
                        <div className="text-center">
                          <h4 className="text-xl md:text-2xl font-bold text-white">
                            {testimonial.author}
                          </h4>
                          <p className="text-secondary font-bold uppercase tracking-widest text-sm pt-2">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="relative translate-y-0 left-0 hover:bg-secondary hover:text-primary border-primary/20" />
              <CarouselNext className="relative translate-y-0 right-0 hover:bg-secondary hover:text-primary border-primary/20" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002140] py-20 text-white border-t border-white/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-2 space-y-10">
              <div className="text-4xl font-bold tracking-tighter">
                Bennett <br /> Thrasher
              </div>
              <p className="text-white/70 text-xl max-w-md leading-relaxed">
                We believe that the best results come from true partnership.
                Delivering financial confidence since 1980.
              </p>
              <div className="flex gap-8">
                {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/60 hover:text-secondary transition-colors font-bold text-lg"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xl font-bold text-secondary uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {["Services", "Experts", "Industries", "Careers", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white transition-colors text-lg"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xl font-bold text-secondary uppercase tracking-widest">
                Contact Us
              </h4>
              <div className="space-y-6 text-white/70 text-lg">
                <p>3310 Northside Parkway <br /> Suite 600 <br /> Atlanta, GA 30327</p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  770.396.2200
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50">
            <p>© 2026 Bennett Thrasher LLP. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
