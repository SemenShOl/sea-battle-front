<script lang="ts" setup>
import { UiButton } from "sea-battle-ui-lib";
interface Props {
  freeBlocks: number;
  board: BoardCell[];
}
const props = defineProps<Props>();
const onStart = () => {
  useFetch("http://localhost:3000/api/board/create-board", {
    method: "POST",
    body: props.board,
  });
  navigateTo("/game");
};
</script>
<template>
  <div class="flex items-center mb-3 text-2xl pl-[40px] justify-between">
    <p class="text-semyon-500 mr-2">Свободных блоков: {{ freeBlocks }}</p>

    <UiButton size="lg" @click="onStart">Старт</UiButton>
  </div>
</template>
