import { createApp } from 'vue'
import Header from './components/navbar.vue'
import Footer from './components/footer.vue'
import Content from './components/FAQ.vue'
import './assets/main.css'

createApp(Header).mount('#header')
createApp(Content).mount("#content")
createApp(Footer).mount('#footer')
