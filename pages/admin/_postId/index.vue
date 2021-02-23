<template>
    <div class="admin-post-page">
        <h1 class="u-margin-top-big">Edit Post</h1>
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>
  
  <script>
    import axios from 'axios'
    
    export default {
        layout: 'admin',
        middleware: ['auth', 'check-auth'],
        asyncData (context) {
            return context.app.$axios.$get('/posts/' + context.params.id + '.json')
            .then((data) => {
                return {
                    loadedPost: { ...data, id: context.params.id }
                }
            })
            .catch((err) => {
                context.error(err)
            })
        },
        methods: {
            onSubmitted (editedPost) {
                this.$store.dispatch('editPost', editedPost)
                .then(() => {
                    this.$router.push('/admin')
                })
            }
        }
    }
</script>
  

