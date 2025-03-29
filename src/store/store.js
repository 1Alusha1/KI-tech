import { create } from 'zustand';

const generalStore = create((set) => ({
  theme: 'light',

  setStore: (theme) =>
    set((state) => ({
      ...state,
      theme,
    })),
}));

export default generalStore;
