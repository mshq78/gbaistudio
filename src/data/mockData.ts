import {
  UserProfile,
  ActiveEvent,
  MicroLearningByte,
  ActiveChallenge,
  RecentAchievement,
  AppNotification,
} from '../types.ts';

export const currentUser: UserProfile = {
  id: 'usr_sara',
  firstName: 'سارا',
  lastName: 'محمدی',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  streakDays: 5,
  todayCompletedBytes: 2,
  todayTotalBytes: 3,
  growthPoints: 340,
};

export const activeEvent: ActiveEvent = {
  id: 'evt_hamta',
  title: 'همتا',
  subtitle: 'بوتکمپ توسعه شایستگی',
  time: 'امروز، ساعت ۸:۳۰',
  location: 'محل برگزاری',
  statusText: 'رویداد فعال',
  ctaText: 'ورود به رویداد',
};

export const continueLearningByte: MicroLearningByte = {
  id: 'byte_active_listening',
  title: 'شنیدن فعال در محیط کار',
  durationMinutes: 3,
  progressPercent: 65,
};

export const activeChallenge: ActiveChallenge = {
  id: 'chal_dialogue',
  title: 'چالش ۷ روز گفت‌وگوی مؤثر',
  currentDay: 4,
  totalDays: 7,
  todayTaskTitle: 'پرسیدن حداقل دو پرسش باز در تعاملات امروز',
  completedToday: false,
};

export const recentAchievement: RecentAchievement = {
  id: 'ach_dialogue',
  title: 'نشان گفت‌وگوی سازنده',
  earnedDate: 'دیروز',
};

export const initialNotifications: AppNotification[] = [
  {
    id: 'notif_1',
    title: 'یادآوری رویداد همتا',
    description: 'شروع برنامه امروز ساعت ۸:۳۰ در محل برگزاری.',
    timeAgo: '۱۵ دقیقه پیش',
    read: false,
  },
  {
    id: 'notif_2',
    title: 'یادگیری روزانه',
    description: '۲ از ۳ گرابایت امروز انجام شده است.',
    timeAgo: '۲ ساعت پیش',
    read: false,
  },
];
