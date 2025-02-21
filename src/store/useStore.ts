import { create } from "zustand";
// Ejemplo sencillo de Zustand, a partir de esto creen sus propios store segun necesiten en esta carpeta
type State = {
  username: string;
  changeUsername: () => void;
  deleteUsername: () => void;
};

export const useStore = create<State>((set) => ({
  username: "NaviVani",
  changeUsername: () => set((s) => ({ username: s.username })),
  deleteUsername: () => set({ username: "" }),
}));
