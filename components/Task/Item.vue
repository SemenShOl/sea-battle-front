<script lang="ts" setup>
interface Props {
  task: Task;
}
interface Emits {
  (e: "changeStatus", task: Task): void;
}
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div
    class="w-[200px] flex items-center justify-between py-1 px-2 border-solid border-2 border-slate-300 rounded"
    :class="{
      'opacity-50': task.isCompleted,
    }"
  >
    <div>
      <p class="text-2xl mb-2">
        {{ task.title }}
      </p>
      <p>
        {{ task.description }}
      </p>
    </div>
    <input
      class="w-[20px] h-[20px]"
      name="isCompletedTask"
      type="checkbox"
      :checked="task.isCompleted"
      @change="$emit('changeStatus', task)"
    />
  </div>
</template>
