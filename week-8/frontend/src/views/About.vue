<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
  .about
    h1 This is an about page
    HelloWorld(msg="This is Istanbul!")
</template>
