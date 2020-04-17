import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
    it('hides h1 if a user is logged out', () => {
        const wrapper = shallowMount(App)
        wrapper.setData({ loggedIn: false })
        expect(wrapper.find('h1').isVisible()).to.equal(false)
    })


    it('shows h1 if a user is logged in', () => {
        const wrapper = shallowMount(App)
        wrapper.setData({ loggedIn: true })
        expect(wrapper.find('h1').isVisible()).to.equal(true)
    })

})
