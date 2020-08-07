import { useCallback, useState, Dispatch } from 'react'
import produce from 'immer'

function useImmutable<T> (initialValue?: T | (() => T)): [ T | undefined, Dispatch<any>] {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [state, setState] = useState<T | undefined>(produce(initialValue, () => { }))
  return [
    state,
    useCallback<Dispatch<any>>((updater:any) => {
      setState(produce(updater))
    }, [])
  ]
}

export default useImmutable
