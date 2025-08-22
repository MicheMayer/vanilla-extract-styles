import { recipe } from '@vanilla-extract/recipes'

export type Size = 'small' | 'medium' | 'large'

export type Color = 'primary' | 'secondary'

export const variants = recipe({
    base: {
        display: 'inline-block',
        cursor: 'pointer',
        border: 0,
        borderRadius: '3em',
        fontWeight: 700,
        lineHeight: 1,
    },
    variants: {
        size: {
            small: { fontSize: '12px', padding: '10px 16px' },
            medium: { fontSize: '14px', padding: '11px 20px' },
            large: { fontSize: '16px', padding: '12px 24px' },
        },
        color: {
            primary: { backgroundColor: 'blue', color: 'white' },
            secondary: { backgroundColor: 'gray', color: 'black' }
        }
    }
})