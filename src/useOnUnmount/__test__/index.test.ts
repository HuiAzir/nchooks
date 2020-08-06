import { renderHook } from '@testing-library/react-hooks'
import useOnUnmount from '../index'

describe('useOnUnmount', () => {
  it('should be defined', () => {
    expect(useOnUnmount).toBeDefined()
  })
  it('test useOnUnmount', async () => {
    const fn = jest.fn()
    const hook = renderHook(() => useOnUnmount(fn))
    expect(fn).toBeCalledTimes(0)
    hook.rerender()
    expect(fn).toBeCalledTimes(0)
    hook.unmount()
    expect(fn).toBeCalledTimes(1)
  })
})
