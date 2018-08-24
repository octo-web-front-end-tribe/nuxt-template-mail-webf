import Vue from 'vue'
import EvenColum310 from '@/components/EmailBody/EvenColum2/EvenColum310'

describe('EvenColum310 Component', () => {
    let $mounted

    const Constructor = Vue.extend(EvenColum310)

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                params: {
                    tri: "TRI",
                    image: "http://google.com/link/to/image.png",
                    entree: true,
                }
            }
        }).$mount()
    })

    describe('data image value', () => {
        describe('when params mouvement has an image', () => {
            test('should use the image from params', () => {
                expect($mounted.image).toEqual("http://google.com/link/to/image.png")
            })
        })

        describe('when params mouvement has an empty image', () => {
            beforeEach(() => {
                $mounted = new Constructor({
                    propsData: {
                        params: {
                            image: "",
                        }
                    }
                }).$mount()
            })
            test('should use alternative image', () => {
                expect($mounted.image).toEqual("http://placehold.it/310")
            })
        })
    });

    describe('data emojis value', () => {
        describe('when mouvement entree value is true', () => {
            test('should be 🍾 emoji', () => {
                expect($mounted.emoji1).toEqual("🍾")
                expect($mounted.emoji2).toEqual("🍾")
            })
        });

        describe('when mouvement entree value is false', () => {
            beforeEach(() => {
                $mounted = new Constructor({
                    propsData: {
                        params: {
                            image: "",
                            entree: false,
                        }
                    }
                }).$mount()
            });

            test('should be 😭 emoji', () => {
                expect($mounted.emoji1).toEqual("😭")
                expect($mounted.emoji2).toEqual("😭")
            })
        });
    });
})