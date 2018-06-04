import Vue from 'vue'
import EmailFooter from '@/components/EmailFooter'

describe('EmailFooter Component', () => {
    let $mounted

    beforeEach(() => {
        $mounted = new Vue(EmailFooter).$mount()
    })

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot()
    })
})