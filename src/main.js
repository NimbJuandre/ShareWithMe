import './assets/main.css'

//import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";

//import App from './App.vue'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


//const app = createApp(App)
const app = initializeApp(firebaseConfig);

app.component('QuillEditor', QuillEditor) 

app.use(createPinia())
app.use(router)
app.use(VueQuill)
app.mount('#app')
