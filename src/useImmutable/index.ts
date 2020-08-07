import { useCallback, useState, Dispatch } from 'react'
import produce from 'immer'

function useImmutable<T> (initialValue: T | (() => T)): [ T, Dispatch<any>] {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [state, setState] = useState<T>(produce(initialValue, () => { }))
  return [
    state,
    useCallback<Dispatch<T>>((updater:T) => {
      setState(produce(updater as any))
    }, [])
  ]
}

export default useImmutable
