import { mount } from '@vue/test-utils'
import FriendsList from '@/views/FriendsList.vue'

describe('FriendsList.vue', () => {
  it('renders FriendsList', () => {
    const wrapper = mount(FriendsList)
    expect(wrapper.text()).toMatch('FriendsList')
  })
})
