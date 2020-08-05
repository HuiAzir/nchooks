import { useCallback, useState, Dispatch } from 'react'
import produce from 'immer'

function useImmutable<T> (initialValue?: T | (() => T)): [ T | undefined, Dispatch<any>] {
  const [state, setState] = useState<T | undefined>(initialValue)
  return [
    state,
    useCallback<Dispatch<any>>((updater:any) => {
      setState(produce(updater))
    }, [])
  ]
}

export default useImmutable
