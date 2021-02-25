<template>
  <div class="menu">
    
    <MenuPage />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuPage from '@/components/MenuPage.vue'

export default {
  name: 'Menu',
  components: {
    MenuPage
  }
}
</script>