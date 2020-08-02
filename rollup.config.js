import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
export default {
  input: 'src/index.ts',
  output: [{
    file: 'esm/index.js',
    format: 'esm'
  },
  {
    file: 'lib/index.js',
    format: 'cjs'
  }
  ],
  plugins: [
    typescript(),
    babel({
      presets: [
        ['@babel/preset-env',
          {
            modules: false,
            loose: true,
            targets: {
              chrome: '58',
              ie: '11'
            }
          }
        ]
      ]
    })
  ],
  external: ['react']
}
