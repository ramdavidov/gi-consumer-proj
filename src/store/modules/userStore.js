import { userService } from "../../services/userService"

export const userStore = {
    state: {
        loggedInUser: null
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser
        }
    },
    mutations: {
        setLoggedInUser(state, { user }) {
            state.loggedInUser = user
        }
    },
    actions: {
        async login(context, { userCred }) {
            const user = await userService.login(userCred)
            try {
                context.commit({ type: 'setLoggedInUser', user })
            } catch (err) {
                console.log('err', err)
            }
        }
    }
}