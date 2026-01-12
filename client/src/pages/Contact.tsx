import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Globe,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "404.752.0600",
      description: "Mon-Fri from 9am to 6pm.",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@btcpa.net",
      description: "We'll respond within 24 hours.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "India Operations Center",
      description: "Strategic KPO Hub, India",
      color: "bg-emerald-500/10 text-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-[#002140] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] border-[80px] border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full"
          >
            <motion.span 
              variants={fadeIn}
              className="text-secondary font-bold tracking-[0.3em] uppercase text-lg mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 text-white"
            >
              Let's Start a <br />
              <span className="text-secondary">Conversation</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-white/70 leading-relaxed max-w-4xl mx-auto"
            >
              Have questions about our outsourcing services? Our team is here to help you navigate your financial operations with expert precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-[30px] overflow-hidden group">
                    <CardContent className="p-8 flex items-start gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${item.color}`}>
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                        <p className="text-primary font-semibold mb-1">{item.details}</p>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Working Hours Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-none shadow-xl bg-primary text-white rounded-[30px] overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-6 h-6 text-secondary" />
                      <h3 className="text-xl font-bold">Working Hours</h3>
                    </div>
                    <div className="space-y-3 opacity-90">
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span>Monday - Friday</span>
                        <span className="font-bold">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span>Saturday</span>
                        <span className="font-bold text-secondary">Closed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sunday</span>
                        <span className="font-bold text-secondary">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-2xl bg-white rounded-[40px] overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="mb-10">
                      <h2 className="text-3xl font-bold text-primary mb-2">Send us a Message</h2>
                      <p className="text-gray-500">Fill out the form below and we'll get back to you shortly.</p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold">Your Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-6" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold">Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" {...field} className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-6" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-bold">Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help?" {...field} className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-6" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-bold">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us more about your requirements..." 
                                  className="min-h-[150px] rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold group shadow-lg transition-all active:scale-95"
                        >
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Global Presence Section */}
      <section className="py-24 bg-[#F5F2EA]">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic operations hub in India serving clients across the globe.
            </p>
          </div>
          
          <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-[#002140] flex items-center justify-center p-12 text-center group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <Globe className="w-full h-full text-white animate-pulse" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Seamless Connectivity</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Leveraging high-speed digital infrastructure to ensure that your outsourcing experience feels like having a team right in your office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
