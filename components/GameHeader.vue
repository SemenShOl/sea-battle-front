<script lang="ts" setup>
interface Props {
  freeBlocks: number;
}
defineProps<Props>();
</script>
<template>
  <div class="flex items-center mb-3 text-2xl pl-[40px] justify-between">
    <p>Свободных блоков: {{ freeBlocks }}</p>
    <button
      class="bg-rose-400 hover:bg-rose-300 py-2 px-4 rounded-xl text-white"
    >
      Старт
    </button>
  </div>
</template>
<style></style>
