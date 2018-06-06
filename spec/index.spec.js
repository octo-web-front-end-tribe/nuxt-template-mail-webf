import Vue from 'vue'
import index from '@/pages/index'

describe('index Component', () => {
    let $mounted;

    const Constructor = Vue.extend(index);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {}
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});