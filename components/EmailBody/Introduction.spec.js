import Vue from 'vue'
import Introduction from '@/components/EmailBody/Introduction'
import configuration from '@/contents/config';

jest.mock('@/contents/1_introduction.md', () => {
    return require('@/components/spec/MarkdownMock')
});

describe('Introduction Component', () => {
    let $mounted;

    const Constructor = Vue.extend(Introduction);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
               config: configuration
            }
        }).$mount()
    });

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML;
        expect($html).toMatchSnapshot()
    });
});