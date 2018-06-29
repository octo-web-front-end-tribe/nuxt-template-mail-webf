import Vue from 'vue'
import EvenColumn2 from '@/components/EmailBody/EvenColumn2'
import configuration from '@/contents/config';

describe.skip('EvenColumn2 Component', () => {
    let $mounted;

    const Constructor = Vue.extend(EvenColumn2);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                table: configuration.table
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});