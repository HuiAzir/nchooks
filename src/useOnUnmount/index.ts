import { useEffect } from 'react'

function useOnUnmount (fn: () => void): void {
  useEffect(() => {
    return () => {
      fn()
    }
  }, [])
}

export default useOnUnmount
