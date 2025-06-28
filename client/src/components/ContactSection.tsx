import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setForm({ name: '', email: '', message: '' });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      contactMutation.mutate(form);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: "✉️",
      label: "Email",
      value: "sarang@thapar.edu",
      color: "var(--purple-primary)",
      href: "mailto:sarang@thapar.edu"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      color: "var(--blue-primary)",
      href: "https://linkedin.com/in/sarang-aiml"
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "View my code",
      color: "var(--emerald-accent)",
      href: "https://github.com/sarang-dev"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to collaborate on something amazing? Let's build the future together!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group transition-colors duration-300 hover:text-white"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-white">{info.label}</div>
                    <div className="text-gray-400 group-hover:text-gray-300">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--dark-secondary)]/50 border border-gray-600 rounded-lg focus:border-[var(--purple-primary)] focus:outline-none transition-colors"
                />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--dark-secondary)]/50 border border-gray-600 rounded-lg focus:border-[var(--purple-primary)] focus:outline-none transition-colors"
                />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--dark-secondary)]/50 border border-gray-600 rounded-lg focus:border-[var(--purple-primary)] focus:outline-none transition-colors resize-none"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full px-8 py-3 bg-[var(--purple-primary)] hover:bg-[var(--purple-primary)]/80 rounded-lg font-semibold glow-effect transition-all duration-300 magnetic-hover disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
