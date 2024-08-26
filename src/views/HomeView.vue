<script setup>
import { onMounted, ref } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import Card from '@/components/Card.vue';

const query = ref('');
const news = ref([]);
const loading = ref(false);
const error = ref(null);

async function searchNews() {
  if (!query.value) return;
  
  loading.value = true;
  error.value = null;
  
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query.value,
        apiKey: import.meta.env.VITE_NEWS_API_KEY, 
      },
    });
    
    news.value = response.data.articles;
  } catch (err) {
    error.value = 'An error occurred while searching for news';
    console.log(err);
  } finally {
    loading.value = false;
  }
}

async function homefeed(){
  if(query.value != '') return;

  loading.value = true;

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country:'us',
        pageSize: 9,
        apiKey: '644b47ad580e41d38073cb521e256928', 
      },
    });
    
    news.value = response.data.articles;
  } catch (err) {
    error.value = 'An error occurred while searching for news';
    console.log(err);
  } finally {
    loading.value = false;
  }

  
}

onMounted(() => {
  homefeed();
});

</script>

<template>
  <div v-if="loading" class="text-center text-blue-900 my-15 py-8">
    <PulseLoader color="rgb(30 58 138)" />
  </div>
  <div v-if="news.length === 0">
    
  </div>
  <div v-if="!loading" class="flex items-center justify-center min-h-80 bg-gray-100">
    <div class="text-center">
      <input
        v-model="query"
        @keyup.enter="searchNews"
        type="text"
        placeholder="Search for news"
        class="border border-gray-300 rounded-full px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-900"
      />
      <button
        @click="searchNews"
        class="ml-2 bg-blue-900 text-white rounded-full px-4 py-2 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
      >
        Search
      </button>
    </div>
  </div>

  <Card :news="news" :loading="loading" :error="error" />
</template>
