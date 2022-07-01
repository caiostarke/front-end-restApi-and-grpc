<script setup>
import { ref, watch } from 'vue'
import {useRoute} from 'vue-router'

let book = ref(null)

const route = useRoute()

async function fetchData() {
  book.value = null
  const res = await fetch(
    `http://127.0.0.1:8080/api/v1/book/${route.params.id}`)

  book.value = await res.json()
}

fetchData()

watch(route.params.id, fetchData)

</script>

<template>
    <div>
      <div class="flex flex-wrap lg:flex-row sm:flex-col justify-center justify-items-center content-center items-center">
        <div class="max-w-xs shadow-2xl flex flex-col my-2 p-10 lg:mx-4 rounded-xl min-h-fit" :key="book.book.id">
            <h1 class="text-2xl font-bold">{{book.book.title}}</h1>
            <h4 class="font-bold pb-5 pt-2" >{{book.book.author}}</h4>
            <p> {{ book.book.book_attrs.description}}</p>
        </div>
      </div>

    </div>
</template>