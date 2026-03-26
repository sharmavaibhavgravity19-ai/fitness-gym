import React from 'react';
import { motion } from 'motion/react';
import { membershipPlans } from '@/data/mockData';
import { CheckCircle2, XCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Membership = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-green font-bold uppercase tracking-widest mb-4 block"
          >
            Invest in Yourself
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl uppercase italic mb-8 leading-none"
          >
            Membership <span className="text-neon-green">Plans</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Flexible plans designed to fit your goals and budget. No hidden fees, just results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card p-12 rounded-[3rem] flex flex-col relative overflow-hidden",
                plan.recommended && "border-neon-green/50 neon-glow-green"
              )}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-neon-green text-black px-8 py-2 rotate-45 translate-x-8 translate-y-4 font-black text-[10px] uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-3xl uppercase italic mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-display font-black">{plan.price}</span>
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-6 mb-12 flex-grow">
                <p className="text-xs font-black uppercase tracking-widest text-gray-500">What's Included</p>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/signup">
                <Button variant={plan.recommended ? 'neon' : 'outline'} size="lg" className="w-full">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="hidden lg:block mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl uppercase italic">Plan <span className="text-neon-green">Comparison</span></h2>
          </div>
          
          <div className="glass-card rounded-[3rem] overflow-hidden border-dark-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-gray-500">Features</th>
                  {membershipPlans.map(p => (
                    <th key={p.id} className="p-8 text-xl uppercase italic text-center">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Gym Floor Access',
                  'Locker Rooms',
                  'Group Classes',
                  'Guest Passes',
                  'Personal Training',
                  'Nutrition Guide',
                  'Sauna & Recovery',
                  'Mobile App'
                ].map((feature, i) => (
                  <tr key={feature} className={cn("border-b border-dark-border/50", i % 2 === 0 ? "bg-white/5" : "")}>
                    <td className="p-8 text-sm font-medium text-gray-300">{feature}</td>
                    <td className="p-8 text-center">
                      <CheckCircle2 className="w-5 h-5 text-neon-green mx-auto" />
                    </td>
                    <td className="p-8 text-center">
                      {i > 1 ? <CheckCircle2 className="w-5 h-5 text-neon-green mx-auto" /> : <XCircle className="w-5 h-5 text-gray-700 mx-auto" />}
                    </td>
                    <td className="p-8 text-center">
                      {i > 3 ? <CheckCircle2 className="w-5 h-5 text-neon-green mx-auto" /> : <XCircle className="w-5 h-5 text-gray-700 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl uppercase italic">Common <span className="text-neon-green">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is there a contract?', a: 'We offer both month-to-month and annual plans. Our annual plans offer the best value.' },
              { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 3 months per year for a small fee.' },
              { q: 'Are classes included?', a: 'Classes are included in our Pro and Elite plans. Starter members can purchase class passes separately.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl">
                <h4 className="font-bold text-white mb-2 flex items-center gap-3">
                  <Info className="w-4 h-4 text-neon-green" />
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
