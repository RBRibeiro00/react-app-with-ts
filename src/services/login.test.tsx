import { login } from "./login";

describe('login', () => {

    const mockEmail = 'romulo@email.com'
    const mockPassword = '123456'

    it('Deve retornar true e redirecionar para a página da conta, caso o email e a senha sejam válidos', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um alert caso o email ou a senha seja inválidos', async() => {
        const response = await login('email@invalido.com', 'senhaInvalida')
        expect(response).toBeFalsy()
    })
})