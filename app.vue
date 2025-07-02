<script setup lang="ts">
defineOptions({
  name: 'App',
});
</script>

<template>
  <div class="p-4">
    <NuxtPage />
    <SCToaster :visible-toasts="4" class="pointer-events-auto" />
  </div>
</template>
