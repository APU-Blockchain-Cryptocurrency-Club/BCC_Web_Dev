<template>
  <body style="background-image: url('/src/assets/bg.png');">

    <div class="bg-transparent p-3 justify-between w-4/5 m-auto space-y-20 ">
      <p class="font-Encode font-bold text-5xl text-amber-600 mt-40"> FAQ </p>
      <p class="font-Encode font-bold text-5xl text-white"> How can we help you? </p>
    </div>

    <!--Search Bar-->
    <form>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative flex w-[70rem] ml-[180px] bg-transparent mt-3">
        <div class="absolute inset-y-2 flex items-center pl-3 pointer-events-none ">
          <svg aria-hidden="true" class="w-5 h-5 z-0 text-gray-500 dark:text-gray-400" fill="none" stroke="#FFFFFF"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input type="search" id="default-search"
          class="placeholder:italic pl-12 appearance-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/70 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="HELLO WORLD" required>
      </div>
    </form>

    <!--Dropdowns-->
    <div class="bg-transparent ml-[10rem] p-3 m-auto mt-2">
      <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(1)"
        :aria-expanded="isInfoDropdown1.toString()">
        When was the club established?
        <span id="span1" class="ml-[44rem] h-5 w-5">
          <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </button>
      <div>
        <ul v-if="isInfoDropdown1" data-te-dropdown-ref class="">
          <li>
            <a data-te-dropdown-item-ref>
              <div class="block py-2 px-5 ml-3 mt-3 text-lg font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-full">
                APU BCC was established in 2020 by...
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-transparent ml-[10rem] p-3 m-auto mt-2">
      <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(2)"
        :aria-expanded="isInfoDropdown2.toString()">
        When was the club established?
        <span id="span2" class="ml-[44rem] h-5 w-5">
          <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </button>
      <div>
        <ul v-if="isInfoDropdown2" data-te-dropdown-ref class="">
          <li>
            <a data-te-dropdown-item-ref>
              <div class="block py-2 px-5 ml-3 mt-3 text-lg font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-full">
                APU BCC was established in 2020 by...
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-transparent ml-[10rem] p-3 m-auto mt-2">
      <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(3)"
        :aria-expanded="isInfoDropdown3.toString()">
        When was the club established?
        <span id="span3" class="ml-[44rem] h-5 w-5">
          <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </button>
      <div>
        <ul v-if="isInfoDropdown3" data-te-dropdown-ref class="">
          <li>
            <a data-te-dropdown-item-ref>
              <div class="block py-2 px-5 ml-3 mt-3 text-lg font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-full">
                APU BCC was established in 2020 by...
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-transparent ml-[10rem] p-3 m-auto mt-2">
      <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(4)"
        :aria-expanded="isInfoDropdown4.toString()">
        When was the club established?
        <span id="span4" class="ml-[44rem] h-5 w-5">
          <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </button>
      <div>
        <ul v-if="isInfoDropdown4" data-te-dropdown-ref class="">
          <li>
            <a data-te-dropdown-item-ref>
              <div class="block py-2 px-5 ml-3 mt-3 text-lg font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-full">
                APU BCC was established in 2020 by...
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </body>
</template>

<script>

export default {
  name: "FAQ",
  data() {
    return {
      isInfoDropdown1: false,
      isInfoDropdown2: false,
      isInfoDropdown3: false,
      isInfoDropdown4: false,
    };
  },
  methods: {
    toggleInfoDropDown(span) {
      if (span == 1) {

        //Setting plus and minus symbol
        if (this.isInfoDropdown1 == false) {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 12h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        else {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        this.isInfoDropdown1 = !this.isInfoDropdown1;
      }
      else if (span == 2) {

        //Setting plus and minus symbol
        if (this.isInfoDropdown2 == false) {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 12h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        else {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        this.isInfoDropdown2 = !this.isInfoDropdown2;
      }
      else if (span == 3) {

        //Setting plus and minus symbol
        if (this.isInfoDropdown3 == false) {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 12h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        else {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        this.isInfoDropdown3 = !this.isInfoDropdown3;
      }
      else if (span == 4) {

        //Setting plus and minus symbol
        if (this.isInfoDropdown4 == false) {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 12h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        else {
          document.getElementById('span' + span).innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-line join="round"></path></svg>'
        }
        this.isInfoDropdown4 = !this.isInfoDropdown4;
      }
      else{
      window.alert("ERROR");
      }
      
    },
  }
}
</script>
