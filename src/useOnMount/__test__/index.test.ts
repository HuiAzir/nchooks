import { renderHook } from '@testing-library/react-hooks'
import useOnMount from '../index'

describe('useOnMount', () => {
  it('should be defined', () => {
    expect(useOnMount).toBeDefined()
  })
  it('test mount', async () => {
    const fn = jest.fn()
    const hook = renderHook(() => useOnMount(fn))
    expect(fn).toBeCalledTimes(1)
    hook.rerender()
    expect(fn).toBeCalledTimes(1)
    hook.unmount()
    expect(fn).toBeCalledTimes(1)
  })
})
