import { renderHook, act } from '@testing-library/react-hooks'
import useImmutable from '../index'

describe('useImmutable', () => {
  it('should be defined', () => {
    expect(useImmutable).toBeDefined()
  })
  it('test useImmutable', async () => {
    const baseState = [
      { desc: 'Learn typescript', done: true },
      { desc: 'Try immer', done: false }
    ]
    const { result } = renderHook(() => useImmutable(baseState))

    expect(typeof result.current[1]).toBe('function')

    act(() => {
      result.current[1](draftState => {
        draftState.push({ desc: 'Tweet about it' })
        draftState[1].done = true
      })
    })

    expect(baseState.length).toBe(2)
    expect(baseState[1].done).toBe(false)
    expect(result.current[0].length).toBe(3)
    expect(result.current[0][1].done).toBe(true)
  })
})
