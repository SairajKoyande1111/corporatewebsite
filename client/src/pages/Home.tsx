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
} from "@/hooks/use-content";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

  const [selectedCategory, setSelectedCategory] = useState("Construction");

  const categories = [
    {
      id: "Construction",
      title: "Construction",
      description:
        "If you're looking for strategic construction tax consulting to navigate financial reporting, international growth and business transactions, we can help.",
      experts: [
        {
          name: "Aaron Scale",
          role: "Partner",
          phone: "678.302.1409",
          email: "aaron.scale@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
        },
        {
          name: "Aaron Epp",
          role: "Senior Manager",
          phone: "770.635.5028",
          email: "aaron.epp@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      id: "Entertainment",
      title: "Entertainment",
      description:
        "If you're looking for a strategic entertainment accounting firm to help with your financial and consulting needs, we can help.",
      experts: [
        {
          name: "Peter G. Stathopoulos",
          role: "Partner",
          phone: "678.218.1396",
          email: "peter.stathopoulos@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        },
        {
          name: "Jane L. Klingmeyer",
          role: "Director",
          phone: "678.218.1390",
          email: "jane.klingmeyer@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      id: "Healthcare",
      title: "Healthcare",
      description:
        "If you would benefit from the assistance of dedicated healthcare accountants and consultants, we can help.",
      experts: [
        {
          name: "Patrick Braley",
          role: "Partner",
          phone: "678.218.1407",
          email: "patrick.braley@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
        },
        {
          name: "Michael Y. Dukes",
          role: "Partner",
          phone: "678.302.1480",
          email: "michael.dukes@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        },
        {
          name: "Matthew R. Grosvenor",
          role: "Partner",
          phone: "678.302.1465",
          email: "matt.grosvenor@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      id: "HNWI",
      title: "High Net Worth Individuals",
      description:
        "If you're looking for a solution to manage your individual tax planning and compliance needs, we can help.",
      experts: [
        {
          name: "Jonathan D. Swartz",
          role: "Partner",
          phone: "678.302.1477",
          email: "jonathan.swartz@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop",
        },
        {
          name: "Michael Thrasher",
          role: "Partner",
          phone: "678.990.2264",
          email: "michael.thrasher@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      id: "Hospitality",
      title: "Hospitality",
      description:
        "If you're looking for a strategic hospitality accounting partner who understands the industry, we can help.",
      experts: [
        {
          name: "Cory Bennett",
          role: "Partner",
          phone: "678.302.1485",
          email: "cory.bennett@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        },
        {
          name: "Timothy Watt",
          role: "Partner",
          phone: "678.302.1420",
          email: "tim.watt@btcpa.net",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        },
      ],
    },
  ];

  const currentCategory =
    categories.find((c) => c.id === selectedCategory) || categories[0];

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

      {/* Awards Strip */}
      <div className="bg-white border-b py-6 overflow-hidden">
        <div className="container-custom">
          <div className="relative">
            <motion.div
              className="flex gap-64 items-center whitespace-nowrap"
              animate={{
                x: [0, -3200],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-64 items-center transition-all duration-500"
                >
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={vaultLogo}
                      alt="Logo 1"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={ipaLogo}
                      alt="Logo 2"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={accountingTodayLogo}
                      alt="Logo 3"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={forbesLogo}
                      alt="Logo 4"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={logo404}
                      alt="Logo 5"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={logo411}
                      alt="Logo 6"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={logo415}
                      alt="Logo 7"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 px-24">
                    <img
                      src={logo417}
                      alt="Logo 8"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {(services?.length ? services : mockServices).map(
              (service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 group cursor-pointer overflow-hidden bg-white p-2">
                    <div className="aspect-video overflow-hidden rounded-lg mb-6 relative bg-gray-100">
                      <img
                        src={
                          service.title === "Advisory"
                            ? "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                            : service.title === "Audit"
                              ? "https://images.unsplash.com/photo-1554224155-1659a7245222?auto=format&fit=crop&w=800&q=80"
                              : service.title === "Tax"
                                ? "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                                : service.title === "Operational Solutions"
                                  ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                  : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                        }
                        alt={service.title}
                        loading="eager"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />
                    </div>

                    <CardContent className="px-6 pb-8 space-y-4">
                      <h3 className="text-2xl font-bold text-primary font-['Poppins',sans-serif] group-hover:text-secondary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-['Nunito',sans-serif] text-lg leading-relaxed">
                        Comprehensive solutions tailored to your unique needs,
                        delivering clarity and confidence through expert
                        technical knowledge.
                      </p>
                      <div className="pt-4 flex items-center gap-2 text-primary font-bold font-['Poppins',sans-serif] group-hover:gap-4 transition-all duration-300">
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

      {/* Experts Section */}
      <section id="people" className="py-20 bg-[#F5F2EA] overflow-hidden">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12 font-display"
          >
            Meet Your Experts
          </motion.h2>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="pl-6 border-l-4 border-primary">
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">
                      {currentCategory.title}
                    </h3>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                      {currentCategory.description}
                    </p>
                    <div className="text-base md:text-lg text-gray-600">
                      Contact{" "}
                      {currentCategory.experts.map((e, i) => (
                        <span key={e.name}>
                          <span className="text-primary font-bold hover:text-secondary cursor-pointer transition-colors underline decoration-secondary/30 underline-offset-4">
                            {e.name}
                          </span>
                          {i < currentCategory.experts.length - 1
                            ? i === currentCategory.experts.length - 2
                              ? " or "
                              : ", "
                            : ""}
                        </span>
                      ))}{" "}
                      to schedule a consultation.
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    const idx = categories.findIndex(
                      (c) => c.id === selectedCategory,
                    );
                    const prevIdx =
                      (idx - 1 + categories.length) % categories.length;
                    setSelectedCategory(categories[prevIdx].id);
                  }}
                  className="w-14 h-14 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group"
                  aria-label="Previous Category"
                >
                  <ArrowRight className="w-6 h-6 rotate-180" />
                </button>
                <button
                  onClick={() => {
                    const idx = categories.findIndex(
                      (c) => c.id === selectedCategory,
                    );
                    const nextIdx = (idx + 1) % categories.length;
                    setSelectedCategory(categories[nextIdx].id);
                  }}
                  className="w-14 h-14 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group"
                  aria-label="Next Category"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex overflow-x-auto pb-6 mb-10 border-b-2 border-primary/10 no-scrollbar gap-10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xl font-bold whitespace-nowrap pb-4 transition-all relative font-display ${
                      selectedCategory === cat.id
                        ? "text-primary"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {cat.title}
                    {selectedCategory === cat.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-[2px] left-0 right-0 h-1 bg-primary rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {currentCategory.experts.map((expert, idx) => (
                    <motion.div
                      key={expert.name}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="space-y-4"
                    >
                      <div className="aspect-[4/5] rounded-tr-[60px] overflow-hidden relative group shadow-xl border-4 border-white">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-primary text-2xl font-display">
                          {expert.name}
                        </h4>
                        <p className="text-secondary font-bold text-sm uppercase tracking-widest">
                          {expert.role}
                        </p>
                        <div className="pt-2 space-y-1">
                          <p className="text-primary font-bold hover:text-secondary cursor-pointer transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {expert.phone}
                          </p>
                          <p className="text-gray-600 text-sm hover:text-primary cursor-pointer transition-colors truncate pl-3.5">
                            {expert.email}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Success Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />

        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Leaf shape image */}
            <div className="aspect-square bg-gray-800 rounded-tr-[150px] rounded-bl-[150px] overflow-hidden border-4 border-secondary/30">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2070&q=80"
                alt="Professional Team"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-8 flex flex-col items-center text-center">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-secondary font-bold tracking-[0.2em] uppercase text-base md:text-lg block"
              >
                Culture
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-tight"
              >
                Our Team, Your Success
              </motion.h2>
            </div>
            
            <p className="text-gray-100 text-2xl md:text-3xl mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              We believe that happy employees lead to happy clients. Our unique
              culture fosters collaboration, innovation, and a relentless
              commitment to excellence. When our team thrives, so does your
              business.
            </p>
            <button className="bg-secondary text-primary hover:bg-white px-12 py-5 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl shadow-secondary/20">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Trusted by Many"
            subtitle="Testimonials"
            alignment="center"
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                <div className="text-secondary text-6xl font-serif absolute top-6 left-6 opacity-30">
                  "
                </div>
                <p className="text-gray-600 italic mb-8 relative z-10 pt-4 text-lg">
                  The team provided exceptional guidance during our merger.
                  Their attention to detail and strategic advice were
                  instrumental to our success.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt="User"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Michael Richards</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      CFO, Tech Ventures
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us / Careers */}
      <section className="py-24 bg-white relative">
        <div className="container-custom grid lg:grid-cols-2 gap-0 items-center bg-gray-50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Join Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>

          <div className="p-12 lg:p-20">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Careers
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6 font-display">
              Join Us
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We are one of the largest and most respected firms in the region.
              Build your career in an environment that values growth, balance,
              and community.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20">
              Explore Careers
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1e36] text-white pt-20 pb-10 border-t border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="mb-6 flex flex-col">
                <span className="text-3xl font-display font-bold tracking-tight text-white mb-1">
                  BT
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">
                  Bennett Thrasher
                </span>
              </div>
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                Providing financial confidence and strategic guidance to
                businesses and individuals since 1980.
              </p>
              <div className="flex gap-4">
                {["twitter", "linkedin", "facebook", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  ),
                )}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">About</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Advisory
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Audit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Tax
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Technology
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <span>404.752.0600</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-secondary shrink-0" />
                  <span>
                    3300 Riverwood Pkwy
                    <br />
                    Atlanta, GA 30339
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Bennett Thrasher LLP. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
