import { useRef, MutableRefObject } from 'react'

function useRefProps<S> (props: S): MutableRefObject<S> {
  const ref = useRef<S>(props)
  ref.current = props
  return ref
}

export default useRefProps
