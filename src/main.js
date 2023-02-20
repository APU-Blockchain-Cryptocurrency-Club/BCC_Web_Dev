import { createApp } from 'vue'
import Header from './components/navbar.vue'
import Footer from './components/footer.vue'

import './assets/main.css'

createApp(Header).mount('#header')
createApp(Footer).mount('#footer')
