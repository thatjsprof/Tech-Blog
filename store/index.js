import Vuex from 'vuex'
import Cookies from "js-cookie";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts (state, posts) {
                state.loadedPosts = posts
            },
            addPost (state, post) {
                state.loadedPosts.push(post)
            },
            editPost (state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            },
            setToken (state, token) {
                state.token = token
            },
            clearToken (state) {
                state.token = null
            }
        },
        actions: {
            nuxtServerInit (vuexContext, context) {
                return context.app.$axios.$get('/posts.json')
                .then((data) => {
                    const postsArray = []
                    for (const key in data) {
                        postsArray.push({ ...data[key], id: key })
                    }
                    vuexContext.commit( 'setPosts', postsArray )
                })
                .catch((err) => {
                    console.log(err)
                })
            },
            addPost (vuexContext, post) {
                const newPost = { ...post, updatedDate: new Date() }
                console.log('adding')
                return this.$axios.$post('/posts.json?auth=' + vuexContext.state.token, newPost)
                .then((data) => {
                    vuexContext.commit('addPost', { ...newPost, id: data.name })
                })
                .catch((err) => {
                    return err
                })
            },
            editPost (vuexContext, post) {
                return this.$axios.$put('/posts/' + post.id + '.json?auth=' + vuexContext.state.token, post)
                .then(() => {
                    vuexContext.commit('editPost', post)
                })
                .catch((err) => {
                    return err
                })
            },
            setPosts (vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            authenticateUser (vuexContext, authData) {
                let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey
                if (!authData.isLogin) {
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
                }
                return this.$axios.$post(authUrl, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then((result) => {
                    vuexContext.commit('setToken', result.idToken)
                    localStorage.setItem('token', result.idToken)
                    localStorage.setItem('tokenExpiration', new Date().getTime() + +result.expiresIn * 1000)
                    Cookies.set('jwt', result.idToken)
                    Cookies.set('expirationDate', new Date().getTime() + +result.expiresIn * 1000)
                    console.log(Cookies)
                    // return this.$axios.$post(process.env.HOST + ':' + process.env.PORT, { data: 'Authenticated' })
                    return result
                })
                .catch((err) => {
                    return err
                })
            },
            initAuth (vuexContext, req) {
                let token
                let expirationDate

                if (req) {
                    if (!req.headers.cookie) {
                        return 
                    }
                    const jwtCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith('jwt='))
                    if(!jwtCookie) {
                        return
                    }
                    token = jwtCookie.split('=')[1]
                    expirationDate = req.headers.cookie.split(';').find((c) => c.trim().startsWith('expirationDate=')).split('=')[1]
                } else {
                    token = localStorage.getItem('token')
                    expirationDate = localStorage.getItem('tokenExpiration')
                }
                if (new Date().getTime() > +expirationDate || !token) {
                    console.log('No Token or invalid token')
                    vuexContext.dispatch('logout')
                    return
                }
                vuexContext.commit('setToken', token)
            },
            logout (vuexContext) {
                vuexContext.commit('clearToken')
                Cookies.remove('jwt')
                Cookies.remove('expirationDate')
                
                if (process.client) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('tokenExpiration')
                }
            }
        },
        getters: {
            loadedPosts (state) {
                return state.loadedPosts
            },
            isAuthenticated (state) {
                return state.token !== null
            }
        }
    })
}

export default createStore