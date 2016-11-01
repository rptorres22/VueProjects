import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

// Pointing routes to the components they should use
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',
      component: App,
      children: [
        { path: '', component: Home },
        { path: 'time-entries',
          component: TimeEntries,
          children: [
            { path: 'log-time', component: LogTime }
          ]
        }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})

new Vue({
  router
}).$mount('#app')

