import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '@/context/AuthContext';
import { useBooking } from '@/context/BookingContext';
import { trainers, programs } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { 
  Users, 
  Dumbbell, 
  Calendar, 
  BarChart3, 
  Settings, 
  Search, 
  MoreVertical,
  Edit,
  Trash2,
  Plus,
  Activity,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const Admin = () => {
  const { user } = useAuth();
  const { bookings } = useBooking();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'trainers' | 'bookings'>('overview');

  const analyticsData = [
    { name: 'Jan', revenue: 4500, members: 120 },
    { name: 'Feb', revenue: 5200, members: 145 },
    { name: 'Mar', revenue: 6100, members: 180 },
    { name: 'Apr', revenue: 5800, members: 175 },
    { name: 'May', revenue: 7200, members: 210 },
    { name: 'Jun', revenue: 8500, members: 250 },
  ];

  const planDistribution = [
    { name: 'Starter', value: 45, color: '#00E5FF' },
    { name: 'Pro', value: 35, color: '#39FF14' },
    { name: 'Elite', value: 20, color: '#FFFFFF' },
  ];

  const mockUsers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', plan: 'Pro Athlete', status: 'Active', joined: '01/15/2026' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', plan: 'Elite Performance', status: 'Active', joined: '02/10/2026' },
    { id: '3', name: 'Mike Ross', email: 'mike@example.com', plan: 'Starter', status: 'Inactive', joined: '11/20/2025' },
    { id: '4', name: 'Rachel Zane', email: 'rachel@example.com', plan: 'Pro Athlete', status: 'Active', joined: '03/05/2026' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl uppercase italic mb-2">Admin <span className="text-neon-green">Panel</span></h1>
            <p className="text-gray-400">Manage your gym operations and view analytics.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="neon" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Trainer
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'users', label: 'Members', icon: Users },
            { id: 'trainers', label: 'Trainers', icon: Dumbbell },
            { id: 'bookings', label: 'Bookings', icon: Calendar },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-neon-green text-black" 
                  : "bg-dark-surface text-gray-500 hover:text-white border border-dark-border"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Revenue', value: '$42,500', change: '+12%', icon: BarChart3 },
                { label: 'Total Members', value: '1,240', change: '+5%', icon: Users },
                { label: 'Active Sessions', value: '85', change: '+18%', icon: Activity },
                { label: 'Retention Rate', value: '94%', change: '+2%', icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-3xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 text-neon-green">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black text-neon-green bg-neon-green/10 px-2 py-1 rounded-full">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-display font-black mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 glass-card p-8 rounded-[2.5rem]">
                <h3 className="text-xl uppercase italic mb-8">Revenue Growth</h3>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
                      <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#121212', border: '1px solid #1F1F1F', borderRadius: '12px' }}
                        itemStyle={{ color: '#39FF14' }}
                      />
                      <Bar dataKey="revenue" fill="#39FF14" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="glass-card p-8 rounded-[2.5rem]">
                <h3 className="text-xl uppercase italic mb-8">Plan Distribution</h3>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={planDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {planDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#121212', border: '1px solid #1F1F1F', borderRadius: '12px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4 mt-4">
                  {planDistribution.map(p => (
                    <div key={p.name} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                        <span className="text-sm font-medium text-gray-400">{p.name}</span>
                      </div>
                      <span className="text-sm font-bold">{p.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="glass-card rounded-[2.5rem] overflow-hidden border-dark-border">
            <div className="p-8 border-b border-dark-border flex flex-col md:row justify-between items-center gap-4">
              <h3 className="text-xl uppercase italic">Member Directory</h3>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search members..."
                  className="w-full bg-dark-bg border border-dark-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neon-green"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dark-border text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <th className="p-8">Member</th>
                    <th className="p-8">Plan</th>
                    <th className="p-8">Status</th>
                    <th className="p-8">Joined</th>
                    <th className="p-8">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((u) => (
                    <tr key={u.id} className="border-b border-dark-border/50 hover:bg-white/5 transition-colors">
                      <td className="p-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center font-bold text-neon-green">
                            {u.name[0]}
                          </div>
                          <div>
                            <div className="font-bold">{u.name}</div>
                            <div className="text-xs text-gray-500">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-8">
                        <span className="text-xs font-bold text-gray-300">{u.plan}</span>
                      </td>
                      <td className="p-8">
                        <span className={cn(
                          "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                          u.status === 'Active' ? "bg-neon-green/10 text-neon-green" : "bg-red-500/10 text-red-500"
                        )}>
                          {u.status}
                        </span>
                      </td>
                      <td className="p-8 text-sm text-gray-500">{u.joined}</td>
                      <td className="p-8">
                        <div className="flex gap-2">
                          <button className="p-2 hover:text-neon-green transition-colors"><Edit className="w-4 h-4" /></button>
                          <button className="p-2 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="glass-card rounded-[2.5rem] overflow-hidden border-dark-border">
            <div className="p-8 border-b border-dark-border">
              <h3 className="text-xl uppercase italic">Recent Bookings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dark-border text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <th className="p-8">Class / Session</th>
                    <th className="p-8">Trainer</th>
                    <th className="p-8">Date & Time</th>
                    <th className="p-8">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-20 text-center text-gray-500">No bookings found in the system.</td>
                    </tr>
                  ) : (
                    bookings.map((b) => (
                      <tr key={b.id} className="border-b border-dark-border/50 hover:bg-white/5 transition-colors">
                        <td className="p-8 font-bold">{b.classType}</td>
                        <td className="p-8 text-gray-400">{b.trainerName}</td>
                        <td className="p-8">
                          <div className="text-sm font-bold">{b.date}</div>
                          <div className="text-xs text-gray-500">{b.time}</div>
                        </td>
                        <td className="p-8">
                          <span className={cn(
                            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                            b.status === 'confirmed' ? "bg-neon-green/10 text-neon-green" : "bg-red-500/10 text-red-500"
                          )}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
