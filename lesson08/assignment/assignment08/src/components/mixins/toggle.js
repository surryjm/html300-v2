//https://medium.com/js-dojo/how-to-toggle-active-class-inside-v-for-2849dc54c40c

export const toggle = {
  data() {
    return {
      activeItem: null
    }
  },
  methods: {
    toggleBorder(i) {
      this.activeItem = i;
    }
  }
}