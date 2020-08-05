import {
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  useRef,
  MutableRefObject
} from 'react'

function useRefState<S> (
  initialState?: S | (() => S)
): [S | undefined, Dispatch<SetStateAction<S | undefined>>, MutableRefObject<S | undefined>] {
  const ref = useRef<S>()

  const [state, setState] = useState(() => {
    const value = typeof initialState === 'function' ? (initialState as (()=>S))() : initialState
    ref.current = value
    return value
  })

  const setValue = useCallback((value) => {
    if (typeof value === 'function') {
      setState((prevState) => {
        const finalValue = value(prevState)
        ref.current = finalValue
        return finalValue
      })
    } else {
      ref.current = value
      setState(value)
    }
  }, [])
  return [state, setValue, ref]
}

export default useRefState
