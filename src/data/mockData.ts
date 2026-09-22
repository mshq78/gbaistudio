import {
  UserProfile,
  ActiveEvent,
  MicroLearningByte,
  ActiveChallenge,
  RecentAchievement,
  AppNotification,
  LearningDomain,
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

export const learningDomains: LearningDomain[] = [
  {
    id: 'dom_org',
    name: 'شایستگی‌های فردی و سازمانی',
    shortName: 'شایستگی‌های سازمانی',
    focusTitle: 'مسیر جامع شایستگی‌های فردی و سازمانی',
    completedBytes: 1,
    totalBytes: 4,
    activePathTitle: 'مسیر جامع شایستگی‌های فردی و سازمانی',
    certificateTitle: 'گواهی شایستگی‌های فردی و سازمانی پردیس گرا',
    currentUnit: {
      id: 'unit_comm_clarity',
      unitNumber: 1,
      title: 'فصل اول: ارتباطات اثربخش و شفافیت کلامی',
      description: 'اصول انتقال پیام بدون سوءبرداشت، شنیدن فعال و بستن حلقه‌های ابهام',
      lessons: [
        {
          id: 'byte_clarity_dialogue',
          title: 'شفافیت در بیان: گفتگوی بدون ابهام',
          durationMinutes: 3,
          xp: 15,
          state: 'done',
          order: 1,
        },
        {
          id: 'byte_active_listening',
          title: 'شنیدن فعال: تمایز واژه‌ها و پیام',
          durationMinutes: 3,
          xp: 10,
          state: 'in_progress',
          order: 2,
        },
        {
          id: 'byte_constructive_feedback',
          title: 'بازخورد سازنده بدون تخریب عزت‌نفس',
          durationMinutes: 4,
          xp: 10,
          state: 'locked',
          order: 3,
        },
        {
          id: 'byte_cross_dept_misunderstandings',
          title: 'مدیریت سوءتفاهم‌های بین‌بخشی',
          durationMinutes: 3,
          xp: 10,
          state: 'locked',
          order: 4,
        },
      ],
      checkpoint: {
        id: 'chk_unit_1',
        title: 'ارزیابی فصل اول: ارتباطات اثربخش',
        durationMinutes: 5,
        xp: 20,
        state: 'locked',
      },
    },
  },
  {
    id: 'dom_family',
    name: 'خانواده و تعادل کار و زندگی',
    shortName: 'تعادل کار و زندگی',
  },
  {
    id: 'dom_ethics',
    name: 'اخلاق حرفه‌ای و تعهد کاری',
    shortName: 'اخلاق و تعهد',
  },
  {
    id: 'dom_self_lead',
    name: 'توسعه فردی و خودرهبری',
    shortName: 'توسعه فردی و خودرهبری',
  },
  {
    id: 'dom_safety',
    name: 'ایمنی و فرهنگ پیشگیری',
    shortName: 'ایمنی و پیشگیری',
  },
];
