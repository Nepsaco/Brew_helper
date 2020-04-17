import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
    const wrapper = shallowMount(App)
    it('hides h1 if a user is logged out by default', async () => {
        await Vue.nextTick()

        expect(wrapper.find('h1').isVisible()).to.equal(false)
    })


    it('shows h1 if a user is logged in', async () => {
        wrapper.setData({ loggedIn: true })
        await Vue.nextTick()

        expect(wrapper.find('h1').isVisible()).to.equal(true)
    })

})
