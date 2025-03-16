import { sprinkles } from './sprinkles.css'
import type { Sprinkles as SprinkleVars } from './sprinkles.css'
import { vars } from './vars.css'
import utils from './utils'

export type * from 'types'
export type Sprinkles = SprinkleVars
export { sprinkles, vars, utils }

export default {
    sprinkles,
    vars,
    utils,
}