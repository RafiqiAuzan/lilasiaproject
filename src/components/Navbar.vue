<template>
   <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto p-4 mt-3">
         <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-blue text-blue-700">Lilatia Store</span>
         </router-link>
         <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
               <router-link to="/dashboard" v-if="isLoggedIn" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Dashboard</router-link>
            </li>
            <li>
               <router-link to="/login" v-if="!isLoggedIn" class="block py-2 mx-6 font-semibold transition-all lg:py-3 text-xl text-base-600 hover:text-blue-700 hover:font-semibold">Login</router-link>
            </li>
            <li>
               <router-link to="/register" v-if="!isLoggedIn" class="block py-2 mx-6 font-semibold transition-all lg:py-3 text-xl text-base-600 hover:text-blue-700 hover:font-semibold">Register</router-link>
            </li>
            <li>
               <a href="#" @click="logout" v-if="isLoggedIn" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log Out</a>
            </li>
            </ul>
         </div>
      </div>
   </nav>
</template>
    
<script>
import { mapState, mapActions } from 'vuex'

export default {
   computed: {
   ...mapState(['isLoggedIn'])
   },
   methods: {
   ...mapActions(['logout'])
   }
}
</script>