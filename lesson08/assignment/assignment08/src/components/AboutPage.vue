<template>

  <div class="about">
    <body>
      <main id="main-content" class="row justify-content-center mb-5">
        <section class="about-text">
          <h2 class="text-uppercase text-center">About Us</h2>
          <p class="mb-5">With exceptional espresso, pastries baked from scratch, gluten-free options, house-made granola, and delicious panini, Ten Ton Art & Coffee has what you crave. A perfect choice for breakfast, lunch, or a quick pick-me-up.</p>
          <p>Coffee shops in towns and villages throughout the world always seem to be community gathering places, and Ten Ton is no exception. Join us!</p>
        </section>
        <!-- INSTAGRAM COMPONENT -->
        <InstagramFeed :images=images />
      </main>
    </body>
  </div>
  
</template>


<script>
import InstagramFeed from "../components/InstagramFeed.vue"; // INSTAGRAM COMPONENT

export default {
  name: 'About',
  components: {
    InstagramFeed, // INSTAGRAM COMPONENT
  },
  data () {
    return {
      // IMAGES DATA
      images: [
        {id: 0, url: "/ten-ton-insta-1.jpg", alt: "Instagram image 1", title: "Instagram image 1"},
        {id: 1, url: "/ten-ton-insta-2.jpg", alt: "Instagram image 2", title: "Instagram image 2"},
        {id: 2, url: "/ten-ton-insta-3.jpg", alt: "Instagram image 3", title: "Instagram image 3"},
        {id: 3, url: "/ten-ton-insta-4.jpg", alt: "Instagram image 4", title: "Instagram image 4"},
        {id: 4, url: "/ten-ton-insta-5.jpg", alt: "Instagram image 5", title: "Instagram image 5"},
        {id: 5, url: "/ten-ton-insta-1.jpg", alt: "Instagram image 1", title: "Instagram image 1"},
        {id: 6, url: "/ten-ton-insta-2.jpg", alt: "Instagram image 2", title: "Instagram image 2"},
        {id: 7, url: "/ten-ton-insta-3.jpg", alt: "Instagram image 3", title: "Instagram image 3"},
        {id: 8, url: "/ten-ton-insta-4.jpg", alt: "Instagram image 4", title: "Instagram image 4"},
        {id: 9, url: "/ten-ton-insta-5.jpg", alt: "Instagram image 5", title: "Instagram image 5"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>