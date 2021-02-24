<template>
    <nuxt-link :to="postLink" class="col-1-of-3">
        <div class="card">
            <div class="card__image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
            <div class="card__body">
                <div class="card__text">
                    <p class="card__text--1">{{ category }}</p>
                    <p class="card__text--2">{{ previewText }}</p>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            previewText: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            isAdmin: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            postLink () {
                return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
            }
        }
    }
</script>