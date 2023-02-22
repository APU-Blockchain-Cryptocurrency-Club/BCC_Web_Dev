<template>
    <div>   
        <div class="flex">
            <img src="https://cdn.discordapp.com/attachments/966648657996828708/1050212721032953926/club_logo.png" alt="APU BCC Logo" width="100">
            <p class="font-Encode font-bold text-2xl my-5"> APU BCC </p>
            <ul class="flex my-5">
                <li> <router-link to="/about">About</router-link> </li> 
                <li> <router-link to="/events">Events</router-link> </li>
                <li> <router-link to="/resources">Resources</router-link> </li> 
                <li> <router-link to="/faq">FAQ</router-link> </li> 
            </ul>
        </div>
        <div>
          
        </div>   
    </div> 
</template>

<script>

export default {
    name: "Navbar",
}

</script>