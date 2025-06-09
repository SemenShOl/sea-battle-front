<script setup lang="ts">
const { board, freeBlocks, onCellClick } = useTroopDeployment();
// const ws = new WebSocket("ws://localhost:8080");

console.log("board.value: ", board.value);
</script>
<template>
  <GameHeader :freeBlocks="freeBlocks" />
  <Board :board="board" @click="onCellClick" />
</template>
