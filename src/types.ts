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

export type LessonState = 'done' | 'in_progress' | 'available' | 'locked' | 'paywalled';

export interface LessonItem {
  id: string;
  title: string;
  durationMinutes: number;
  xp: number;
  state: LessonState;
  order: number;
}

export interface CheckpointItem {
  id: string;
  title: string;
  durationMinutes: number;
  xp: number;
  state: 'locked' | 'available' | 'done';
}

export interface LearningUnit {
  id: string;
  unitNumber: number;
  title: string;
  description?: string;
  lessons: LessonItem[];
  checkpoint?: CheckpointItem;
}

export interface LearningDomain {
  id: string;
  name: string;
  shortName: string;
  focusTitle: string;
  completedBytes: number;
  totalBytes: number;
  activePathTitle: string;
  currentUnit: LearningUnit;
  certificateTitle?: string;
}

export type NavTab = 'home' | 'learning' | 'profile';
