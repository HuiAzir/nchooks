import { renderHook, act } from '@testing-library/react-hooks'
import useForceUpdate from '../index'
import useOnUpdate from '../../useOnUpdate'
describe('useForceUpdate', () => {
  it('should be defined', () => {
    expect(useForceUpdate).toBeDefined()
  })
  it('test useForceUpdate', async () => {
    let state = 1
    const { result } = renderHook(() => {
      useOnUpdate(() => {
        state += 1
      })
      return useForceUpdate()
    })
    expect(typeof result.current).toBe('function')
    act(() => {
      result.current()
    })
    expect(state).toBe(2)
  })
})
