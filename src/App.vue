<script setup>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
    <Navbar/>
    <body style="background-image: url('/src/assets/bg.png'); " class="relative h-full">
        <div class="pt-16">
            <router-view/>
        </div>
    </body>
    <Footer />
</template>