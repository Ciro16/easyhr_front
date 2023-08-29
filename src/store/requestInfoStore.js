import { create } from 'zustand'
import { persist } from 'zustand/middleware'

let store = (set) => ({
  // isAuth: false,
  // setIsAuth: (isAuth) => set(() => ({ isAuth })),

  requestTypes: [],
  setRequestTypes: (requestTypes) => set(() => ({ requestTypes }))
})

store = persist(store, { name: 'requestTypes' })

const useRequestStore = create(store)

export default useRequestStore
