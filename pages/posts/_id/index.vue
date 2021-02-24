<template>
    <div class="posts-single-page">
        <div class="row text-center">
            <h1 class="post-title u-margin-top-big u-margin-bottom-big">
                {{ loadedPost.category }}
            </h1>
            <p class="u-margin-bottom-big">
                {{ loadedPost.previewText }}
            </p>
            <p>
                Last updated: {{ loadedPost.updatedDate | date}}
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