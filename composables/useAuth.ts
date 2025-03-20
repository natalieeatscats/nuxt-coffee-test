import axios from 'axios'
import type {TUser} from "~/types/api.types";

export function useAuth() {

    const {baseUrl} = useRuntimeConfig().public // Добываем baseURL из энвика, подцепленного нюкстом

    const user = useState<TUser | null>('user', () => null)
    const error = useState<string>('error', () => '')

    async function login(usernameInput: string, passwordInput: string): Promise<boolean> {
        try {
            const response = await axios.get(`${baseUrl}/users?credentials.username=${usernameInput}`)
            const users = response.data as Array<TUser>

            if (users.length > 0) {
                const foundUser = users[0]
                const regex = /паролем '(.+?)'/
                const match = foundUser._comment?.match(regex)
                const realPassword = match ? match[1] : ''

                if (passwordInput === realPassword && foundUser.active) {
                    user.value = foundUser
                    error.value = ''
                    localStorage.setItem('user', JSON.stringify(foundUser))
                    return true
                }
            }
            error.value = 'Введены неверные данные авторизации. Попробуйте ещё раз'
            return false
        } catch (err) {
            console.error(err)
            error.value = 'Ошибка при выполнении запроса'
            return false
        }
    }

    function logout(): void {
        user.value = null
        localStorage.removeItem('user')
    }

    function initialize(): void {
        const userStr = localStorage.getItem('user')
        if (userStr) {
            user.value = JSON.parse(userStr)
        }
    }

    return {user, error, login, logout, initialize}
}
