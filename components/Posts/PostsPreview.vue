<template>
    <nuxt-link :to="postLink" class="col-1-of-3">
        <div class="card">
            <div class="card__image card__image--1"></div>
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
                type: Number,
                required: false
            },
            category: {
                type: String,
                required: false
            },
            previewText: {
                type: String,
                required: false
            },
            image: {
                type: String,
                required: false
            },
            isAdmin: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            postLink () {
                return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
            }
        }
    }
</script>