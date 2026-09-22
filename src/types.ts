export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  streakDays: number;
  todayCompletedBytes: number;
  todayTotalBytes: number;
  growthPoints: number; // XP
}

export interface ActiveEvent {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  statusText: string;
  ctaText: string;
}

export interface MicroLearningByte {
  id: string;
  title: string;
  durationMinutes: number;
  progressPercent: number;
}

export interface ActiveChallenge {
  id: string;
  title: string;
  currentDay: number;
  totalDays: number;
  todayTaskTitle: string;
  completedToday: boolean;
}

export interface RecentAchievement {
  id: string;
  title: string;
  earnedDate: string;
}

export interface AppNotification {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  read: boolean;
}

export type NavTab = 'home' | 'learning' | 'profile';
