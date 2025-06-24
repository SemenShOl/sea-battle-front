<script lang="ts" setup>
interface Props {
  cell: BoardCell;
}
interface Emits {
  (e: "click"): void;
}
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div
    @click="$emit('click')"
    class="h-[50px] rounded"
    :class="{
      'hover:bg-cyan-300 bg-cyan-200': cell.isFree,
      'bg-slate-400': !cell.isFree,
    }"
  ></div>
</template>
