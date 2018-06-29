import Vue from 'vue'
import PreheaderText from '@/components/PreheaderText'
import configuration from '@/contents/config'

describe.skip('PreheaderText Component', () => {
    let $mounted

    const Constructor = Vue.extend(PreheaderText)

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                params: configuration.preheader
            }
        }).$mount()
    })

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot()
    })
})