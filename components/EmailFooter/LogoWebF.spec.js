import Vue from 'vue'
import LogoWebF from '@/components/EmailFooter/LogoWebF'
import configuration from '@/contents/config'

describe('LogoWebF Component', () => {
    let $mounted

    const Constructor = Vue.extend(LogoWebF)

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                logoWebFLinkID: configuration.logoWebF.linkID
            }
        }).$mount()
    })

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot()
    })
})