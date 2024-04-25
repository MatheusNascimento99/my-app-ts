import { changeLocalStorage, creatLocalStorage, getAllLocalStorage } from "./storage"
const dioBank = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('deve retornar o objeto no localStorage com a chave diobank', () =>{
        const mockgetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockgetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () =>{
        creatLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () =>{
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

})
