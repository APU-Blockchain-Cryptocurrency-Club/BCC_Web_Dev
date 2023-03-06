<template>
  <div class="absolute z-10 flex bg-transparent p-3 justify-between w-4/5 m-auto">
    <!-- <div class=""> -->
    <div class="flex">
      <img class="w-14 h-14" src="src\assets\Logo.png" alt="Logo" width="200">
      <p class="font-Encode font-bold text-3xl text-white m-2"> APUBCC </p>
    </div>

    <div class="m-3">
      <ul class="flex font-Encode font-extrabold text-lg text-white">

        <button class="px-5 flex" type="button" @click="toggleAbtDropDown" :aria-expanded="isAbtDropDown.toString()">
          ABOUT
          <span class="my-auto ml-2 h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
              stroke-width="2">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <div>
          <ul v-if="isAbtDropDown" data-te-dropdown-ref
            class="absolute z-[1000] top-10 right-7 min-w-max list-none overflow-hidden rounded-lg bg-transparent [&[data-te-dropdown-show]]:block bg-orange-400">
            <li>
              <a class="block w-full whitespace-nowrap py-2 px-4 text-lg  font-extrabold text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline 
                disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" 
                href="#" data-te-dropdown-item-ref>Action</a>
            </li>
          </ul>
        </div>


        <!-- End About Nav -->
        <li class="px-5">
          <router-link to="/events">
            <p class="font-extrabold">EVENTS</p>
          </router-link>
        </li>
        <!-- End Event Nav -->
        <button class="px-5 flex" type="button" @click="toggleResDropDown" :aria-expanded="isResDropDown.toString()">
          RESOURCES
          <span class="my-auto ml-2 h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
              stroke-width="2">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <div>
          <ul v-if="isResDropDown" data-te-dropdown-ref
            class="absolute z-[1000] top-10 right-7 min-w-max list-none overflow-hidden rounded-lg bg-transparent [&[data-te-dropdown-show]]:block bg-orange-400">
            <li>
              <a class="block w-full whitespace-nowrap py-2 px-4 text-lg  font-extrabold text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline 
                disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" 
                href="#" data-te-dropdown-item-ref>RESOURCE 1</a>
            </li>
          </ul>
        </div>
        <!-- End Resource Nav -->

        <li class="px-5">
          <router-link to="/faq">
            <p class="font-extrabold">FAQ</p>
          </router-link>
        </li>
        <button class="px-5 ml-5 rounded-full text-sm font-bold bg-orange-400 ">JAIL NOW</button>
      </ul>

    </div>

    <!-- </div> -->

  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isAbtDropDown: false,
      isResDropDown: false
    };
  },
  methods: {
    toggleAbtDropDown() {
      this.isAbtDropDown = !this.isAbtDropDown;
    },
    toggleResDropDown() {
      this.isResDropDown = !this.isResDropDown;
    }
  }
}
</script>