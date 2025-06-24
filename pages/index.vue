<script setup lang="ts">
import { UiButton, UiTextInput } from "sea-battle-ui-lib";
const tasks = ref<Task[]>([
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    isCompleted: false,
  },
]);
</script>
<template>
  <form
    class="border border-solid border-slate-300 p-2 rounded flex flex-col gap-3"
  >
    <UiTextInput placeholder="Введите название задачи" name="title" />
    <UiTextInput placeholder="Введите описание задачи" name="description" />
    <UiButton outlined type="submit">Создать</UiButton>
  </form>
  <TaskItem
    :task="tasks[0]"
    @change-status="tasks[0].isCompleted = !tasks[0].isCompleted"
  />
</template>
