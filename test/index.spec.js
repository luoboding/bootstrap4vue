import Vue from 'vue';
import MyComponent from './../components/MyComponent.vue';

function getRenderedText(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el.textContent;
}

describe('MyComponent', () => {
  it('has msg prop', () => {
    expect(typeof MyComponent.props.msg).toBe('object');
  });

  it('msg prop has the default value "Hello world"', () => {
    expect(MyComponent.props.msg.default).toBe('Hello world');
  });

  it('render correctly with different props', () => {
    expect(getRenderedText(MyComponent, {
      msg: 'Hello',
    })).toBe('Hello');
    expect(getRenderedText(MyComponent, {
      msg: 'Bye',
    })).toBe('Bye');
  });
});
