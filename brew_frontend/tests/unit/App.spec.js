import Vue from 'vue'
import Vuex from 'vuex'
import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
// import createStoreConfig from './test-store-config'

const localVue = createLocalVue()
localVue.use(Vuex)

// describe('App test test', () => {
//     const wrapper = mount(App)
//     it('hides h1 if a user is logged out by default', async () => {
//         wrapper.setData({ loggedIn: false })
//         await Vue.nextTick()

//         expect(wrapper.find('h1').isVisible()).to.equal(false)
//     })


//     it('shows h1 if a user is logged in', async () => {
//         wrapper.setData({ loggedIn: true })
//         await Vue.nextTick()

//         expect(wrapper.find('h1').isVisible()).to.equal(true)
//     })


// })

describe('Store test test', () => {
    it('hides h1 if a user is logged out by default', async () => {
        const store = new Vuex.Store({
            state: {
                loggedIn: false
            }
        })
        const wrapper = mount(App, {
            localVue,
            store
        })
        await Vue.nextTick()

        expect(wrapper.find('h1').isVisible()).to.equal(false)
    })


    it('shows h1 if a user is logged in', async () => {
        const store = new Vuex.Store({
            state: {
                loggedIn: true
            }
        })
        const wrapper = mount(App, {
            localVue,
            store
        })
        await Vue.nextTick()

        expect(wrapper.find('h1').isVisible()).to.equal(true)
    })
})

