import { login } from "./login";

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'romulo@gmail.com'

    it('Deve exibir um alert com boas vindas, caso o email seja válido', async () => {
        await login('romulo@gmail.com')
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a), ${mockEmail}!`) //espera que o alert tenha sido chamado
    })

    it('Não deve exibir um alert com boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo(a)`) //espera que o alert tenha sido chamado
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido.')
    })
})