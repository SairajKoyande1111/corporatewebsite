import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BarChart3, Calculator, FileText, Globe, Layers, Phone, ShieldCheck, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { useServices, useExperts, useTestimonials, useAwards } from "@/hooks/use-content";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { data: services } = useServices();
  const { data: experts } = useExperts();
  const { data: testimonials } = useTestimonials();
  const { data: awards } = useAwards();

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
    switch(name) {
      case "BarChart3": return <BarChart3 className="w-8 h-8" />;
      case "ShieldCheck": return <ShieldCheck className="w-8 h-8" />;
      case "Calculator": return <Calculator className="w-8 h-8" />;
      case "Globe": return <Globe className="w-8 h-8" />;
      case "FileText": return <FileText className="w-8 h-8" />;
      case "Layers": return <Layers className="w-8 h-8" />;
      default: return <BarChart3 className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[hsl(var(--header-main))] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Corporate Meeting" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--header-main))] via-[hsl(var(--header-main))]/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.h1 variants={fadeIn} className="text-6xl md:text-7xl lg:text-8xl font-bold text-white font-display leading-[1.05] mb-12 tracking-tight">
              Financial <br />
              confidence for <br />
              today
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-3xl text-gray-300 mb-14 max-w-2xl leading-relaxed font-medium">
              45+ years of tax, audit & advisory solutions.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 items-center">
               <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-20 h-20 rounded-full border-2 border-secondary/40 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                  <ArrowUpRight className="w-10 h-10" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-12 flex flex-col items-center gap-2 opacity-80">
           <div className="flex flex-col items-center gap-4">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-secondary"
              >
                <ArrowUpRight className="w-12 h-12 rotate-180" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Awards Strip */}
      <div className="bg-white border-b py-10">
        <div className="container-custom">
          <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">Recognized for Excellence</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo placeholders - using text for simplicity but styled like logos */}
             <div className="font-display font-bold text-xl text-gray-600 flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> VAULT</div>
             <div className="font-display font-bold text-xl text-gray-600 flex items-center gap-2"><BarChart3 className="w-6 h-6"/> INSIDE PUBLIC ACCOUNTING</div>
             <div className="font-display font-bold text-xl text-gray-600 flex items-center gap-2"><Globe className="w-6 h-6"/> ACCOUNTING TODAY</div>
             <div className="font-display font-bold text-xl text-gray-600 flex items-center gap-2"><Users className="w-6 h-6"/> FORBES</div>
          </div>
        </div>
      </div>

      {/* Collaborative Approach Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading 
              title="A Collaborative Approach" 
              subtitle="Our Philosophy"
            />
            <motion.p variants={fadeIn} className="text-xl text-primary font-medium mb-6">
              Your goals are our goals. We don't just work for you; we work with you.
            </motion.p>
            <motion.p variants={fadeIn} className="text-gray-600 leading-relaxed mb-8">
              We believe that the best results come from true partnership. By combining our deep technical expertise with a genuine understanding of your business, we create solutions that drive real value and long-term success.
            </motion.p>
            <motion.div variants={fadeIn} className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="font-bold text-primary text-lg group-hover:underline decoration-secondary underline-offset-4">Read Our Story</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Collaboration image */}
            <div className="aspect-[4/3] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-secondary/20 rounded-tl-[100px] rounded-br-[100px] -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <SectionHeading 
            title="Backed by Deep Industry Knowledge" 
            subtitle="Our Services"
            alignment="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services?.length ? services : mockServices).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group cursor-pointer overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
                  
                  <CardContent className="p-8 flex flex-col h-full min-h-[280px]">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {getIcon(service.icon)}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-4 font-display group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-500 mb-8 line-clamp-3">
                      Comprehensive solutions tailored to your unique needs, delivering clarity and confidence.
                    </p>
                    
                    <div className="mt-auto flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="people" className="py-24 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <SectionHeading 
                title="Meet Your Experts" 
                subtitle="People First"
              />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team is comprised of industry leaders who bring deep technical knowledge and practical experience to every engagement. Get to know the people dedicated to your success.
              </p>
              <button className="hidden lg:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
                View All Professionals
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-8">
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {[1, 2, 3, 4].map((i) => (
                    <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                        <div className="aspect-[3/4] overflow-hidden relative">
                           {/* Professional Headshot */}
                          <img 
                            src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1573496359142-b8d87734a5a2' : i === 3 ? '1580489944761-15a19d654956' : '1519085360753-af0119f7cbe7'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                            alt="Expert" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                             <div className="flex gap-3 mb-2">
                                <button className="bg-secondary p-2 rounded-full text-primary hover:bg-white transition-colors"><Phone className="w-4 h-4"/></button>
                                <button className="bg-secondary p-2 rounded-full text-primary hover:bg-white transition-colors"><Globe className="w-4 h-4"/></button>
                             </div>
                          </div>
                        </div>
                        <div className="p-6 border-t border-gray-100">
                          <h4 className="font-bold text-lg text-primary">Alex Thompson</h4>
                          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Partner, Tax</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-8">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team Success" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
               </div>
            </motion.div>

            <div className="order-1 lg:order-2">
               <SectionHeading 
                  title="Our Team, Your Success" 
                  subtitle="Culture"
                  light
               />
               <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  We believe that happy employees lead to happy clients. Our unique culture fosters collaboration, innovation, and a relentless commitment to excellence. When our team thrives, so does your business.
               </p>
               <button className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-3 rounded-full font-bold transition-all duration-300">
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
                <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative">
                   <div className="text-secondary text-6xl font-serif absolute top-6 left-6 opacity-30">"</div>
                   <p className="text-gray-600 italic mb-8 relative z-10 pt-4 text-lg">
                      The team provided exceptional guidance during our merger. Their attention to detail and strategic advice were instrumental to our success.
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                         <img src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="User" />
                      </div>
                      <div>
                         <h5 className="font-bold text-primary">Michael Richards</h5>
                         <p className="text-xs text-gray-500 uppercase tracking-widest">CFO, Tech Ventures</p>
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
               <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Careers</span>
               <h2 className="text-4xl font-bold text-primary mb-6 font-display">Join Us</h2>
               <p className="text-gray-600 mb-8 text-lg">
                  We are one of the largest and most respected firms in the region. Build your career in an environment that values growth, balance, and community.
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
                <span className="text-3xl font-display font-bold tracking-tight text-white mb-1">BT</span>
                <span className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">Bennett Thrasher</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                Providing financial confidence and strategic guidance to businesses and individuals since 1980.
              </p>
              <div className="flex gap-4">
                 {['twitter', 'linkedin', 'facebook', 'instagram'].map(social => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                       <Globe className="w-4 h-4" />
                    </a>
                 ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">About</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition-colors">Advisory</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Audit</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Tax</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Technology</a></li>
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
                   <span>3300 Riverwood Pkwy<br/>Atlanta, GA 30339</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
             <p>&copy; {new Date().getFullYear()} Bennett Thrasher LLP. All rights reserved.</p>
             <div className="flex gap-6">
                <a href="#" className="hover:text-secondary">Privacy Policy</a>
                <a href="#" className="hover:text-secondary">Terms of Use</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
