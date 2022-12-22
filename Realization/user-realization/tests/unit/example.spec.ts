import { mount } from '@vue/test-utils'
import RegisterUser from '@/views/RegisterUser.vue'

describe('RegisterUser.vue', () => {
  it('renders RegisterUser', () => {
    const wrapper = mount(RegisterUser)
    expect(wrapper.text()).toMatch('RegisterUser')
  })
})
