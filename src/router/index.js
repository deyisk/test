import Vue from 'vue';
import VueRouter from 'vue-router';
import CheckIn from '@/components/CheckIn.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import UnterweisungComponent from '@/components/UnterweisungComponent.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/check-in',
    name: 'CheckIn',
    component: CheckIn
  },

  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },

  {
    path: '/unterweisungen',
    name: 'UnterweisungComponent',
    component: UnterweisungComponent
  },



];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;


