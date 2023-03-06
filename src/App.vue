<script setup>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
    <Navbar/>
    <body style="background-image: url('/src/assets/bg.png'); " class="min-h-screen bg-cover bg-center">
            <router-view/>
    </body>
    <Footer />
</template>