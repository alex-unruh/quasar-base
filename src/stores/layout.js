import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    mini: false,
    leftDrawerOpen: false
  }),
  actions: {
    toggleLeftDrawer() {
      if (this.mini && this.leftDrawerOpen) {
        return this.leftDrawerOpen = false;
      }
      this.mini = !this.mini;
      this.leftDrawerOpen = true;
    }
  },
});
