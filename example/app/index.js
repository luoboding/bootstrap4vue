import Vue from 'vue/dist/vue.js'
import Alert from './../../components/Alert.vue';



const vm = new Vue({
  el: '#app',
  components: {
    Alert: Alert
  }
});

console.log('vm', vm);
