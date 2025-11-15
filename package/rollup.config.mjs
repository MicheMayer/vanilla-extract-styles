import { globSync } from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import distDelete from 'rollup-plugin-delete'
import tscAlias from 'rollup-plugin-tsc-alias';

var outDir = path.resolve(import.meta.dirname, 'dist');
var tsconfigFile = path.resolve(import.meta.dirname, './tsconfig.json');

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
    dir: outDir,
    exports: 'named',
  },
  external: [
    '@vanilla-extract/css',
    '@vanilla-extract/recipes',
    '@vanilla-extract/sprinkles',
  ],
  plugins: [
    distDelete({ targets: outDir }),
    nodeResolve(),
    typescript({
      tsconfig: tsconfigFile,
    }),
    tscAlias({ 
      configFile: tsconfigFile,
      outDir: `${outDir}/dts`,
    }),
  ],
}
