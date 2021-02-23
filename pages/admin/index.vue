<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')" :classes="classList new">Create New Post</AppButton>
            <AppButton @click="onLogout" :classes="classList logout">Logout</AppButton>
        </section>
        <section class="existing-post">
            <h1 :style="{ margin: '3rem 0rem' }">List of existing Posts</h1>
            <PostList isAdmin/>
        </section>
    </div>
</template>

<script>
    import AppButton from '@/components/UI/AppButton.vue'
    
    export default {
        layout: 'admin',
        middleware: ['auth', 'check-auth'],
        data () {
            return {
                classList: 'btn btn-text'
            }
        },
        components: {
            AppButton
        },
        methods: {
            onLogout () {
                this.$store.dispatch('logout')
                this.$router.push('/admin/auth')
            }
        }
    }
</script>