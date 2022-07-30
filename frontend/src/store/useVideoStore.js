import create from 'zustand'

const useVideoStore = create((set) => ({
  currentSrc: "",
  setSrc: (newSrc) => set((state) => ({ currentSrc: newSrc })),
}))

export default useVideoStore
