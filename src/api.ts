
const conta = {
    email:'teste@teste.com',
    password:'123456',
    name:'Matheus Nascimento',
    balance:2000.00,
    id:'5'
}

export const api  = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(conta)
    }, 3000)
})