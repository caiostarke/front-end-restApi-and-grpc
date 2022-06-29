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
        <div class="max-w-xs shadow-2xl flex flex-col my-2 p-10 lg:mx-4 rounded-xl min-h-fit" v-for="book in books.books" :key="book.id">
            <h1 class="text-2xl font-bold">{{book.title}}</h1>
            <h4 class="font-bold pb-5 pt-2" >{{book.author}}</h4>
            <p> {{ book.book_attrs.description}}</p>
        </div>
      </div>

    </div>
    
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
