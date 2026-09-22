export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  organization: string;
  avatarUrl: string;
  streakDays: number;
  todayCompletedBytes: number;
  todayTotalBytes: number;
  growthPoints: number; // XP
  currentLevel: string;
}

export interface ActiveEvent {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  time: string;
  dateText: string;
  location: string;
  room: string;
  statusText: string;
  ctaText: string;
  attendeesCount: number;
  agendaItems: {
    time: string;
    title: string;
    speaker: string;
    current?: boolean;
  }[];
}

export interface MicroLearningByte {
  id: string;
  title: string;
  category: string;
  durationMinutes: number;
  progressPercent: number;
  currentStep: number;
  totalSteps: number;
  keyTakeaway: string;
}

export interface ActiveChallenge {
  id: string;
  title: string;
  currentDay: number;
  totalDays: number;
  theme: string;
  rewardPoints: number;
  todayTaskTitle: string;
  completedToday: boolean;
}

export interface RecentAchievement {
  id: string;
  title: string;
  subtitle: string;
  earnedDate: string;
  type: 'badge' | 'certificate' | 'milestone';
}

export interface AppNotification {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  read: boolean;
  type: 'event' | 'learning' | 'challenge';
}

export type NavTab = 'home' | 'learning' | 'profile';
