
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let  routes = [
    { path: '/films', component: require('./components/Films.vue').default, default: true },
    { path: '/films/:film_id', component: require('./components/Single.vue').default, default: true },
    { path: '/example', component: require('./components/Example.vue').default }
  ]


  const router = new VueRouter({
    routes // short for routes: routes
  })
  
//   router.replace({ path: '/', redirect: '/films' })

const app = new Vue({
    el: '#app',
    router
});
