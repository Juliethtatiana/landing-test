import { defineStore } from 'pinia'
export const useOnboarding = defineStore('onboarding', {
  state: () => ({ user: undefined }),
  actions: {
    async login(form: object) {
      const result = await apiServices({
        method: 'POST',
        url: 'onboarding/login',
        data: form,
      })

      if (result?.status && result.code === 100) {
        setLoginUser(result?.data)
      }

      return result
    },

    async logout() {
      const result = await apiServices({
        method: 'POST',
        url: '/onboarding/logout',
        typeHeader: 'auth',
      })

      if (result.status && result.code === 100) {
        setLoginUser({ user: undefined, authToken: undefined })
      }

      return result
    },
  },
  getters: {
    getLoginUser: (state) => {
      return state.user || useCookie('userData').value
    },
  },
})
