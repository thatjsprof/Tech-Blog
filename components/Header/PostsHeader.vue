<template>
    <header class="header">
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">All Blog Posts</span>
            </h1>
            <nuxt-link to="/" class="btn btn--default">Back to home</nuxt-link>
        </div>
    </header>
</template>

<script>
    import AppButton from '@/components/UI/AppButton.vue'
    export default {
        data () {
            return {
                classList: 'btn btn--default',
            }
        }
    }
</script>