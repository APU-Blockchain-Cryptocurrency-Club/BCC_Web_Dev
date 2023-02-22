import { createApp } from 'vue'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

createApp(Navbar).mount("#header")
createApp(App).use(router).mount("#content")
createApp(Footer).mount("#footer")