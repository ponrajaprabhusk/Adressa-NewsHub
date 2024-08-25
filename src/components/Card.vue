<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  news: Array,
  loading: Boolean,
  error: String,
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center text-blue-900 my-4">
        <PulseLoader color="rgb(30 58 138)" />
    </div>
    <div v-if="error" class="error text-center text-red-600">{{ error }}</div>
    <div v-if="!loading && news.length">
      <!-- <h1 class="text-3xl font-semibold text-blue-950 text-center mb-8">Search Results</h1> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(article, index) in news"
          :key="index"
          class="bg-white border border-transparent shadow-md rounded-lg p-4 hover:border-blue-950 transition-shadow duration-300"
        >
          <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
          <p class="text-gray-600 mb-4">{{ article.description }}</p>
          <a
            :href="article.url"
            target="_blank"
            class="text-white hover:underline bg-blue-900 rounded-dm p-2 text-center"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mb-5" >
    <RouterLink class="text-center p-3 border rounded-3xl bg-blue-900 text-white hover:bg-blue-800" to="/AllNews">
        All Jobs
    </RouterLink>
  </div>
</template>
