import { createRouter, createWebHistory } from 'vue-router'
import Timeline from '../components/Timeline.vue'
import AboutUs from '../components/AboutUs.vue'
import BUAC from '../components/BuyUsACoffee.vue'
import CA from '../components/CryptoAddresses.vue'
import FAQ from '../components/FAQ.vue'
import MediaKit from '../components/MediaKit.vue'
import Upcoming from '../components/Upcoming.vue'
import Home from '../components/Home.vue'

const routes = [
    {
        path:'/timeline',
        name:'Timeline',
        component: Timeline
    },{
        path:'/aboutus',
        name:'About Us',
        component: AboutUs
    },{
        path:'/buyusacoffee',
        name:'Buy Us A Coffee',
        component: BUAC
    },{
        path:'/cryptoaddresses',
        name:'Crypto Addresses',
        component: CA
    },{
        path:'/faq',
        name:'FAQ',
        component: FAQ
    },{
        path:'/mediakit',
        name:'Media Kit',
        component: MediaKit
    },{
        path:'/upcoming',
        name:'Upcoming',
        component: Upcoming
    },{
        path:'/',
        name:'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router