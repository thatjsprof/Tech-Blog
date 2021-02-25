<template>
    <div class="admin-auth-page u-margin-top-huge">
        <div class="row">
            <form @submit.prevent="onSubmit">
                <AppControlInput type="text" v-model="email">E-Mail Address</AppControlInput>
                <AppControlInput type="password" v-model="password">Password</AppControlInput>
                <AppButton type="submit" classes="btn btn-text">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
                <AppButton
                    type="button"
                    classes="btn btn-text"
                    style="margin-left: 15px"
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
                if (this.checkFields()) {
                    if (this.checkEmail()) {
                        this.$store.dispatch('authenticateUser', {
                            isLogin: this.isLogin,
                            email: this.email,
                            password: this.password
                        })
                        .then((res) => {
                            if (res?.response?.status) {
                                let response = res?.response?.status || null
                                let message = this.$checkStatus (response, this.isLogin)

                                if (!message) {
                                    this.$router.push('/admin')
                                } else {
                                    this.$toastr.e(message)
                                }
                            } else {
                                this.$toastr.s('You are logged in')
                                this.$router.push('/admin')
                            }
                        })
                    } else {
                        this.$toastr.e('Please enter a valid Email')
                    }
                } else {
                    this.$toastr.e(this.isLogin ? 'Login details required' : 'Signup details required')
                }
            },
            checkEmail () {
                var re = /\S+@\S+\.\S+/;
                return re.test(this.email);
            },
            checkFields () {
                return this.email !== '' && this.password !== ''
            }
        }
    }
</script>
  
  