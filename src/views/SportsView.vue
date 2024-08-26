<script setup>
import { ref, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import axios from 'axios';

const news = ref([]);
const loading = ref(true);
const error = ref(null);

async function fetchNews() {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: "sports",
        pageSize: 25,
        apiKey: import.meta.env.VITE_NEWS_API_KEY, 
      },
    });
    news.value = response.data.articles;
  } catch (err) {
    error.value = 'An error occurred while fetching news';
    console.log('An error occurred while fetching news');
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchNews();
});

</script>

<template>
  <div class="">
    <h1 class="text-center text-3xl text-blue-950 font-semibold m-3">What's in Sports !!</h1>

    <div v-if="error" >{{ error }}</div>
    <div v-if="loading" class="text-center text-blue-900 my-15 py-8">
        <PulseLoader color="rgb(30 58 138)" />
    </div>

    <div v-if="!loading && news.length">
      <div v-for="(article, index) in news" :key="index" class="flex items-center justify-center">
        <div class="w-full max-w-3xl bg-white shadow-lg border border-transparent hover:border-blue-950 rounded-lg my-4">
          <div class="px-6 py-4">
            <h2 class="font-bold text-2xl mb-4">{{ article.title }}</h2>
            <p class="text-gray-700 text-base mb-6">
              {{ article.description }}
            </p>
            <div class="flex justify-between items-center">
              <div class="author">
                <p>Source: {{ article.source.name }}</p>
              </div>
              <a href="article.url" target="_blank" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>