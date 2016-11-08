import Vue from 'vue';
import Alert from './../components/Alert.vue';

describe('Alert components', function() {
  it('should have type props', function () {
    expect(typeof Alert.props.type).toBe('object');
  });

  it('should have default value for show props', function() {
    expect(Alert.props.show.default).toBe(true);
  });

  it('should be closed when props is false', function() {
    const Ctor = Vue.extend(Alert);
    const vm = new Ctor({
      propsData: {
        show: false
      }
    }).$mount();
    expect(vm.$el.attributes['class'].value.split(" ").indexOf('in')).toBe(-1);
  });
});
