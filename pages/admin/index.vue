<template>
    <div class="admin-page">
        <div class="row">
            <section class="new-post">
                <AppButton @click="$router.push('/admin/new-post')" :classes="classList" class="new_post">Create New Post</AppButton>
                <AppButton @click="onLogout" :classes="classList" class="logout">Logout</AppButton>
            </section>
            <section class="existing-post">
                <h1 :style="{ margin: '3rem 0rem' }">List of existing Posts</h1>
                <PostsList :posts="loadedPosts" isAdmin/>
            </section>
        </div>
    </div>
</template>

<script>
    import AppButton from '@/components/UI/AppButton.vue'
    
    export default {
        layout: 'admin',
        middleware: ['check-auth', 'auth'],
        data () {
            return {
                classList: 'btn btn-text'
            }
        },
        components: {
            AppButton
        },
        computed: {
            loadedPosts() {
                return this.$store.getters.loadedPosts;
            }
        },
        methods: {
            onLogout () {
                this.$store.dispatch('logout')
                this.$router.push('/admin/auth')
            }
        }
    }
</script>