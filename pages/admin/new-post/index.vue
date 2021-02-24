<template>
    <div class="admin-new-post-page">
        <div class="row">
            <h1 class="u-margin-top-big">Create new Post</h1>
            <section class="new-post-form">
                <AdminPostForm @submit="onSubmitted"/>
            </section>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        layout: 'admin',
        middleware: ['check-auth', 'auth'],
        methods: {
            onSubmitted (postData) {
                this.$store.dispatch('addPost', postData)
                .then((res) => {
                    if (res?.response?.status) {
                        this.$toastr.e('Could not create post')
                    } else {
                        this.$toastr.s('Post created')
                        this.$router.push('/admin')
                    }
                })
            }
        }
    }
</script>