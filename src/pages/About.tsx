import React from 'react';
import { motion } from 'motion/react';
import { trainers } from '@/data/mockData';
import { CheckCircle2, Award, Users, Heart, Dumbbell, Wind, Zap, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
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
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-green font-bold uppercase tracking-widest mb-4 block">Corporate Profile</span>
            <h1 className="text-5xl md:text-7xl uppercase italic mb-8 leading-tight">
              Built on <br /> <span className="text-neon-green">Performance.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Mid Valley Fitness is a premier fitness facility based in Cashmere, Washington. Our mission is to provide a high-performance environment that facilitates measurable results for our members. We prioritize operational excellence, consistent service delivery, and a community-centric approach to health and wellness.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our facility is equipped with industry-standard strength and conditioning equipment, designed to meet the rigorous demands of both competitive athletes and fitness enthusiasts. We are committed to maintaining a professional standard that empowers our community to achieve their peak physical potential.
            </p>
            <div className="space-y-4">
              {[
                'Results-oriented training methodology',
                'Certified professional coaching staff',
                'High-grade industrial strength equipment',
                'Strategic performance tracking systems'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-neon-green/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1571902251103-d71b46b5fce3?auto=format&fit=crop&q=80&w=1200" 
              alt="Gym Interior" 
              className="relative z-10 rounded-[3rem] border border-dark-border shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Award, label: 'Years Experience', value: '15+' },
            { icon: Users, label: 'Happy Members', value: '2k+' },
            { icon: Heart, label: 'Lives Changed', value: '500+' },
            { icon: Award, label: 'Certifications', value: '25+' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl text-center">
              <stat.icon className="w-10 h-10 text-neon-green mx-auto mb-6" />
              <div className="text-4xl font-display font-black mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl uppercase italic mb-6">Meet Our <span className="text-neon-green">Experts</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our trainers are certified professionals dedicated to your safety and progress.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] mb-8 border border-dark-border bg-dark-surface/50">
                {trainer.image ? (
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                      
                      {/* Abstract Shapes */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl" />
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-green/5 rounded-full blur-3xl" />
                    </div>
                  );
                })()}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-2xl uppercase italic mb-2">{trainer.name}</h3>
              <p className="text-neon-green font-bold text-sm uppercase tracking-widest mb-4">{trainer.role}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{trainer.bio}</p>
              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map(s => (
                  <span key={s} className="text-[10px] font-black uppercase tracking-tighter bg-dark-surface border border-dark-border px-3 py-1 rounded-full text-gray-400">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
