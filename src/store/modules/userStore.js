import { userService } from "../../services/userService"

export const userStore = {
  state: {
    loggedInUser: null,
    isLoading: false,
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser
    },
    isLoading(state) {
      return state.isLoading
    }
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      state.loggedInUser = user
    },
    logout(state) {
      state.loggedInUser = null
    },
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading
    }
  },
  actions: {
    async login(context, { userCred }) {
      const user = await userService.login(userCred)
      try {
        context.commit({ type: 'setLoggedInUser', user })
      } catch (err) {
        console.log('err', err)
      } finally {
        context.commit({ type: 'setIsLoading', isLoading: false })
      }
    },
  }
}