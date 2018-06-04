import Vue from 'vue'
import EmailHeader from '@/components/EmailHeader'
import configuration from '@/contents/config'

describe('EmailFooter Component', () => {
    let $mounted

    const Constructor = Vue.extend(EmailHeader)

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                params: configuration.header
            }
        }).$mount()
    })

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot()
    })
})