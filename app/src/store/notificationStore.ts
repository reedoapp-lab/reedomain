import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Notification } from '@/types';
import { mockNotifications } from '@/lib/mockData';

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  
  // Actions
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'>) => void;
  markAsRead: (notificationId: string) => void;
  markAllAsRead: (userId: string) => void;
  deleteNotification: (notificationId: string) => void;
  getUserNotifications: (userId: string) => Notification[];
  updateUnreadCount: (userId: string) => void;
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: mockNotifications,
      unreadCount: 0,

      addNotification: (notificationData) => {
        const newNotification: Notification = {
          id: String(Date.now()),
          ...notificationData,
          isRead: false,
          createdAt: new Date(),
        };
        
        set(state => ({
          notifications: [newNotification, ...state.notifications],
        }));
        
        get().updateUnreadCount(notificationData.userId);
      },

      markAsRead: (notificationId) => {
        const notification = get().notifications.find(n => n.id === notificationId);
        
        set(state => ({
          notifications: state.notifications.map(n =>
            n.id === notificationId ? { ...n, isRead: true } : n
          ),
        }));
        
        if (notification) {
          get().updateUnreadCount(notification.userId);
        }
      },

      markAllAsRead: (userId) => {
        set(state => ({
          notifications: state.notifications.map(n =>
            n.userId === userId ? { ...n, isRead: true } : n
          ),
        }));
        
        get().updateUnreadCount(userId);
      },

      deleteNotification: (notificationId) => {
        const notification = get().notifications.find(n => n.id === notificationId);
        
        set(state => ({
          notifications: state.notifications.filter(n => n.id !== notificationId),
        }));
        
        if (notification) {
          get().updateUnreadCount(notification.userId);
        }
      },

      getUserNotifications: (userId) => {
        return get().notifications
          .filter(n => n.userId === userId)
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      },

      updateUnreadCount: (userId) => {
        const count = get().notifications.filter(
          n => n.userId === userId && !n.isRead
        ).length;
        
        set({ unreadCount: count });
      },
    }),
    {
      name: 'notification-storage',
      partialize: (state) => ({ notifications: state.notifications }),
    }
  )
);
