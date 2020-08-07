import { useEffect } from 'react'

function useOnMount (fn:() => void):void {
  useEffect(() => {
    fn()
  }, [])
}

export default useOnMount
