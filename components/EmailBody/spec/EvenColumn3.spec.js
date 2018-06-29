import Vue from 'vue'
import EvenColumn3 from '@/components/EmailBody/EvenColumn3'
import configuration from '@/contents/config';

describe.skip('EvenColumn3 Component', () => {
    let $mounted;

    const Constructor = Vue.extend(EvenColumn3);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                title: configuration.mouvements.title,
                table: configuration.mouvements.table
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});