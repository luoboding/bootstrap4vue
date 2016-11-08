<template>
  <p>{{msg}}</p>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'Hello world',
    },
  },
};
</script>
