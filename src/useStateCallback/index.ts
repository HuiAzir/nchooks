import { useEffect, useState, useRef } from 'react'

const useStateCallback = (initial: any): any => {
    let isUpdate = useRef<any>();
    const [state, setState] = useState(initial)
    const enhanceState = (state, func) => {
        setState(val => {
            isUpdate.current = func;
            return typeof state === 'function' ? state(val) : state
        })
    }
    useEffect(() => {
        isUpdate.current?.(state);
    },[state])
    return [state, enhanceState]
}

export default useStateCallback;