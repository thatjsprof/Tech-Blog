<template>
    <section class="section-posts">
        <PostsPreview 
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :category="post.category"
            :previewText="post.previewText"
            :isAdmin="isAdmin"
            :image="post.image"
        />
    </section>
</template>

<script>
    import PostsPreview from '@/components/Posts/PostsPreview.vue' 
    
    export default {
        components: {
            PostsPreview
        },
        props: {
            posts: {
                type: Array,
                required: true
            },
            isAdmin: {
                type: Boolean,
                required: false
            }
        }
    }
</script>