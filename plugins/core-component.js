import Vue from 'vue'

import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import PostsList from '@/components/Posts/PostsList.vue'
import AdminPostForm from '@/components/Admin/AdminPostForm'

Vue.component('AppButton', AppButton)
Vue.component('PostsList', PostsList)
Vue.component('AppControlInput', AppControlInput)
Vue.component('AdminPostForm', AdminPostForm)