<template lang="html">
  <div class="alert fade alert-dismissible" v-bind:class="{
    'alert-success': (type === 'success'),
    'alert-danger' : (type === 'danger'),
    'alert-warning': (type === 'warning'),
    'alert-info'   : (type === 'info'),
    'in'           : show
    }" role='alert'>
    <button type="button" class="close" data-dismiss="alert" @click='close'>
      <span aria-hidden="true">×</span>
      <span class="sr-only">Close</span>
    </button>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info"
    },
    show: {
      type: Boolean,
      default: true,
      twoWay: true
    }
  },
  methods: {
    close: function() {
      this.show = false;
    }
  }
}
</script>
