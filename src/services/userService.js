import { httpService } from './httpService'

export const userService = {
    login
}

async function login(userCred) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const user = await httpService.post('account/login', userCred)
            try {
                resolve(user)
            } catch (err) {
                reject(err)
            }
        }, 3000)
    })
}