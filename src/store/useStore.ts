import { create } from "zustand";

type State = {
  token: string | null;
  changeToken: () => void;
  role: string | null;
  changeRole: () => void;
  deleteData: () => void;
};

export const useStore = create<State>((set) => ({
  token: null,
  changeToken: () => set((s) => ({ token: s.token })),
  role: null,
  changeRole: () => set((s) => ({ role: s.role })),
  deleteData: () => set({ token: null, role: null }),
}));
