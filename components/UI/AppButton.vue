<template>
    <button
        :class="classes"
        v-bind="$attrs"
        v-on="$listeners"
    >    
        <slot />
    </button>
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