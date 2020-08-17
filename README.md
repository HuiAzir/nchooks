<div align="center">
  <h1>
    <br/>
    <br/>
    🐂🍺
    <br />
    nchooks
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/nchooks">
      <img src="https://img.shields.io/npm/v/nchooks.svg" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/nchooks">
      <img src="https://img.shields.io/npm/dm/nchooks.svg" alt="npm downloads" />
    </a>
    <a href="https://www.yuque.com/huiazir/nchooks/">
      <img src="https://img.shields.io/badge/doc-🚀-yellow.svg" alt="demos" />
    </a>
    <br />
    必不可少的 <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>集合.</em>
  </sup>
  <br />
  <br />
  <br />
  <br />
  <pre>
  npm i <a href="https://www.npmjs.com/package/nchooks">nchooks</a>
  or
  yarn add <a href="https://www.npmjs.com/package/nchooks">nchooks</a>
  </pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

- **数据**
  - [`useImmutable`](https://www.yuque.com/huiazir/nchooks/pakuwc) &mdash; 使用不可变数据。
  - [`useInstance`](https://www.yuque.com/huiazir/nchooks/ltdpg6) &mdash; 实例变量存取。
  - [`usePrevious`](https://www.yuque.com/huiazir/nchooks/qvobzg) &mdash; 获取上一次渲染的值。
  - [`useRefProps`](https://www.yuque.com/huiazir/nchooks/wg8fgp) &mdash; 引用最新的props。
  - [`useRefState`](https://www.yuque.com/huiazir/nchooks/okuwlw) &mdash; 引用最新的state。
    <br/>
    <br/>
- **生命周期**
  - [`useForceUpdate`](https://www.yuque.com/huiazir/nchooks/camgw8) &mdash; 强制组件更新。
  - [`useOnMount`](https://www.yuque.com/huiazir/nchooks/klr4g9) &mdash; 组件挂载时。
  - [`useOnUnMount`](https://www.yuque.com/huiazir/nchooks/tlofeq) &mdash; 组件卸载时。
  - [`useOnUpdate`](https://www.yuque.com/huiazir/nchooks/kxip04) &mdash; 组件更新时。
    <br/>
    <br/>
- **存储**
  - [`useStorage`](https://www.yuque.com/huiazir/nchooks/dsomdc) &mdash; 使用localStorage或sessionStorage。
    <br/>
    <br/>
- **数据请求**
  - [`usePromise`](https://www.yuque.com/huiazir/nchooks/agr5qv) &mdash; 简化数据请求逻辑。
    <br/>
    <br/>

## Usage

你需要安装React [`16.8.0`](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)或更高版本才能使用Hooks API。你可以分别导入每个钩子

```js
import useToggle from 'nchooks/lib/useToggle'
```

或使用 ES6 命名导入

```js
import {useToggle} from 'nchooks'
```

[img-demo]: https://img.shields.io/badge/demo-%20%20%20%F0%9F%9A%80-green.svg
