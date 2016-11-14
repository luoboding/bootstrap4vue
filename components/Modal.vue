<template lang="html">
  <div class="modal fade" v-bind:class="{
      'in': show
    }"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-backdrop fade" v-bind:class = "{
      'in' : backdrop
      }" style='z-index: 0'></div>
    <div class="modal-dialog" v-bind:class="{
      'modal-sm': (size === 'sm'),
      'modal-lg': (size === 'lg')
      }">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click='cancel'>{{cancelText}}</button>
          <button type="button" class="btn btn-primary" @click='ok'>{{okText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      required: true,
      type: Boolean,
      twoWay: true,
      default: false,
    },
    size: {
      type: String,
      default: "lg"
    },
    title: {
      type: String,
      default: '',
    },
    okText: {
      type: String,
      default: "Ok",
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    okCallback: {
      type: Function,
      default: function(){
        console.log('ok');
      }
    },
    cancelCallback: {
      type: Function,
      default: function() {
        console.log('canceled');
      }
    }
  },
  methods: {
    close: function() {
      this.show = false;
    },
    ok: function() {
      this.show = false;
      this.okCallback.call();
    },
    cancel: function() {
      this.show = false;
      this.okCallback.call();
    }
  },
  watch: {
    show(value) {
      const body = document.body;
      if (value) {
        $(this.$el).find('.modal-content').focus()
        $(body).addClass('modal-open');
        this.$el.style.display = 'block';
        $(this.$el).addClass('in');
      } else {
        console.log('close');
        $(body).removeClass('modal-open');
        this.$el.style.display = 'none';
        $(this.$el).removeClass('in');
      }
    }
  },
}
</script>
