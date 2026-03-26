import React from 'react';
import { motion } from 'motion/react';
import { programs } from '@/data/mockData';
import { Dumbbell, Activity, Wind, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Dumbbell,
  Activity,
  Wind,
  User
};

const Programs = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-green font-bold uppercase tracking-widest mb-4 block"
          >
            Train Your Way
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl uppercase italic mb-8 leading-none"
          >
            Our <span className="text-neon-green">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We offer a variety of specialized training programs designed to help you achieve your specific fitness goals, whether it's strength, endurance, or flexibility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col gap-12 items-center",
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-neon-green/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] border border-dark-border"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="bg-neon-green/10 w-20 h-20 rounded-3xl flex items-center justify-center border border-neon-green/20">
                    <Icon className="w-10 h-10 text-neon-green" />
                  </div>
                  <h2 className="text-4xl md:text-6xl uppercase italic">{program.title}</h2>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Expert-led sessions',
                      'Personalized progression',
                      'State-of-the-art equipment',
                      'Community support'
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link to="/signup">
                      <Button variant="neon" size="lg" className="group">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Helper for cn in this file since I didn't import it
import { cn } from '@/lib/utils';

export default Programs;
