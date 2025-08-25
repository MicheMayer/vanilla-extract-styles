import { sprinkles } from './sprinkles.css'
import type { Sprinkles as SprinkleVars } from './sprinkles.css'
import { vars } from './vars.css'
import * as themes from './themes'
import utils from './utils'

export type * from 'types'
export type Sprinkles = SprinkleVars
export { sprinkles, vars, utils, themes }

export default {
    sprinkles,
    vars,
    utils,
    themes,
}