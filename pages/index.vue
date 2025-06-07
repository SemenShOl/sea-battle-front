<script setup lang="ts">
const { board, freeBlocks, onCellClick } = useTroopDeployment();
console.log("board.value: ", board.value);
</script>
<template>
  <GameHeader :freeBlocks="freeBlocks" />
  <Board :board="board" @click="onCellClick" />
</template>
