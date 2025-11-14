import { globSync } from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import distDelete from 'rollup-plugin-delete'

export default {
  input: Object.fromEntries(
    globSync([
      `${import.meta.dirname}/src/index.ts`,
      `${import.meta.dirname}/src/**/*.css.ts`,
    ]).map((file) => [
      path.relative(
        `${import.meta.dirname}/src`,
        file.slice(0, file.length - path.extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
  ),
  output: {
    format: 'es',
    dir: `${import.meta.dirname}/dist`,
    exports: 'named',
  },
  external: [
    '@vanilla-extract/css',
    '@vanilla-extract/recipes',
    '@vanilla-extract/sprinkles',
  ],
  plugins: [
    distDelete({ targets: path.resolve(import.meta.dirname, 'dist') }),
    typescript({
      tsconfig: path.resolve(import.meta.dirname, './tsconfig.json'),
    }),
    nodeResolve(),
  ],
}
