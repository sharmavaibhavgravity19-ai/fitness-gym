import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '@/context/AuthContext';
import { useBooking, Booking } from '@/context/BookingContext';
import { trainers, programs } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { 
  Calendar, 
  Clock, 
  User, 
  Activity, 
  TrendingUp, 
  Bell, 
  Plus, 
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();
  const { addBooking, cancelBooking, getUserBookings } = useBooking();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [newBooking, setNewBooking] = useState({ trainerId: '', classType: '', date: '', time: '' });

  const userBookings = getUserBookings(user?.id || '');
  
  const progressData = [
    { name: 'Mon', weight: 82 },
    { name: 'Tue', weight: 81.5 },
    { name: 'Wed', weight: 81.8 },
    { name: 'Thu', weight: 81.2 },
    { name: 'Fri', weight: 80.9 },
    { name: 'Sat', weight: 80.5 },
    { name: 'Sun', weight: 80.2 },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trainer = trainers.find(t => t.id === newBooking.trainerId);
    if (user && trainer) {
      addBooking({
        userId: user.id,
        trainerId: trainer.id,
        trainerName: trainer.name,
        classType: newBooking.classType,
        date: newBooking.date,
        time: newBooking.time
      });
      setIsBookingModalOpen(false);
      setNewBooking({ trainerId: '', classType: '', date: '', time: '' });
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl uppercase italic mb-2">Welcome Back, <span className="text-neon-green">{user?.name}</span></h1>
            <p className="text-gray-400">Track your progress and manage your sessions.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="neon" onClick={() => setIsBookingModalOpen(true)}>
              <Plus className="w-5 h-5 mr-2" />
              Book Session
            </Button>
            <div className="relative p-3 glass-card rounded-2xl cursor-pointer hover:bg-dark-surface transition-colors">
              <Bell className="w-6 h-6 text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-neon-green rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Current Plan', value: user?.membership || 'Starter', icon: CheckCircle2, color: 'text-neon-green' },
            { label: 'Sessions This Month', value: '12', icon: Activity, color: 'text-electric-blue' },
            { label: 'Calories Burned', value: '8,450', icon: TrendingUp, color: 'text-neon-green' },
            { label: 'Next Session', value: userBookings.length > 0 ? new Date(userBookings[0].date).toLocaleDateString('en-US') : 'None', icon: Clock, color: 'text-electric-blue' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-3xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-2xl bg-white/5", stat.color)}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-2xl font-display font-black mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Progress & Bookings */}
          <div className="lg:col-span-2 space-y-12">
            {/* Progress Chart */}
            <div className="glass-card p-8 rounded-[2.5rem]">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl uppercase italic">Weight Progress</h3>
                <select className="bg-dark-bg border border-dark-border rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest outline-none focus:border-neon-green transition-colors">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={progressData}>
                    <defs>
                      <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
                    <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#121212', border: '1px solid #1F1F1F', borderRadius: '12px' }}
                      itemStyle={{ color: '#39FF14' }}
                    />
                    <Area type="monotone" dataKey="weight" stroke="#39FF14" strokeWidth={3} fillOpacity={1} fill="url(#colorWeight)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="glass-card p-8 rounded-[2.5rem]">
              <h3 className="text-xl uppercase italic mb-8">Upcoming Sessions</h3>
              <div className="space-y-4">
                {userBookings.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-dark-border rounded-3xl">
                    <Calendar className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-500">No sessions booked yet.</p>
                    <Button variant="ghost" size="sm" className="mt-4" onClick={() => setIsBookingModalOpen(true)}>Book your first session</Button>
                  </div>
                ) : (
                  userBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-6 bg-dark-bg/50 border border-dark-border rounded-3xl hover:border-neon-green/30 transition-colors group">
                      <div className="flex items-center gap-6">
                        <div className="bg-neon-green/10 p-4 rounded-2xl border border-neon-green/20">
                          <Calendar className="w-6 h-6 text-neon-green" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg leading-none mb-1">{booking.classType}</h4>
                          <p className="text-sm text-gray-500">with {booking.trainerName}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-12">
                        <div className="hidden md:block text-right">
                          <div className="text-sm font-bold text-white">{booking.date}</div>
                          <div className="text-xs text-gray-500 uppercase tracking-widest">{booking.time}</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={cn(
                            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                            booking.status === 'confirmed' ? "bg-neon-green/10 text-neon-green" : "bg-red-500/10 text-red-500"
                          )}>
                            {booking.status}
                          </span>
                          {booking.status === 'confirmed' && (
                            <button 
                              onClick={() => cancelBooking(booking.id)}
                              className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Profile & Notifications */}
          <div className="space-y-12">
            {/* Profile Card */}
            <div className="glass-card p-8 rounded-[2.5rem] text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-neon-green/20 blur-xl rounded-full" />
                <div className="relative w-full h-full rounded-full border-2 border-neon-green p-1">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`} 
                    alt="Avatar" 
                    className="w-full h-full rounded-full bg-dark-surface"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-neon-green text-black p-2 rounded-full border-4 border-dark-surface">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-2xl uppercase italic mb-1">{user?.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{user?.email}</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-xl font-display font-black">185</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Weight (lbs)</div>
                </div>
                <div className="w-px h-10 bg-dark-border" />
                <div className="text-center">
                  <div className="text-xl font-display font-black">12%</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Body Fat</div>
                </div>
                <div className="w-px h-10 bg-dark-border" />
                <div className="text-center">
                  <div className="text-xl font-display font-black">42</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Workouts</div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="glass-card p-8 rounded-[2.5rem]">
              <h3 className="text-xl uppercase italic mb-8">Notifications</h3>
              <div className="space-y-6">
                {[
                  { title: 'New Program Available', time: '2h ago', icon: Activity, color: 'text-neon-green' },
                  { title: 'Membership Renewing Soon', time: '1d ago', icon: AlertCircle, color: 'text-yellow-500' },
                  { title: 'Session Confirmed', time: '2d ago', icon: CheckCircle2, color: 'text-electric-blue' },
                ].map((notif, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={cn("p-2 rounded-xl bg-white/5 h-fit", notif.color)}>
                      <notif.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold leading-tight">{notif.title}</h4>
                      <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsBookingModalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative z-10 w-full max-w-lg glass-card p-10 rounded-[3rem] border-neon-green/20"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl uppercase italic">Book a <span className="text-neon-green">Session</span></h2>
              <button onClick={() => setIsBookingModalOpen(false)} className="text-gray-500 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Select Trainer</label>
                <select 
                  required
                  value={newBooking.trainerId}
                  onChange={(e) => setNewBooking({...newBooking, trainerId: e.target.value})}
                  className="w-full bg-dark-bg border border-dark-border rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-green transition-colors text-white appearance-none"
                >
                  <option value="">Choose a trainer</option>
                  {trainers.map(t => <option key={t.id} value={t.id}>{t.name} - {t.role}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Class Type</label>
                <select 
                  required
                  value={newBooking.classType}
                  onChange={(e) => setNewBooking({...newBooking, classType: e.target.value})}
                  className="w-full bg-dark-bg border border-dark-border rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-green transition-colors text-white appearance-none"
                >
                  <option value="">Choose a class</option>
                  {programs.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                  <option value="Personal Training">Personal Training</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Date</label>
                  <input 
                    type="date" 
                    required
                    value={newBooking.date}
                    onChange={(e) => setNewBooking({...newBooking, date: e.target.value})}
                    className="w-full bg-dark-bg border border-dark-border rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-green transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Time</label>
                  <input 
                    type="time" 
                    required
                    value={newBooking.time}
                    onChange={(e) => setNewBooking({...newBooking, time: e.target.value})}
                    className="w-full bg-dark-bg border border-dark-border rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-green transition-colors text-white"
                  />
                </div>
              </div>

              <Button variant="neon" size="lg" className="w-full mt-4">
                Confirm Booking
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
