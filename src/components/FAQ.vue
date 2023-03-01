<template>
  <body style="background-image: url('/src/assets/bg.png');">\
    <div class="bg-transparent p-3 justify-between w-4/5 m-auto space-y-20">
      <p class="font-Encode font-bold text-5xl text-amber-600"> FAQ </p>
      <p class="font-Encode font-bold text-5xl text-white"> How can we help you? </p>
    </div>

    <!--Search Bar-->

    <form>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative flex w-[70rem] ml-[180px] bg-transparent space-y-5 ">
        <div class="absolute inset-y-2 left-5 flex items-center pl-3 pointer-events-none ">
          <svg aria-hidden="true" class="w-5 h-5 z-0 text-gray-500 dark:text-gray-400" fill="none" stroke="#FFFFFF"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input type="search" id="default-search"
          class="z-1 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..." required>
        <button type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>



  </body>
</template>

<script>
export default {
  name: "FAQ",
}
</script>
