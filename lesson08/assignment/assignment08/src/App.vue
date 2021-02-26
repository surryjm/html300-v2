<template>
  <div id="app">
    <a href="#main-content" class="hidden">Skip to main content</a>
    <div class="container-fluid">
      <Header /> <!--HEADER COMPONENT-->
      <router-view/>
      <Footer />  <!--FOOTER COMPONENT-->
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"; // HEADER COMPONENT
import Footer from "./components/Footer.vue"; // FOOTER COMPONENT

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="scss">

</style>