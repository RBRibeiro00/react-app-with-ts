const conta = {
    email: 'romulo@email.com',
    password: '123456',
    name: 'Rômulo',
    balance: 3000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 2000)
})