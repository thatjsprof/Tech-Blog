<template>
    <div>
        <Navigation />
        <nuxt />
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation/Navigation.vue'
    export default {
      components: {
        Navigation
      }
    }
  </script>