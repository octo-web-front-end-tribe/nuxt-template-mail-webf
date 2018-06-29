import Vue from 'vue'
import HeroImageFlush from '@/components/EmailBody/HeroImageFlush'
import configuration from '@/contents/config';

describe.skip('HeroImageFlush Component', () => {
    let $mounted;

    const Constructor = Vue.extend(HeroImageFlush);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                fullImage: configuration.header.fullImage
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});