import { httpService } from './httpService'

export const userService = {
    login
}

async function login(userCred) {
    const user = await httpService.post('account/login', userCred)
    try {
        // console.log('user from API:', user)
        return user
    } catch (err) {
        console.log('Unauthorized attempt')
    }

}