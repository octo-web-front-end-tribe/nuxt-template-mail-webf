import Vue from 'vue'
import EvenColum310 from '@/components/EmailBody/EvenColum2/EvenColum310'
import configuration from '@/contents/config'
import Drive from '@/services/linkDrive'

describe('EvenColum310 Component', () => {
    let $mounted

    const Constructor = Vue.extend(EvenColum310)

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                journee: configuration.table[0]
            }
        }).$mount()
    })

    test('snapshot', () => {
        let $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot()
    })

    describe('data image value', () => {
        describe('when params journee has an image', () => {
            test('should drive link is present', () => {
                expect($mounted.image).toEqual("https://drive.google.com/uc?id=13jhw3_hwp9wmLmrNCWE3040JCz9-Bx2V")
            })
        })

        describe('when params journee has an empty image', () => {
            beforeEach(() => {
                Drive.linkDrive = jest.fn().mockReturnValueOnce("")

                $mounted = new Constructor({
                    propsData: {
                        journee: configuration.table[0]
                    }
                }).$mount()
            })

            test('should alternative image is used', () => {
                expect($mounted.image).toEqual("http://placehold.it/310")
            })
        })
    });
})