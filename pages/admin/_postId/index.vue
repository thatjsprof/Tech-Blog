<template>
    <div class="admin-post-page">
        <div class="row">
            <h1 class="u-margin-top-big">Edit Post</h1>
            <section class="update-form">
                <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
            </section>
        </div>
    </div>
</template>
  
  <script>
    import axios from 'axios'
    
    export default {
        layout: 'admin',
        middleware: ['check-auth', 'auth'],
        asyncData (context) {
            return context.app.$axios.$get('/posts/' + context.params.postId + '.json')
            .then((data) => {
                return {
                    loadedPost: { ...data, id: context.params.postId }
                }
            })
            .catch((err) => {
                context.error(err)
            })
        },
        methods: {
            onSubmitted (editedPost) {
                this.$store.dispatch('editPost', editedPost)
                .then((res) => {
                    if (res?.response?.status) {
                        this.$toastr.e('Could not edit post')
                    } else {
                        this.$toastr.s('Post Edited')
                        this.$router.push('/admin')
                    }
                })
            }
        }
    }
</script>
  

