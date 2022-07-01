<script setup>
import { ref, watch } from 'vue'

let books = ref(null)

async function fetchData() {
  books.value = null
  const res = await fetch(
    'http://127.0.0.1:8080/api/v1/books')

  books.value = await res.json()
}

fetchData()


const message = ref(" Books ")
</script>

<template>
    <div>
      <div class="flex flex-wrap lg:flex-row sm:flex-col justify-center justify-items-center content-center items-center">
        <div class="max-w-xs shadow-2xl flex flex-col my-2 p-10 lg:mx-4 rounded-xl min-h-fit justify-center justify-items-center content-center items-center  " v-for="book in books.books" :key="book.id">
            <h1 class="text-2xl font-bold">{{book.title}}</h1>
            <h4 class="font-bold pb-5 pt-2" >{{book.author}}</h4>
            <p> {{ book.book_attrs.description}}</p>
            <router-link :to="{name: 'getBook', params:{id: book.id} }" class="flex bg-neutral-800 text-slate-50 justify-center w-25 py-3 px-5 rounded-sm mt-5 hover:bg-sky-700 duration-300  "> View Book </router-link> 
        </div>
      </div>

    </div>
</template>

<style scoped>

</style>
