<script setup lang="ts">
import { toast } from 'vue-sonner';
import DetailedToast from '~/components/DetailedToast.vue';

defineOptions({
  name: 'Index',
});
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <SCButton
      @click="
        () => {
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }
      "
    >
      Default Sonner
    </SCButton>
    <SCButton
      @click="
        () => {
          toast.custom(markRaw(DetailedToast), {
            componentProps: {
              title: 'Something requires your action!',
              description:
                'It conveys that a specific action is needed to resolve or address a situation',
              actions: [
                {
                  text: 'Learn more',
                  onClick: () => console.log('Lear More'),
                },
              ],
            },
          });
        }
      "
    >
      Detailed Toast with actions
    </SCButton>
  </div>
</template>

<style scoped></style>
