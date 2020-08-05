import { useRef } from 'react'
import { isFunction } from '../utils'

function useInstance<T> (initial?: T | (()=>T)): T | undefined {
  const instance = useRef<T>()
  if (instance.current === undefined) {
    if (initial) {
      instance.current = isFunction(initial) ? initial() : initial
    } else {
      instance.current = {} as T
    }
  }
  return instance.current
}

export default useInstance
