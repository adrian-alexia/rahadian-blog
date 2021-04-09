<template>
  <div>
    <breadcrumbs :title="$options.name" :crumbs="crumbs" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/App/Breadcrumbs.vue'
export default {
  name: 'Kontak',
  components: {
    Breadcrumbs
  },
  data: () => ({
    crumbs: [
      ['Beranda', '/'],
      ['Kontak', '/contact']
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
