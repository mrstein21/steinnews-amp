<template>
 <a :href="'/'+article.slug">
  <div class="px-5 py-4 max-w-md mx-auto sm:max-w-xl  lg:max-w-full xl:mr-0 2xl:col-span-2" >
      <div class="xl:max-w-xl">
        <img
          class="mt-5 rounded-lg shadow-xl sm:mt-2  h-auto  w-full  object-cover"
          v-bind:src="article.image_url" 
          alt=""
        />
        <div class="items-center mt-2">
            <h1
            class="mt-1 font-bold text-gray-900 text-sm md:text-lg "
            >
            {{article.title}}
            </h1>
            <h1
            class="mt-1 font-bold text-gray-900 text-sm"
            >
            {{article.date_create}}
            </h1>
            <p class="mt-1 text-gray-600 text-sm">
            {{article.short_description}}
            </p>
        </div>
      </div>
    </div>
 </a> 
</template>
<script>
export default {
    props:["article"],
}
</script>