<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    type: String,
    count: Number
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<template lang="pug">
.hello
  p {{ msg }}
  .counter {{ count }}
  button.increment(@click="increment(type)") Increment
  button.decrement(@click="decrement(type)") Decrement
</template>

<style scoped lang="scss">
</style>
