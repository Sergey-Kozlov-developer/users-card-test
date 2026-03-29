import type {User} from "@shared/types/user.ts";
import {create} from "zustand/react";
import {persist} from "zustand/middleware/persist";


interface UserStore {
    users: User[];
    archiveIds: number[];
    hiddenIds: number[];
    setUsers: (users: User[]) => void;
    archiveUser: (id: number) => void;
    activeUser: (id: number) => void;
    hideUser: (id: number) => void;
    updateUser: (id: number, data: Partial<User>) => void
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            users: [],
            archiveIds: [],
            hiddenIds: [],

            setUsers: (users) => set({ users }),

            archiveUser: (id) => set((state) => ({
                archiveIds: [...state.archiveIds, id]
            })),

            activeUser: (id) => set((state) => ({
                archiveIds: state.archiveIds.filter(archiveId => archiveId !== id),
            })),

            hideUser: (id) => set((state) => ({
                hiddenIds: [...state.hiddenIds, id]
            })),

            updateUser: (id, data) => set((state) => ({
                users: state.users.map(user =>
                    user.id === id ? { ...user, ...data } : user
                )
            })),

        }),
        {
            name: "user-storage",
        }
    ),


)