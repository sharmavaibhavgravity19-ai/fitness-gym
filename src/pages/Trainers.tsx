import React from 'react';
import { motion } from 'motion/react';
import { trainers } from '@/data/mockData';
import { ArrowRight, Dumbbell, Wind, Zap, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Trainers = () => {
  const getTrainerPlaceholder = (id: string) => {
    switch (id) {
      case '1':
        return {
          icon: Dumbbell,
          gradient: 'from-neon-green/20 via-neon-green/5 to-transparent',
          accent: 'text-neon-green'
        };
      case '2':
        return {
          icon: Wind,
          gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
          accent: 'text-blue-400'
        };
      case '3':
        return {
          icon: Zap,
          gradient: 'from-orange-500/20 via-orange-500/5 to-transparent',
          accent: 'text-orange-400'
        };
      default:
        return {
          icon: User,
          gradient: 'from-gray-500/20 via-gray-500/5 to-transparent',
          accent: 'text-gray-400'
        };
    }
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
            The Best in the Business
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl uppercase italic mb-8 leading-none"
          >
            Our <span className="text-neon-green">Trainers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Certified professionals dedicated to helping you reach your peak performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] mb-8 border border-dark-border bg-dark-surface/50 group-hover:border-neon-green/30 transition-colors duration-500">
                {trainer.image ? (
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (() => {
                  const { icon: Icon, gradient, accent } = getTrainerPlaceholder(trainer.id);
                  return (
                    <div className={cn(
                      "w-full h-full flex flex-col items-center justify-center relative overflow-hidden",
                      gradient
                    )}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-50" />
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className={cn("relative z-10", accent)}
                      >
                        <Icon size={80} strokeWidth={1.5} />
                      </motion.div>
                      
                      {/* Abstract Shapes for "Liveliness" */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl" />
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-green/5 rounded-full blur-3xl" />
                    </div>
                  );
                })()}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-end items-end">
                  <Link to={`/contact?trainer=${trainer.id}`}>
                    <Button variant="neon" size="sm" className="rounded-2xl">Book</Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl uppercase italic leading-none mb-1">{trainer.name}</h3>
                    <p className="text-neon-green font-bold text-xs uppercase tracking-widest">{trainer.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {trainer.bio}
                </p>

                <div className="space-y-4 pt-4">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map(s => (
                        <span key={s} className="text-[10px] font-bold uppercase bg-dark-surface px-3 py-1 rounded-full border border-dark-border">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map(c => (
                        <span key={c} className="text-[10px] font-bold uppercase text-gray-400">
                          • {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-neon-green/5 pointer-events-none" />
          <h2 className="text-4xl md:text-6xl uppercase italic mb-8 relative z-10">
            Want to Join Our <span className="text-neon-green">Team?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 relative z-10">
            We are always looking for passionate, certified fitness professionals to join the Mid Valley family.
          </p>
          <Link to="/contact" className="relative z-10">
            <Button variant="outline" size="lg">Apply Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
