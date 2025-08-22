import { breakpoints } from '@properties/breakpoints.property';
import { spaces } from '@properties/spaces.property';
import { colorContract } from '@contracts/color.contract.css';
import { typographyContract } from '@contracts/typography.contract.css';
import { fontSizeContract } from '@contracts/font-size.contract.css';
import { maxWidths } from '@properties/max-widths.property';
import { colors } from '@properties/colors.property';
import { shadows } from '@properties/shadows.property';
import { fontWeights } from '@properties/font-weights.property';
export const vars = {
    breakpoints,
    spaces,
    maxWidths,
    colors: {
        ...colors,
        ...colorContract,
    },
    shadows,
    typography: {
        fontWeights,
        fontSizes: fontSizeContract,
        fonts: typographyContract,
    }
};
