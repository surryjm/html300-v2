<!-- INSTAGRAM COMPONENT -->
<template>

  <section class="col-xl-12 col-lg-8 col-md-10 col-sm-12 text-center mb-5">
    <h3 class="text-uppercase">Instagram</h3> 
    <!-- IMAGES BINDING, TO BE API FEED -->
    <img 
      v-for="(image, i ) in images" 
      v-on:click="toggleBorder(i)" 
      :class="{borderOn: i === activeItem}" 
      v-bind:key="i" 
      :src="image.url" 
      :alt="image.alt" 
      :title="image.title" 
      class="img-fluid m-2" 
      width="250" 
      height="250"
      />
  </section>
  
</template>

<script>
//BORDER TOGGLE MIXIN
import {toggle} from './mixins/toggle' 

export default {
  name: 'InstagramFeed',
  props: {
    images: Array
  },
  mixins: [toggle]
}
</script>

<style scoped>
  .borderOn {
    box-shadow: 0 15px 15px rgba(0,0,0,0.6);
  }
</style>