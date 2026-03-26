import React from 'react';
import { motion } from 'motion/react';
import { blogPosts } from '@/data/mockData';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-green font-bold uppercase tracking-widest mb-4 block"
          >
            Fitness Knowledge
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl uppercase italic mb-8 leading-none"
          >
            Our <span className="text-neon-green">Blog</span>
          </motion.h1>
          
          <div className="max-w-md mx-auto relative mt-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full bg-dark-surface border border-dark-border rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-neon-green transition-colors text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-[400px] overflow-hidden rounded-[3rem] mb-8 border border-dark-border">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-neon-green text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-neon-green" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-neon-green" />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl uppercase italic mb-4 group-hover:text-neon-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                
                <Button variant="outline" className="group/btn">
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="glass-card p-8 rounded-[2.5rem]">
              <h3 className="text-xl uppercase italic mb-6">Categories</h3>
              <ul className="space-y-4">
                {['Training', 'Nutrition', 'Lifestyle', 'Recovery', 'Community'].map(cat => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center text-gray-400 hover:text-neon-green transition-colors group">
                      <span className="font-medium">{cat}</span>
                      <span className="bg-dark-bg px-2 py-1 rounded text-[10px] font-bold group-hover:bg-neon-green group-hover:text-black transition-colors">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] bg-neon-green text-black">
              <h3 className="text-xl uppercase italic mb-4">Newsletter</h3>
              <p className="text-black/70 text-sm font-medium mb-6">Get the latest fitness tips and gym updates delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-white/20 border border-black/10 rounded-2xl py-3 px-4 mb-4 placeholder:text-black/40 focus:outline-none"
              />
              <Button className="w-full bg-black text-white hover:bg-gray-900">Subscribe</Button>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem]">
              <h3 className="text-xl uppercase italic mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {blogPosts.map(post => (
                  <a key={post.id} href="#" className="flex gap-4 group">
                    <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-dark-border">
                      <img src={post.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold leading-tight group-hover:text-neon-green transition-colors">{post.title}</h4>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold">{post.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
