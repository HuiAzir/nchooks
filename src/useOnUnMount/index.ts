import { useEffect } from 'react'

function useOnUnMount (fn: () => void): void {
  useEffect(() => {
    return () => {
      fn()
    }
  }, [])
}

export default useOnUnMount
