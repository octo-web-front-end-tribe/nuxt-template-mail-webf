import Vue from 'vue'
import Introduction from '@/components/EmailBody/Introduction'
import configuration from '@/contents/config';

describe.skip('Introduction Component', () => {
    let $mounted;

    const Constructor = Vue.extend(Introduction);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
               config: configuration
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});