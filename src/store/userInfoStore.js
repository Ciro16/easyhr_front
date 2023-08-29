import { create } from 'zustand'
import { persist } from 'zustand/middleware'

let store = (set) => ({
  isAuth: false,
  setIsAuth: (isAuth) => set(() => ({ isAuth })),

  userInfo: {},
  setUserInfo: (userInfo) => set(() => ({ userInfo }))
})

store = persist(store, { name: 'user' })

const useStore = create(store)

export default useStore
