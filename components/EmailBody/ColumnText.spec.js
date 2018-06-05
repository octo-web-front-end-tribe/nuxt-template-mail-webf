import Vue from 'vue'
import ColumnText from '@/components/EmailBody/ColumnText'

jest.mock('@/contents/parisWeb.md', () => {
    return require('@/components/spec/MarkdownMock')
});

describe('ColumnText Component', () => {
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