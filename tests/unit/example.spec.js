import { mount } from '@vue/test-utils'
import Tab0 from '@/views/Tab0.vue'

describe('Tab0.vue', () => {
  it('renders tab 0 view', () => {
    const wrapper = mount(Tab0)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
