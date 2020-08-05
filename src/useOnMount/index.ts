import { useEffect } from 'react'

function useOnMount (fn:(...args: unknown[]) => unknown):void {
  useEffect(() => {
    fn()
  }, [])
}

export default useOnMount
