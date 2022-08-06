import { useEffect } from 'react'
import useVideoStore from 'store/useVideoStore'

const useRefreshVideoSrc = () => {
  const setSrc = useVideoStore((state) => state.setSrc)
  useEffect(() => {
    setSrc('');
  }, [])
  
}

export default useRefreshVideoSrc