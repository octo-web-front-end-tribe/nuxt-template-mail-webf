import Vue from 'vue'
import EmailBody from '@/components/EmailBody'
import configuration from '@/contents/config'

describe('EmailBody Component', () => {
    let $mounted

    const Constructor = Vue.extend(EmailBody);

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
    })
});