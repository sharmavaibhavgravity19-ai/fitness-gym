import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Play, Users, Trophy, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trainers, programs, membershipPlans } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-neon-green/10 text-neon-green text-sm font-bold uppercase tracking-widest mb-6 border border-neon-green/20">
              Mid Valley Fitness • Cashmere, WA
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-8 uppercase italic">
              Unleash Your <br />
              <span className="text-neon-green">Inner Beast</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Your hometown gym dedicated to community, consistency, and real results. Old school equipment meets modern performance.
            </p>
            <div className="flex flex-col sm:row gap-4">
              <Link to="/signup">
                <Button variant="neon" size="lg" className="w-full sm:w-auto group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-6 right-6 z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Members', value: '500+' },
              { label: 'Expert Trainers', value: '12+' },
              { label: 'Classes Weekly', value: '45+' },
              { label: 'Success Stories', value: '1000+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="text-3xl font-display font-black text-neon-green mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 px-6 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl uppercase italic mb-6">
                Why Choose <span className="text-neon-green">Mid Valley?</span>
              </h2>
              <p className="text-gray-400 text-lg">
                We provide a welcoming space for all ages and fitness levels. Our old school equipment includes free weights, cardio machines, and functional training areas.
              </p>
            </div>
            <Link to="/about">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Community First', desc: 'A hometown feel where everyone knows your name and supports your journey.' },
              { icon: Target, title: 'Real Results', desc: 'No gimmicks. Just hard work, consistency, and the tools you need to succeed.' },
              { icon: Trophy, title: 'Expert Guidance', desc: 'Our trainers are certified professionals dedicated to your safety and progress.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-3xl"
              >
                <div className="bg-neon-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-neon-green/20">
                  <item.icon className="w-8 h-8 text-neon-green" />
                </div>
                <h3 className="text-2xl mb-4 uppercase italic">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl uppercase italic mb-6">Our <span className="text-neon-green">Programs</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From high-intensity cardio to mindful yoga, we have something for everyone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Link key={program.id} to="/programs" className="group relative h-[400px] overflow-hidden rounded-3xl">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-display font-bold uppercase italic mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl uppercase italic mb-6">Membership <span className="text-neon-green">Plans</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your lifestyle and goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={cn(
                  "glass-card p-10 rounded-3xl flex flex-col relative",
                  plan.recommended && "border-neon-green/50 neon-glow-green"
                )}
              >
                {plan.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-green text-black text-xs font-black uppercase px-4 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl uppercase italic mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-display font-black">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <Button variant={plan.recommended ? 'neon' : 'outline'} className="w-full">
                    Choose Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl uppercase italic mb-6">Success <span className="text-neon-green">Stories</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Jeff Givens', location: 'Cashmere, WA', text: 'Grew up in this place—it’s a great small town gym with a massive selection of equipment. Highly recommended for serious lifting.', rating: 5 },
              { name: 'Haven Salgado', location: 'Wenatchee, WA', text: 'Love the small gym feel and the owners are fantastic. They really care about the members and keep the facility in top shape.', rating: 5 },
              { name: 'Jonathan S.', location: 'Leavenworth, WA', text: 'A welcoming space for all fitness levels. The community here is supportive and the equipment is exactly what you need for real results.', rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Verified Member</span>
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-neon-green font-bold uppercase tracking-wider">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-neon-green rounded-[3rem] p-12 md:p-20 text-black flex flex-col md:row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic leading-none mb-6">
              Ready to <br /> Transform?
            </h2>
            <p className="text-black/70 font-medium max-w-md">
              Join Mid Valley Fitness today and get your first 3 days completely free. No commitment required.
            </p>
          </div>
          <Link to="/signup" className="relative z-10">
            <Button size="lg" className="bg-black text-white hover:bg-gray-900 px-12 py-6 text-xl">
              Join Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
