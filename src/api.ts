const conta = {
    email: 'romulo@gmail.com',
    password: '123456',
    name: 'Rômulo Ribeiro',
    balance: 3000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 2000)
})