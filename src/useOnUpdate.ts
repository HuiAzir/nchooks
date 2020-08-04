import { useEffect, useRef } from 'react'

function useOnUpdate (fn:()=>void, dep?: any[]):void {
  const ref = useRef({
    fn, mounted: false
  })
  useEffect(() => {
    if (!ref.current.mounted) {
      ref.current.mounted = true
    } else {
      ref.current.fn()
    }
  }, dep)
}

export default useOnUpdate
