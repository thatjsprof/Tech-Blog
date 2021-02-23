<template>
    <div class="posts-single-page">
        <div class="row" style="text-align: center;">
            <h1 class="post-title u-margin-top-big">
                {{ loadedPost.category }}
            </h1>
            <p>
                {{ loadedPost.previewText }}
            </p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        asyncData (context) {
            return context.app.$axios.$get('/posts/' + context.params.id + '.json')
            .then((data) => {
                return {
                    loadedPost: data
                }
            })
            .catch((err) => {
                context.error(err)
            })
        }
    }
</script>