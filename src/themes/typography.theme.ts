import { style, assignVars } from '@vanilla-extract/css'
import { typographyContract, type TypographyContract } from '@contracts/typography.contract.css'
import { fontSizeContract } from '@contracts/font-size.contract.css'
import { generateFontSizes, responsiveFontSizes } from '@utils/typography.utils'

export const createTheme = (
    typography: TypographyContract,
) =>
style(
    [
        {
            vars: assignVars(typographyContract, typography),
            fontFamily: typography.primary.fontFamily,
            fontSize: typography.primary.fontSize,
        },
        responsiveFontSizes({
            xs: { vars: assignVars(fontSizeContract, generateFontSizes(0.75, 3)) },
            md: { vars: assignVars(fontSizeContract, generateFontSizes(0.75, 4.5)) },
            '3xl': { vars: assignVars(fontSizeContract, generateFontSizes(0.75, 5.625)) },
        }),
    ]
)