<script setup lang="ts">
import { CircleCheck, LucideX } from 'lucide-vue-next';

defineOptions({
  name: 'DetailedToast',
});

defineEmits<{
  'close-toast': () => void;
}>();

interface ToastAction {
  text: string;
  onClick: () => void;
}

defineProps<{ title: string; description: string; actions: ToastAction[] }>();
</script>

<template>
  <div class="bg-background rounded-md border p-4 shadow-lg w-[400px]">
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <CircleCheck class="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <p class="text-sm font-medium">
              {{ title }}
            </p>
            <p class="text-muted-foreground text-sm">
              {{ description }}
            </p>
          </div>
          <div v-if="actions && actions.length > 0" class="flex gap-2">
            <template v-for="(action, index) in actions" :key="index">
              <SCButton size="sm" @click="action.onClick()">
                {{ action.text }}
              </SCButton>
            </template>
          </div>
        </div>
        <SCButton
          variant="ghost"
          class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
          @click="$emit('close-toast')"
        >
          <LucideX
            class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </SCButton>
      </div>
    </div>
  </div>
</template>
