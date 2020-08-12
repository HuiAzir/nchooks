import { useEffect, useState, MutableRefObject } from 'react'

function useScrollPercent (ref: MutableRefObject<HTMLElement>): number | undefined {
  const [percent, setPercent] = useState(0)
  useEffect(() => {
    const current = ref.current
    let parentNode
    if (current === document.documentElement) {
      parentNode = window
    }
    const listener = () => {
      setPercent(current.scrollTop / (current.scrollHeight - current.clientHeight))
    }
    if (parentNode) {
      parentNode.addEventListener('scroll', listener)
    } else {
      current && current.addEventListener('scroll', listener)
    }
    return () => {
      if (parentNode) {
        (parentNode as Window).removeEventListener('scroll', listener)
      } else {
        current && current.removeEventListener('scroll', listener)
      }
    }
  }, [])
  return percent
}

export default useScrollPercent
