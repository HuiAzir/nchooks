import { useEffect } from 'react'
import usePromise, { UsePromiseOptions, Res as usePromiseResult } from '../usePromise'

function usePromiseEffect<T> (
  action: (...args: any[]) => Promise<T>,
  args?: any[],
  options?: UsePromiseOptions
):usePromiseResult<(...args: any[]) => Promise<T>, T> {
  const prom = usePromise(action, options)

  useEffect(() => {
    prom.callIgnoreError.apply(null, args)
  }, args)

  return prom
}

export default usePromiseEffect
