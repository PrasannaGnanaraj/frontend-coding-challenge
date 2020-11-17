import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false
      }
    })
  })

  // Complete the following statements by implementing tests for the described behaviours
  it('should exist as a component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.text()).toBe('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    expect(wrapper.classes()).not.toContain('check-button--selected')
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: true
      }
    })
    expect(wrapper.classes()).toContain('check-button--selected')
  })

  it('should emit check with name when clicked with selected prop set to false', () => {
    wrapper.find('div.check-button').trigger('click')
    expect(wrapper.emitted().check).toBeTruthy()
    expect(wrapper.emitted().check[0]).toEqual(['Lorem ipsum'])
  })

  it('should emit check with name when clicked with selected prop set to true', () => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: true
      }
    })
    wrapper.find('div.check-button').trigger('click')
    expect(wrapper.emitted().uncheck).toBeTruthy()
  })
})
