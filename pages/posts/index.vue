<template>
    <div class="posts-page">
        <PostsHeader />
        <div class="row">
            <PostsList :posts="loadedPosts"/>
        </div>
    </div>
</template>

<script>
    import PostsHeader from '@/components/Header/PostsHeader.vue'

    export default {
        components: {
            PostsHeader
        },
        data () {
            return {
                classList: 'btn btn--default'
            }
        },
        computed: {
            loadedPosts () {
                return this.$store.getters.loadedPosts
            }
        }
    }
</script>