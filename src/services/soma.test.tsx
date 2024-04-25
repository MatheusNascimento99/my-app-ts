import { Soma, Multiplicar } from "./soma"

describe('Soma', () =>{
    it('deve somar 1 ao número informado', ()=>{
        const value = Soma(1)
        expect(value).toBe(2)
    })

    it('Deve multiplicar o número por 2', ()=>{
        const value = Multiplicar(2, 2)
        expect(value).toBe(4)
    })

    it('Deve multiplicar o número por 3', ()=>{
        const value = Multiplicar(2, 3)
        expect(value).toBe(6)
    })

    it('Deve informar um erro com o multiplicador diferente de 2 ou 3', () =>{
        const value = Multiplicar(2,4)
        expect(value).toBe('Multiplicador não aceito')
    })
})


