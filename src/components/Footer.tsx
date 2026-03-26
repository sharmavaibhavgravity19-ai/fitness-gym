import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-neon-green p-1.5 rounded-lg">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-display font-black tracking-tighter uppercase italic">
              Mid Valley <span className="text-neon-green">Fitness</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your hometown gym dedicated to community, consistency, and real results. Join the movement today.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/midvalleyfitness/" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-bg rounded-full hover:text-neon-green transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/midvalleyfitness/" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-bg rounded-full hover:text-neon-green transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-wider text-sm text-neon-green">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
            <li><Link to="/trainers" className="hover:text-white transition-colors">Trainers</Link></li>
            <li><Link to="/membership" className="hover:text-white transition-colors">Membership</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Fitness Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-wider text-sm text-neon-green">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-wider text-sm text-neon-green">Contact Info</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-neon-green shrink-0" />
              <span>205 Mission Ave A, Cashmere, WA 98815, United States</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-neon-green shrink-0" />
              <span>+1 (509) 782-4671</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-neon-green shrink-0" />
              <span>info@midvalleyfitness.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-dark-border flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-xs text-center">
        <p>© 2026 Mid Valley Fitness. All rights reserved.</p>
        <p>Designed for High Performance.</p>
      </div>
    </footer>
  );
};
