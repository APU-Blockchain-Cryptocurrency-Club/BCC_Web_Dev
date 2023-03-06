<template>
    <div class="absolute z-10 items-center flex"> 
        <div>
            <router-link to="/" class="item-center">
                <img src="src\assets\header apu.png" alt="APU BCC Logo" width="200">
            </router-link>
        </div>
        
        <ul class="text-base space-x-24 flex item-center justify-content-end">
            <li> <router-link to="/about">About</router-link> </li> 
            <li> <router-link to="/events">Events</router-link> </li>
            <li> <router-link to="/resources">Resources</router-link> </li> 
            <li> <router-link to="/faq">FAQ</router-link> </li> 
        </ul>
    </div> 
</template>

<script>

export default {
    name: "Navbar",
}

</script>