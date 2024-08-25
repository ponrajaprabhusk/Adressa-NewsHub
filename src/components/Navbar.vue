<script setup>
    import { RouterLink } from 'vue-router';
</script>


<template>
    <nav class="bg-blue-900 border-2 border-blue-950 rounded-sm">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <!-- <img class="h-10 w-auto" v-bind:src="logo" alt="Vue Jobs" /> -->
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >NewsHub</span>
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/headlines"
                  class="text-white hover:bg-blue-950 hover:text-white rounded-md px-3 py-2"
                  >Top Headlines
                </RouterLink>
                <RouterLink to="/AllNews" class="text-white hover:bg-blue-950 hover:text-white rounded-md px-3 py-2">
                  All News
                </RouterLink>
                <RouterLink to="/sports" class="text-white hover:bg-blue-950 hover:text-white rounded-md px-3 py-2">
                  Sports 
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>