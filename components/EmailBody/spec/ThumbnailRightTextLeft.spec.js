import Vue from 'vue'
import ThumbnailRightTextLeft from '@/components/EmailBody/ThumbnailRightTextLeft'
import configuration from '@/contents/config';

describe('ThumbnailRightTextLeft Component', () => {
    let $mounted;

    const Constructor = Vue.extend(ThumbnailRightTextLeft);

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