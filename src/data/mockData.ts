export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  certifications: string[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Head Trainer',
    bio: 'With over 10 years of experience in bodybuilding and strength conditioning, Alex helps you push past your limits.',
    image: '',
    specialties: ['Bodybuilding', 'Strength Training', 'Nutrition'],
    certifications: ['NASM CPT', 'Precision Nutrition Level 1']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Yoga & Mobility Specialist',
    bio: 'Sarah focuses on functional movement and flexibility to ensure long-term athletic performance and recovery.',
    image: '',
    specialties: ['Yoga', 'Mobility', 'Rehabilitation'],
    certifications: ['RYT 500', 'FMS Level 2']
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    role: 'HIIT & Cardio Coach',
    bio: 'High energy and high results. Marcus specializes in explosive movements and cardiovascular endurance.',
    image: '',
    specialties: ['HIIT', 'Endurance', 'Athletic Performance'],
    certifications: ['ACE CPT', 'CrossFit Level 1']
  }
];

export const programs: Program[] = [
  {
    id: '1',
    title: 'Weight Training',
    description: 'Build raw strength and muscle mass with our expert-led resistance programs.',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Cardio Blast',
    description: 'Improve your heart health and burn calories with high-intensity aerobic sessions.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Yoga & Zen',
    description: 'Find your balance and improve flexibility with our mindful yoga classes.',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Personal Training',
    description: 'One-on-one coaching tailored specifically to your unique fitness goals.',
    icon: 'User',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800'
  }
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Starter',
    price: '$29',
    period: 'month',
    features: [
      'Access to gym floor',
      'Locker room access',
      '1 Fitness assessment',
      'Mobile app access'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Athlete',
    price: '$59',
    period: 'month',
    features: [
      'All Starter features',
      'Unlimited group classes',
      'Guest passes (2/month)',
      'Nutrition guide',
      'Sauna access'
    ],
    recommended: true
  },
  {
    id: 'elite',
    name: 'Elite Performance',
    price: '$99',
    period: 'month',
    features: [
      'All Pro features',
      'Personal trainer (2 sessions/mo)',
      'Priority booking',
      'Recovery zone access',
      'Free merchandise'
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Tips for Consistent Gains',
    excerpt: 'Consistency is the key to any fitness journey. Learn how to stay motivated and disciplined.',
    content: 'Full article content here...',
    date: '03/15/2026',
    author: 'Alex Rivera',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    category: 'Training'
  },
  {
    id: '2',
    title: 'The Ultimate Post-Workout Meal',
    excerpt: 'What you eat after your workout is just as important as the workout itself.',
    content: 'Full article content here...',
    date: '03/10/2026',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    category: 'Nutrition'
  }
];
