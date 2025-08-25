import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import {vars, sprinkles} from '@michemayer/vanilla-extract-styles'

export type Size = 'small' | 'medium' | 'large'

export type Color = 'primary' | 'secondary'

// {
        
//         display: 'inline-block',
//         cursor: 'pointer',
//         border: 0,
//         borderRadius: '3em',
//         fontWeight: 700,
//         lineHeight: 1,
//     }

export const variants = recipe({
    base: style(
        {
            borderRadius: '3em',
        },
        sprinkles({
            display: 'inline',
            fontWeight: 'bold',
        })
    ),
    variants: {
        size: {
            small: { fontSize: vars.typography.fontSizes.sm, padding: vars.spaces.sm },
            medium: { fontSize: vars.typography.fontSizes.md, padding: vars.spaces.md },
            large: { fontSize: vars.typography.fontSizes.lg, padding: vars.spaces.lg },
        },
        color: {
            primary: { backgroundColor: vars.colors.primaryOneDefault, color: vars.colors.textDefault },
            secondary: { backgroundColor: vars.colors.secondaryDefault, color: vars.colors.textDefault }
        }
    }
})