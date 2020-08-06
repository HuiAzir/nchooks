import { renderHook } from '@testing-library/react-hooks'
import useOnUpdate from '../index'

describe('useOnUpdate', () => {
  it('should be defined', () => {
    expect(useOnUpdate).toBeDefined()
  })
  it('test useOnUpdate', async () => {
    let state1 = 1
    let state2 = -1
    const hook1 = renderHook(() => useOnUpdate(() => {
      state1 += 1
    }))
    const hook2 = renderHook(() => useOnUpdate(() => {
      state2 -= 1
    }, [state1]))
    expect(state1).toEqual(1)
    expect(state2).toEqual(-1)
    hook1.rerender()
    expect(state1).toEqual(2)
    expect(state2).toEqual(-1)
    hook2.rerender()
    expect(state2).toEqual(-2)
  })
})
