import { sprinkles } from './sprinkles.css'
import type { Sprinkles as SprinkleVars } from './sprinkles.css'
import { vars } from './vars.css'

export type * from 'types'
export type Sprinkles = SprinkleVars
export { sprinkles, vars }

export default {
    sprinkles,
    vars,
}