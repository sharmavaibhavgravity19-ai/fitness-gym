import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-green font-bold uppercase tracking-widest mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl uppercase italic mb-8 leading-none"
          >
            Contact <span className="text-neon-green">Us</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl uppercase italic mb-10">We're Here to <span className="text-neon-green">Help</span></h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have questions about our memberships, classes, or personal training? Reach out and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-neon-green/10 p-4 rounded-2xl border border-neon-green/20">
                  <MapPin className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Our Location</h4>
                  <p className="text-gray-400">205 Mission Ave A, Cashmere, WA 98815</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-neon-green/10 p-4 rounded-2xl border border-neon-green/20">
                  <Phone className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Phone Number</h4>
                  <p className="text-gray-400">+1 (509) 782-4671</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-neon-green/10 p-4 rounded-2xl border border-neon-green/20">
                  <Mail className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Email Address</h4>
                  <p className="text-gray-400">info@midvalleyfitness.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/midvalleyfitness/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-2xl hover:text-neon-green transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/midvalleyfitness/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-2xl hover:text-neon-green transition-all">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-10 md:p-12 rounded-[3rem] border-neon-green/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-dark-bg border border-dark-border rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-green transition-colors text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="name@example.com"
                    className="w-full bg-dark-bg border border-dark-border rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-green transition-colors text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="How can we help you?"
                    className="w-full bg-dark-bg border border-dark-border rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-green transition-colors text-white resize-none"
                  />
                </div>

                <Button variant="neon" size="lg" className="w-full" isLoading={isSent}>
                  {isSent ? 'Message Sent!' : 'Send Message'}
                  {!isSent && <Send className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Simulation */}
        <div className="mt-32 h-[500px] rounded-[3rem] overflow-hidden border border-dark-border relative group">
          <div className="absolute inset-0 bg-dark-bg/40 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.123456789!2d-120.47!3d47.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzEyLjAiTiAxMjDCsDI4JzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-8 left-8 z-20 glass-card p-6 rounded-2xl max-w-xs">
            <h4 className="font-bold text-neon-green mb-2">Mid Valley Fitness</h4>
            <p className="text-xs text-gray-400">205 Mission Ave A, Cashmere, WA 98815</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
