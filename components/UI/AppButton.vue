<template>
    <a
        :class="classes"
        v-bind="$attr"
        v-on="$listeners"
    >    
        <slot />
    </a>
</template>

<script>
    export default {
        props: {
            classes: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>