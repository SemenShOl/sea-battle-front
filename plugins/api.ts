export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  return {
    provide: {
      api,
    },
  };
});
