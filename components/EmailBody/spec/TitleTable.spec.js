import Vue from 'vue'
import TitleTable from '@/components/EmailBody/TitleTable'
import configuration from '@/contents/config';

describe.skip('TitleTable Component', () => {
    let $mounted;

    const Constructor = Vue.extend(TitleTable);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
               title: 'Coucou'
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});