<template>
    <div class="admin-new-post-page">
        <div class="row">
            <h1 class="u-margin-top-big">Create new Post</h1>
            <section class="new-post-form">
                <AdminPostForm @submit="onSubmitted()"/>
            </section>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        layout: 'admin',
        middleware: ['auth', 'check-auth'],
        computed: {
            onSubmitted (postData) {
                this.$store.dispatch('addPost', postData)
                .then(() => {
                    this.$router.push('/admin')
                })
            }
        }
    }
</script>