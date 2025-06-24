<script lang="ts" setup>
import { useForm, useField } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
definePageMeta({
  layout: "auth",
});
const validationSchema = toTypedSchema(
  z.object({
    login: z
      .string()
      .min(3, "Логин должен быть больше 3 символов")
      .max(20, "Логин должен быть меньше 20 символов"),
    age: z
      .number()
      .min(18, "Возраст должен быть больше 18")
      .max(100, "Возраст должен быть меньше 100"),
  })
);
const { meta, isSubmitting, handleSubmit, errors, resetForm } = useForm({
  validationSchema,
});

const { value: age } = useField("age");
const { value: login } = useField("login");

const onSubmit = handleSubmit(async (values) => {
  const toast = useToast();

  const { error } = await useFetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/users/register`,
    {
      method: "POST",
      body: values,
    }
  );
  resetForm();

  if (error.value) {
    toast.error({
      title: "Ошибка",
      message: error.value.data,
      position: "topCenter",
    });
  } else {
    navigateTo("/");
  }
});
</script>
<template>
  <form
    @submit.prevent="onSubmit"
    class="bg-white w-[500px] py-4 px-3 h-[300px] rounded-xl shadow-xl flex flex-col gap-4"
  >
    <input
      name="login"
      class="rounded border-2 p-2 border-teal-700"
      v-model="login"
      type="text"
      placeholder="Введите логин"
    />
    <p class="text-rose-600" v-if="errors.login">{{ errors.login }}</p>
    <input
      name="age"
      v-model="age"
      class="rounded border-2 p-2 border-teal-700"
      type="number"
      placeholder="Введите возраст"
    />
    <p class="text-rose-600" v-if="errors.age">{{ errors.age }}</p>

    <button
      :disabled="!meta.valid || isSubmitting"
      class="rounded p-2 bg-teal-700 text-white hover:bg-teal-600 mt-auto"
      :class="{
        'cursor-not-allowed opacity-45': !meta.valid || isSubmitting,
      }"
    >
      Присоединиться к игре
    </button>
  </form>
</template>

<style></style>
