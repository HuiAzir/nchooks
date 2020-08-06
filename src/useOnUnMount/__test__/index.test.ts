import { renderHook } from '@testing-library/react-hooks'
import useOnUnMount from '../index'

describe('useOnUnMount', () => {
  it('should be defined', () => {
    expect(useOnUnMount).toBeDefined()
  })
  it('test useOnUnMount', async () => {
    const fn = jest.fn()
    const hook = renderHook(() => useOnUnMount(fn))
    expect(fn).toBeCalledTimes(0)
    hook.rerender()
    expect(fn).toBeCalledTimes(0)
    hook.unmount()
    expect(fn).toBeCalledTimes(1)
  })
})
