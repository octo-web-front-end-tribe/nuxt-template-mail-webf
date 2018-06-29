import Vue from 'vue'
import ColumnText from '@/components/EmailBody/ColumnText'

describe.skip('ColumnText Component', () => {
    let $mounted;

    const Constructor = Vue.extend(ColumnText);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                componentName: 'ParisWeb'
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    })
});