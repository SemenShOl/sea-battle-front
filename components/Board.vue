<script lang="ts" setup>
interface Props {
  board: BoardCell[];
}
interface Emits {
  (e: "click", cell: BoardCell): void;
}
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div class="flex w-full">
    <div class="flex flex-col gap-2">
      <div
        v-for="letter in alphabet"
        class="h-[70px] text-2xl flex justify-center items-center p-4"
      >
        {{ letter }}
      </div>
    </div>
    <div class="w-full grid grid-cols-10 gap-2">
      <Cell
        v-for="cell in board"
        :cell="cell"
        @click="$emit('click', cell)"
      ></Cell>
      <div v-for="number in 10">
        <div class="w-[70px] text-2xl flex justify-center p-2">
          {{ number }}
        </div>
      </div>
    </div>
  </div>
</template>
