import Vue from 'vue'
import ElementUI from 'element-ui'
import Hello from './views/hello/index.vue'
import 'element-ui/lib/theme-chalk/index.css'
import asyncModules from '@/views/asyncmodules/index'

Vue.use(ElementUI)

new Vue(Hello).$mount('#app')
