const conta = {
    email: 'romulo@gmail.com',
    password: '123456',
    name: 'Rômulo'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 2000)
})