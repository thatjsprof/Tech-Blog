<template>
    <div class="admin-auth-page">
        <div class="row">
            <form @submit="onSubmit">
                <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput>
                <AppControlInput type="password" v-model="password">Password</AppControlInput>
                <AppButton type="submit" classes="btn btn-text">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
                <AppButton
                    type="button"
                    classes="btn btn-text"
                    style="margin-left: 10px"
                    @click="isLogin = !isLogin">
                        Switch to {{ isLogin ? 'Signup' : 'Login' }}
                </AppButton>
            </form>
        </div>
    </div>
</template>
  
<script>
    
    export default {
        name: 'AdminAuthPage',
        layout: 'admin',
        data () {
            return {
                isLogin: true,
                email: '',
                password: ''
            }
        },
        methods: {
            onSubmit () {
                this.$store.dispatch('authenticateUser', {
                    isLogin: this.isLogin,
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.$router.push('/admin')
                })
            }
        }
    }
</script>
  
  