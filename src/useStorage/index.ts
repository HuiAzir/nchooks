import {
  useState,
  useCallback,
  Dispatch,
  SetStateAction
} from 'react'

function useStorage<T> (
  key: string,
  // 默认值
  defaultValue: T | (() => T),
  // 窗口关闭后是否保存数据
  keep = true
): [T|undefined, Dispatch<SetStateAction<T>>, () => void] {
  const storage = keep ? localStorage : sessionStorage

  const getStorageValue = () => {
    try {
      const storageValue = storage.getItem(key)
      if (storageValue !== null) {
        return JSON.parse(storageValue)
      } else if (defaultValue) {
        const value = typeof defaultValue === 'function' ? (defaultValue as () => T)() : defaultValue
        storage.setItem(key, JSON.stringify(value))
        return value
      } else {
        return undefined
      }
    } catch (error) {
      console.warn(`can not read ${key}: `, error)
    }
    return undefined
  }

  const [value, setValue] = useState<T | undefined>(getStorageValue())

  const save = useCallback<Dispatch<SetStateAction<T>>>((value) => {
    setValue(prevValue => {
      const finalValue = typeof value === 'function' ? (value as (prev: T | undefined) => T)(prevValue) : value
      storage.setItem(key, JSON.stringify(finalValue))
      return finalValue
    })
  }, [])

  const clear = useCallback(() => {
    storage.removeItem(key)
    setValue(undefined)
  }, [])
  return [value, save, clear]
}

export default useStorage
