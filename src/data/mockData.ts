import {
  UserProfile,
  ActiveEvent,
  MicroLearningByte,
  ActiveChallenge,
  RecentAchievement,
  AppNotification,
} from '../types.ts';

export const currentUser: UserProfile = {
  id: 'usr_sara_01',
  firstName: 'سارا',
  lastName: 'محمدی',
  title: 'کارشناس توسعه سازمانی',
  organization: 'گروه صنعتی پایا',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  streakDays: 5,
  todayCompletedBytes: 2,
  todayTotalBytes: 3,
  growthPoints: 340,
  currentLevel: 'توسعه‌گر نقره‌ای',
};

export const activeEvent: ActiveEvent = {
  id: 'evt_hamta_2026',
  title: 'همتا',
  subtitle: 'بوتکمپ توسعه شایستگی',
  category: 'رویداد سازمانی',
  time: 'امروز، ساعت ۸:۳۰',
  dateText: 'سه‌شنبه ۱ مهر',
  location: 'پردیس / مجموعه برگزاری',
  room: 'تالار نوآوری رازی • طبقه ۳',
  statusText: 'پذیرش حضوری آغاز شد',
  ctaText: 'ورود به رویداد',
  attendeesCount: 48,
  agendaItems: [
    {
      time: '۰۸:۳۰ - ۰۹:۰۰',
      title: 'پذیرش و پذیرایی صبحگاهی',
      speaker: 'دبیرخانه رویداد',
      current: false,
    },
    {
      time: '۰۹:۰۰ - ۱۰:۳۰',
      title: 'کارگاه تعاملی: حل تعارضات تیمی در محیط‌های پویا',
      speaker: 'دکتر علیرضا کاظمی',
      current: true,
    },
    {
      time: '۱۰:۳۰ - ۱۱:۰۰',
      title: 'استراحت شبکه و گپ‌وگفت همتایی',
      speaker: 'پردیس گرا',
      current: false,
    },
    {
      time: '۱۱:۰۰ - ۱۲:۳۰',
      title: 'ارائه پروژه گروهی و هم‌افزایی شایستگی‌ها',
      speaker: 'تیم‌های بوتکمپ همتا',
      current: false,
    },
  ],
};

export const continueLearningByte: MicroLearningByte = {
  id: 'byte_active_listening',
  title: 'شنیدن فعال در محیط کار',
  category: 'ارتباطات مؤثر',
  durationMinutes: 3,
  progressPercent: 65,
  currentStep: 4,
  totalSteps: 6,
  keyTakeaway: 'پیش از پاسخ، لحن و احساس گوینده را در ذهن بازگویی کنید تا درک متقابل تثبیت شود.',
};

export const activeChallenge: ActiveChallenge = {
  id: 'chal_dialogue_7d',
  title: 'چالش ۷ روز گفت‌وگوی مؤثر',
  currentDay: 4,
  totalDays: 7,
  theme: 'مهارت‌های بین‌فردی',
  rewardPoints: 85,
  todayTaskTitle: 'پرسیدن حداقل دو پرسش باز در جلسات کاری امروز',
  completedToday: false,
};

export const recentAchievement: RecentAchievement = {
  id: 'ach_empathy_badge',
  title: 'نشان گوش دادن همدلانه',
  subtitle: 'کسب امتیاز کامل در ارزیابی شایستگی تعامل',
  earnedDate: 'دیروز',
  type: 'badge',
};

export const initialNotifications: AppNotification[] = [
  {
    id: 'notif_1',
    title: 'یادآوری بوتکمپ همتا',
    description: 'شروع بخش اول کارگاه تعاملی در تالار رازی تا ۳۰ دقیقه دیگر.',
    timeAgo: '۱۵ دقیقه پیش',
    read: false,
    type: 'event',
  },
  {
    id: 'notif_2',
    title: 'تکمیل گرابایت روزانه',
    description: 'تنها ۱ گرابایت تا حفظ رکورد ۵ روزه یادگیری پیوسته فاصله دارید.',
    timeAgo: '۲ ساعت پیش',
    read: false,
    type: 'learning',
  },
  {
    id: 'notif_3',
    title: 'چالش گفت‌وگوی مؤثر',
    description: 'روز چهارم چالش باز شد. تمرین امروز را ثبت کنید.',
    timeAgo: 'دیروز',
    read: true,
    type: 'challenge',
  },
];
