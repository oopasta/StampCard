export interface PunchCard {
  id: string;
  name: string;
  reward: string;
  totalPoints: 5 | 8 | 14;
  currentPoints: number;
  createdAt: Date;
  expiresAt: Date;
  completed: boolean;
  expired: boolean;
  punchedDates: Date[];
  color: CardColorTheme;
}

export interface PunchCardFormData {
  name: string;
  reward: string;
  totalPoints: 5 | 8 | 14;
  color: CardColorTheme;
}

export type CardColorTheme = 
  | 'blue'
  | 'green' 
  | 'purple'
  | 'orange'
  | 'pink'
  | 'teal'
  | 'red'
  | 'indigo';

export const COLOR_THEMES: Record<CardColorTheme, {
  name: string;
  preview: string;
  gradient: string;
  completed: string;
  next: string;
  background: string;
  accent: string;
}> = {
  blue: {
    name: '海洋藍',
    preview: 'bg-gradient-to-r from-blue-400 to-blue-600',
    gradient: 'from-blue-400 to-blue-600',
    completed: 'from-blue-400 to-blue-600 border-blue-500',
    next: 'border-blue-400 hover:border-blue-500 hover:bg-blue-50',
    background: 'bg-blue-50',
    accent: 'text-blue-700'
  },
  green: {
    name: '森林綠',
    preview: 'bg-gradient-to-r from-green-400 to-green-600',
    gradient: 'from-green-400 to-green-600',
    completed: 'from-green-400 to-green-600 border-green-500',
    next: 'border-green-400 hover:border-green-500 hover:bg-green-50',
    background: 'bg-green-50',
    accent: 'text-green-700'
  },
  purple: {
    name: '紫羅蘭',
    preview: 'bg-gradient-to-r from-purple-400 to-purple-600',
    gradient: 'from-purple-400 to-purple-600',
    completed: 'from-purple-400 to-purple-600 border-purple-500',
    next: 'border-purple-400 hover:border-purple-500 hover:bg-purple-50',
    background: 'bg-purple-50',
    accent: 'text-purple-700'
  },
  orange: {
    name: '夕陽橘',
    preview: 'bg-gradient-to-r from-orange-400 to-orange-600',
    gradient: 'from-orange-400 to-orange-600',
    completed: 'from-orange-400 to-orange-600 border-orange-500',
    next: 'border-orange-400 hover:border-orange-500 hover:bg-orange-50',
    background: 'bg-orange-50',
    accent: 'text-orange-700'
  },
  pink: {
    name: '櫻花粉',
    preview: 'bg-gradient-to-r from-pink-400 to-pink-600',
    gradient: 'from-pink-400 to-pink-600',
    completed: 'from-pink-400 to-pink-600 border-pink-500',
    next: 'border-pink-400 hover:border-pink-500 hover:bg-pink-50',
    background: 'bg-pink-50',
    accent: 'text-pink-700'
  },
  teal: {
    name: '青綠色',
    preview: 'bg-gradient-to-r from-teal-400 to-teal-600',
    gradient: 'from-teal-400 to-teal-600',
    completed: 'from-teal-400 to-teal-600 border-teal-500',
    next: 'border-teal-400 hover:border-teal-500 hover:bg-teal-50',
    background: 'bg-teal-50',
    accent: 'text-teal-700'
  },
  red: {
    name: '熱情紅',
    preview: 'bg-gradient-to-r from-red-400 to-red-600',
    gradient: 'from-red-400 to-red-600',
    completed: 'from-red-400 to-red-600 border-red-500',
    next: 'border-red-400 hover:border-red-500 hover:bg-red-50',
    background: 'bg-red-50',
    accent: 'text-red-700'
  },
  indigo: {
    name: '靛青色',
    preview: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
    gradient: 'from-indigo-400 to-indigo-600',
    completed: 'from-indigo-400 to-indigo-600 border-indigo-500',
    next: 'border-indigo-400 hover:border-indigo-500 hover:bg-indigo-50',
    background: 'bg-indigo-50',
    accent: 'text-indigo-700'
  }
};