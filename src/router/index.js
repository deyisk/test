import Vue from 'vue';
import VueRouter from 'vue-router';
import CheckIn from '@/components/CheckIn.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import UnterweisungComponent from '@/components/UnterweisungComponent.vue';
import VideoCall from '@/components/VideoCall.vue';
import CheckIn2 from '@/components/CheckIn2.vue';



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
  {
    path: '/videocall',
    name: 'VideoCall',
    component: VideoCall
  },


  {
    path: '/check-in2',
    name: 'CheckIn2',
    component: CheckIn2
  },





];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;


