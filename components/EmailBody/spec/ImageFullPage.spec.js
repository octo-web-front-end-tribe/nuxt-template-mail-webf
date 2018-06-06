import Vue from 'vue'
import ImageFullPage from '@/components/EmailBody/ImageFullPage'
import configuration from '@/contents/config';

describe('ImageFullPage Component', () => {
    let $mounted;

    const Constructor = Vue.extend(ImageFullPage);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                title: 'Truck',
                image: '26T636T327',
                padding: '10px'
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});