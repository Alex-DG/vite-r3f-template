import create from 'zustand'
import shallow from 'zustand/shallow'

const useStoreImpl = create(() => {
  return {
    debug: true,
  }
})

const useAppStore = (sel) => useStoreImpl(sel, shallow)
Object.assign(useAppStore, useStoreImpl)

const { getState, setState } = useStoreImpl

export { getState, setState }
export default useAppStore
