
interface IDIoBank {
    login: boolean
}

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null =>{
    return localStorage.getItem('diobank')
}

export const creatLocalStorage = ():void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank:IDIoBank):void =>{
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}