import Vue from 'vue'
import EmailButton from '@/components/EmailBody/EmailButton'

describe('EmailButton Component', () => {
    let $mounted;

    const Constructor = Vue.extend(EmailButton);

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                texte: 'Coucou',
                urlLink: '',
                alignButton: 'right'
            }
        }).$mount()
    });

    test('should texte value is set at texteSpan data attribut', () => {
        expect($mounted.texteSpan).toEqual('Coucou')
    });

    test('shoud alignButton value is set at align data attribut', () => {
        expect($mounted.align).toEqual('right')
    });

    describe('when texte value is empty', () => {

        beforeEach(() => {
            $mounted = new Constructor({
                propsData: {
                    texte: '',
                    urlLink: '',
                    alignButton: ''
                }
            }).$mount()
        });

        test('should default value is Button', () => {
            expect($mounted.texteSpan).toEqual('Button')
        })
    });

    describe('when alignButton value is empty', () => {
        beforeEach(() => {
            $mounted = new Constructor({
                propsData: {
                    texte: '',
                    urlLink: '',
                    alignButton: ''
                }
            }).$mount()
        });

        test('should default value is center', () => {
            expect($mounted.align).toEqual('center')
        })
    })
});