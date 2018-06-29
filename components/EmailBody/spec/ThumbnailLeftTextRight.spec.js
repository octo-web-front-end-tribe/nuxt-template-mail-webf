import Vue from 'vue'
import ThumbnailLeftTextRight from '@/components/EmailBody/ThumbnailLeftTextRight'
import configuration from '@/contents/config';

describe.skip('ThumbnailLeftTextRight Component', () => {
    let $mounted;

    const Constructor = Vue.extend(ThumbnailLeftTextRight);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                title: configuration.parisWeb.title,
                content: configuration.parisWeb.content,
                image: configuration.parisWeb.image,
                linkButton: configuration.parisWeb.linkButton
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});