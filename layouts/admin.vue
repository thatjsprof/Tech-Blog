<template>
    <div>
        <Navigation />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation/Navigation.vue'
    import Footer from '@/components/Footer/footer.vue'
    export default {
      components: {
        Navigation,
        Footer
      }
    }
  </script>