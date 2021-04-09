<template>
  <div class="relative">
    <div class="container mx-auto px-4 md:px-8">
      <Navbar
        :title="$appConfig.title"
        :menu-items="$appConfig.menuItems"
      />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/App/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
