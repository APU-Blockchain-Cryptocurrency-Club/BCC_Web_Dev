<template>
    <div class="flex justify-evenly bg-slate-600 p-10">
        
            <div class="grid">
                <div>
                    <router-link to="/">
                        <img src="src\assets\APUBCC Logo.png" alt="APU BCC Logo" width="200">
                    </router-link>
                </div>

                <div class="flex m-2">

                    <a href="https://www.facebook.com/apubcc/" target="_blank" class="hover:bg-black transition delay-600 b rounded-full">
                        <img src="src\assets\white fb.png" alt="APUBCC Facebook" width="35" class="m-1">
                    </a>

                    <a href="https://twitter.com/apubcc" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                        <img src="src\assets\white twitter.png" alt="APUBCC Twitter" width="35" class="m-1">
                    </a>

                    <a href="https://my.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                        <img src="src\assets\white linked.png" alt="APUBCC LinkedIn" width="35" class="m-1">
                    </a>

                    <a href="https://www.instagram.com/apubcc/?hl=en" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                        <img src="src\assets\white ig.png" alt="APUBCC Instagram" width="35" class="m-1">
                    </a>

                    <a href="https://www.youtube.com/channel/UC0WUwwcvh_A7to7YwoK-mrw" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                        <img src="src\assets\white you.png" alt="APUBCC Youtube" width="35" class="m-1">
                    </a>

                    <a href="https://github.com/APU-Blockchain-Cryptocurrency-Club" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                        <img src="src\assets\white gh.png" alt="APUBCC GitHub" width="35" class="m-1">
                    </a>

                </div>
                <div class="text-xs">
                    <p>@APUBCC 2023</p>
                </div>
            </div>

            <div class="footer-block text-center mt-5" >
                <b class="footer-heading text-base text-orange-400">General</b>
                <ul class="footer-components">  
                    <router-link to="/aboutus">
                        <li class="text-white hover:text-orange-400 transition delay-600">About Us</li>
                    </router-link>

                    <router-link to="/mediakit">
                        <li class="text-white hover:text-orange-400 transition delay-600">MediKit</li>
                    </router-link>
                    
                    <router-link to="/faq">
                        <li class="text-white hover:text-orange-400 transition delay-600">FAQ</li>
                    </router-link>
                </ul>
            </div>

            <div class="footer-block text-center mt-5">
                <b class="footer-heading text-base text-orange-400">Event</b>
                <ul class="footer-components">
                    <router-link to="/timeline">
                        <li class="text-white hover:text-orange-400 transition delay-600">Timeline</li>
                    </router-link>  
                    
                    <router-link to="/upcoming">
                        <li class="text-white hover:text-orange-400 transition delay-600">Upcoming</li>
                    </router-link>
                    
                </ul>
            </div>

            <div class="footer-block text-center mt-5">
                <b class="footer-heading text-base text-orange-400"> Resources </b>
                <ul class="footer-components">
                    <router-link to="/aboutus">
                        <li class="text-white hover:text-orange-400 transition delay-600">About Us</li>
                    </router-link>
                    
                    <router-link to="/mediakit">
                        <li class="text-white hover:text-orange-400 transition delay-600">MediKit</li>
                    </router-link>
                    
                </ul>
            </div>

            <div class="footer-block text-center mt-5">
                <b class="footer-heading text-base text-orange-400"> Support Us </b>
                <ul class="footer-components">
                    <router-link to="/buyusacoffee">
                        <li class="text-white hover:text-orange-400 transition delay-600">Buy Us coffee</li>
                    </router-link>  
                   
                    <router-link to="cryptoaddresses">
                        <li class="text-white hover:text-orange-400 transition delay-600">Crypto Addresses</li>
                    </router-link>
                    
                </ul>
            </div>
            
    </div>

</template>
<script>

export default {
    name: "Footer",
}
</script>