import { mount } from '@vue/test-utils'
import NewFriend from '@/views/NewFriend.vue'

describe('NewFriend.vue', () => {
  it('renders tab 1 NewFriend', () => {
    const wrapper = mount(NewFriend)
    expect(wrapper.text()).toMatch('NewFriend')
  })
})
