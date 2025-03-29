import { create } from 'zustand';

const generalStore = create((set) => ({
  theme: 'light',
  burger: false,

  switchTheme: (theme) =>
    set((state) => ({
      ...state,
      theme,
    })),

  toggleMenu: () =>
    set((state) => ({
      ...state,
      burger: !state.burger,
    })),
}));

export default generalStore;
