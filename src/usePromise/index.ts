import {
  useRef,
  useState,
  useCallback
} from 'react'
import useRefState from '../useRefState'
import useRefProps from '../useRefProps'
import { generateUUID } from '../utils'
// 定义usePromise的返回值
export interface Res<T, S> {
  loading?: boolean
  error?: Error
  value?: S
  setValue: (v: S) => void
  call: T
  callIgnoreError: T
  reset: () => void
  retry: () => void
}

// 定义usePromise 参数
export interface UsePromiseOptions {
  // 如果promise正在加载中则跳过，默认为true
  skipOnLoading?: boolean
}

function usePromise<T>(
  action: () => Promise<T>,
  option?: UsePromiseOptions
): Res<() => Promise<T>, T>

function usePromise<T, A>(
  action: (arg0: A) => Promise<T>,
  option?: UsePromiseOptions
): Res<(arg0: A) => Promise<T>, T>

function usePromise<T, A, B>(
  action: (arg0: A, arg1: B) => Promise<T>,
  option?: UsePromiseOptions
): Res<(arg0: A, arg1: B) => Promise<T>, T>

function usePromise<T, A, B, C>(
  action: (arg0: A, arg1: B, arg2: C) => Promise<T>,
  option?: UsePromiseOptions
): Res<(arg0: A, arg1: B, arg2: C) => Promise<T>, T>

function usePromise<T, A, B, C, D>(
  action: (arg0: A, arg1: B, arg2: C, arg3: D) => Promise<T>,
  option?: UsePromiseOptions
): Res<(arg0: A, arg1: B, arg2: C, arg3: D) => Promise<T>, T>

function usePromise(
  action: (...args: any[]) => Promise<any>,
  option?: UsePromiseOptions
): Res<(...args: any) => Promise<any>, any>

/**
 * 接受一个action，用于执行异步操作
 */
function usePromise (
  action: (...args: any[]) => Promise<any>,
  option: UsePromiseOptions = { skipOnLoading: true }
): Res<(...args: any) => Promise<any>, any> {
  const actionRef = useRefProps(action)
  const optionRef = useRefProps(option)
  const [loading, setLoading, loadingRef] = useRefState(false)
  const taskIdRef = useRef<string>()
  const argsRef = useRef<any[]>()
  const [value, setValue] = useState()
  const [error, setError, errorRef] = useRefState<Error | undefined>()

  const caller = useCallback(async (...args: any[]) => {
    argsRef.current = args
    if (loadingRef.current && optionRef.current.skipOnLoading) {
      return
    }
    const taskId = generateUUID()
    taskIdRef.current = taskId

    // 已经有新的任务在执行了，什么都不做
    const shouldContinue = () => {
      if (taskId !== taskIdRef.current) {
        return false
      }
      return true
    }

    try {
      setLoading(true)
      setError(undefined)
      const res = await actionRef.current(...args)

      if (!shouldContinue()) return
      setValue(res)
      return res
    } catch (err) {
      if (shouldContinue()) {
        setError(err)
      }
      throw err
    } finally {
      if (shouldContinue()) {
        setLoading(false)
      }
    }
  }, [])

  // 不抛出异常
  const callIgnoreError = useCallback(
    async (...args: any[]) => {
      try {
        return await caller(...args)
      } catch {
        // ignore
      }
    },
    [caller]
  )

  const reset = useCallback(() => {
    setLoading(false)
    setValue(undefined)
    setError(undefined)
  }, [])

  // 失败后重试
  const retry = useCallback(() => {
    if (argsRef.current && errorRef.current) {
      return callIgnoreError(...argsRef.current)
    }
    throw new Error('not call yet')
  }, [])

  return {
    loading,
    error,
    call: caller,
    callIgnoreError,
    value,
    setValue,
    reset,
    retry
  }
}

export default usePromise
