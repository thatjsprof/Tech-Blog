<template>
    <div class="home-page">
        <Header />
        <main>
            <div class="row">
                <PostsList :posts="loadedPosts"></PostsList>
            </div>
        </main>
    </div>
</template>

<script>
    import Header from '@/components/Header/header.vue'

    export default {
        components: {
            Header
        },
        data () {
            return {
                
            }
        },
        computed: {
            loadedPosts () {
                return this.$store.getters.loadedPosts
            }
        }
    }
</script>