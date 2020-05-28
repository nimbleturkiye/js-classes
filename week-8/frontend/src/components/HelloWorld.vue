<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<template lang="pug">
.hello
  h1 {{ msg }}
  p
    | For a guide and recipes on how to configure / customize this project,
    br
    |       check out the
    a(href='https://cli.vuejs.org', target='_blank', rel='noopener') vue-cli documentation
    | .
  h3 Installed CLI Plugins
  ul
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel', target='_blank', rel='noopener') babel
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa', target='_blank', rel='noopener') pwa
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router', target='_blank', rel='noopener') router
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex', target='_blank', rel='noopener') vuex
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint', target='_blank', rel='noopener') eslint
  h3 Essential Links
  ul
    li
      a(href='https://vuejs.org', target='_blank', rel='noopener') Core Docs
    li
      a(href='https://forum.vuejs.org', target='_blank', rel='noopener') Forum
    li
      a(href='https://chat.vuejs.org', target='_blank', rel='noopener') Community Chat
    li
      a(href='https://twitter.com/vuejs', target='_blank', rel='noopener') Twitter
    li
      a(href='https://news.vuejs.org', target='_blank', rel='noopener') News
  h3 Ecosystem
  ul
    li
      a(href='https://router.vuejs.org', target='_blank', rel='noopener') vue-router
    li
      a(href='https://vuex.vuejs.org', target='_blank', rel='noopener') vuex
    li
      a(href='https://github.com/vuejs/vue-devtools#vue-devtools', target='_blank', rel='noopener') vue-devtools
    li
      a(href='https://vue-loader.vuejs.org', target='_blank', rel='noopener') vue-loader
    li
      a(href='https://github.com/vuejs/awesome-vue', target='_blank', rel='noopener') awesome-vue

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
