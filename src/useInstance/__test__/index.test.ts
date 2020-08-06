import { renderHook, act } from '@testing-library/react-hooks'
import useInstance from '../index'
import useOnUpdate from '../../useOnUpdate'
describe('useInstance', () => {
  it('should be defined', () => {
    expect(useInstance).toBeDefined()
  })
  it('test useInstance', async () => {
    const fn = jest.fn()
    const counter = { count: 0 }
    const { result, rerender } = renderHook(() => {
      useOnUpdate(fn)
      return useInstance(counter)
    })

    expect(result.current).toEqual(counter)

    act(() => {
      result.current.count += 1
    })

    // 更新不会触发视图更新
    expect(result.current.count).toEqual(1)
    expect(fn).toBeCalledTimes(0)

    rerender()
    expect(result.current.count).toEqual(1)
    expect(fn).toBeCalledTimes(1)
  })
})
