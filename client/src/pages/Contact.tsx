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
  ArrowRight,
  ChevronDown
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
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
      phone: "",
      service: "",
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

  const servicesList = [
    "Accounting & Bookkeeping",
    "Tax Preparation & Compliance",
    "Payroll Processing",
    "Financial Analysis & Reporting",
    "Audit & Assurance",
    "Business Consulting"
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#002140] text-white overflow-hidden py-24 text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="Office background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002140] to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full flex flex-col items-center"
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
              Let's Start a <span className="text-secondary">Conversation</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto"
            >
              Have questions about our outsourcing services? Our team is here to help you navigate your financial operations with expert precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 -mt-24 relative z-20">
        <div className="container-custom">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
            {/* Contact Form - First on Mobile */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-2xl bg-white rounded-[40px] overflow-hidden">
                  <CardContent className="p-6 md:p-12">
                    <div className="mb-8 md:mb-10 text-center lg:text-left">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Send us a Message</h2>
                      <p className="text-gray-500 text-sm md:text-base">Fill out the form below and we'll get back to you shortly.</p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold text-sm md:text-base">Your Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-4 md:py-6" />
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
                                <FormLabel className="text-primary font-bold text-sm md:text-base">Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" {...field} className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-4 md:py-6" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold text-sm md:text-base">Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 (555) 000-0000" {...field} className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-4 md:py-6" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold text-sm md:text-base">Service Required</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-4 md:py-6">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="rounded-xl border-gray-100">
                                    {servicesList.map((service) => (
                                      <SelectItem key={service} value={service}>
                                        {service}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
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
                              <FormLabel className="text-primary font-bold text-sm md:text-base">Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help?" {...field} className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all py-4 md:py-6" />
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
                              <FormLabel className="text-primary font-bold text-sm md:text-base">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us more about your requirements..." 
                                  className="min-h-[120px] md:min-h-[150px] rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-secondary transition-all"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 md:py-7 text-base md:text-lg font-bold group shadow-lg transition-all active:scale-95"
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

            {/* Contact Info Cards - Second on Mobile */}
            <div className="order-2 lg:order-1 lg:col-span-1 space-y-4 md:space-y-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-[24px] md:rounded-[30px] overflow-hidden group">
                    <CardContent className="p-6 md:p-8 flex items-start gap-4 md:gap-6">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${item.color}`}>
                        <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary mb-1">{item.title}</h3>
                        <p className="text-primary font-semibold mb-1 text-sm md:text-base">{item.details}</p>
                        <p className="text-gray-500 text-xs md:text-sm">{item.description}</p>
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
                <Card className="border-none shadow-xl bg-primary text-white rounded-[24px] md:rounded-[30px] overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                      <h3 className="text-lg md:text-xl font-bold">Working Hours</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3 opacity-90 text-sm md:text-base">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
