import {} from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import useRefState from '../index'

describe('useRefState', () => {
  it('test useRefState where initialValue not a function', async () => {
    const initialValue = { count: 0 }
    const { result } = renderHook(() => useRefState(initialValue))
    expect(result.current[0]).toBe(initialValue)
    expect(result.current[2].current).toBe(initialValue)

    const newValue = {
      count: 100
    }
    act(() => {
      result.current[1](newValue)
    })
    expect(result.current[0]).toBe(newValue)
    expect(result.current[2].current).toBe(newValue)
  })
  it('test useRefState where initialValue is a function', async () => {
    const initialValue = { count: 0 }
    const initialValueFn = () => initialValue
    const { result } = renderHook(() => useRefState(initialValueFn))
    expect(result.current[0]).toBe(initialValue)
    expect(result.current[2].current).toBe(initialValue)

    const newValue = {
      count: 100
    }
    act(() => {
      result.current[1](newValue)
    })
    expect(result.current[0]).toBe(newValue)
    expect(result.current[2].current).toBe(newValue)
  })
})
