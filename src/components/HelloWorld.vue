<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
</script>

<template>
  <div class="bg-neutral-50 my-10 p-10 flex flex-col items-center">
    <h1 class="text-3xl">{{ msg }}</h1>

    <button class="bg-indigo-500" type="button" @click="count++">
      count is: {{ count }}
    </button>
  </div>
</template>
