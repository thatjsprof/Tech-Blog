<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.category">Category</AppControlInput>
        <AppControlInput v-model="editedPost.image">Thumbnail Link</AppControlInput>
        <AppControlInput
            control-type="textarea"
            v-model="editedPost.previewText">Preview Text</AppControlInput>
        <AppButton :classes="classes" type="submit">Save</AppButton>
        <AppButton
            type="button"
            style="margin-left: 10px"
            :classes="classes"
            @click="onCancel">Cancel</AppButton>
    </form>
</template>
  
<script>
    import AppControlInput from "@/components/UI/AppControlInput"
    import AppButton from "@/components/UI/AppButton"
  
    export default {
        components: {
            AppControlInput,
            AppButton
        },
        props: {
            post: {
                type: Object,
                required: false
            }
        },
        data() {
            return {
                classes: 'btn btn-text',
                editedPost: this.post
                ? { ...this.post }
                : {
                    category: "",
                    image: "",
                    previewText: ""
                }
            };
        },
        methods: {
            onSave() {
                this.$emit('submit', this.editedPost)
            },
            onCancel() {
                this.$router.push("/admin")
            }
        }
    };
</script>
  