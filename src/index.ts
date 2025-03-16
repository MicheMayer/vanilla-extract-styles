import { sprinkles } from './sprinkles.css'
import type { Sprinkles as SprinkleVars } from './sprinkles.css'
import { vars } from './vars.css'
import contracts from '@contracts'
import utils from './utils'

export type * from 'types'
export type Sprinkles = SprinkleVars
export { sprinkles, vars, contracts, utils }

export default {
    sprinkles,
    vars,
    contracts,
    utils,
}