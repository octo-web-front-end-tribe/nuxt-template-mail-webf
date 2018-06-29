import Vue from 'vue'
import EvenColumn170 from '@/components/EmailBody/EvenColumn4/EvenColumn170'

describe.skip('EvenColumn170 Component', () => {
    let $mounted

    const Constructor = Vue.extend(EvenColumn170)

    beforeEach(() => {
        $mounted = new Constructor({
            propsData: {
                mouvement: {
                    image: "http://google.com/link/to/image.png",
                    entree: true
                }
            }
        }).$mount()
    })

    describe('data srcImage value', () => {
        describe('when params mouvement has an image', () => {
            test('should drive link is present', () => {
                expect($mounted.srcImage).toEqual("http://google.com/link/to/image.png")
            })
        });

        describe('when params journee has an empty image', () => {
            beforeEach(() => {
                $mounted = new Constructor({
                    propsData: {
                        mouvement: {
                            image: ""
                        }
                    }
                }).$mount()
            });

            test('should alternative image is used', () => {
                expect($mounted.srcImage).toEqual("http://placehold.it/200")
            })
        })
    });

    describe('data emoji1 value', () => {
        describe('when mouvement entree value is true', () => {
            test('should be 🍾 emoji', () => {
                expect($mounted.emoji1).toEqual("🍾")
            })
        });

        describe('when mouvement entree value is false', () => {
            beforeEach(() => {
                $mounted = new Constructor({
                    propsData: {
                        mouvement: {
                            entree: false
                        }
                    }
                }).$mount()
            });

            test('should be 😭 emoji', () => {
                expect($mounted.emoji1).toEqual("😭")
            })
        });
    });

    describe('data emoji2 value', () => {
        describe('when mouvement entree value is true', () => {
            test('should be 🍾 emoji', () => {
                expect($mounted.emoji2).toEqual("🍾")
            })
        });

        describe('when mouvement entree value is false', () => {
            beforeEach(() => {
                $mounted = new Constructor({
                    propsData: {
                        mouvement: {
                            entree: false
                        }
                    }
                }).$mount()
            });

            test('should be 😭 emoji', () => {
                expect($mounted.emoji2).toEqual("😭")
            })
        });
    });
});