import Vue from 'vue'
import NosMissions from '@/components/EmailBody/NosMissions/NosMissions'
import configuration from '@/contents/config'

describe('NosMissions Component', () => {
    let $mounted;

    const Constructor = Vue.extend(NosMissions);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                mission: configuration.missions[0]
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    })
});