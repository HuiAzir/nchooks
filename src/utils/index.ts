export function isFunction<S> (initial?: S | (() => S)): initial is () => S {
  return typeof initial === 'function'
}
