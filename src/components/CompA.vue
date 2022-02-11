<template>
  <comp-c>
    <template v-for="(_, name) in $slots"
      :key="name"
      v-slot:[name]="slotData"
    >
      <slot :name="name" v-bind="slotData" />
    </template>
  </comp-c>
</template>

<script setup lang="ts">
import CompC from './CompC.vue';

defineProps({
  label: String,
})
</script>
