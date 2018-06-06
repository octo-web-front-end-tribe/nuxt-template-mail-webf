import Vue from 'vue'
import EmailFooter from '@/components/EmailFooter'
import configuration from '@/contents/config'

describe('EmailFooter Component', () => {
    let $mounted;

    const Constructor = Vue.extend(EmailFooter);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                params: {
                    driveImageID: configuration.logoWebF.linkID
                }
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});