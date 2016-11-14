import Vue from 'vue/dist/vue.js'
import Alert from './../../components/Alert.vue';
import Modal from './../../components/Modal.vue';



const vm = new Vue({
  el: '#app',
  components: {
    Alert: Alert,
    Modal: Modal
  },
  data: {
    show: true,
  },
  methods: {
    close: function() {
      this.show = !this.show
    }
  },
});

console.log('vm', vm);
