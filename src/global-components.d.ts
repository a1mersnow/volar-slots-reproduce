declare module 'vue' {
  export interface GlobalComponents {
    CompB: typeof import('./components/CompB.vue').default,
  }
}

export {}
