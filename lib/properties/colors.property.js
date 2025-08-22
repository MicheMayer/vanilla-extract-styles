import { createTintAndShades } from '@utils/color.utils';
/** All common colors, that are not theme specific */
export const colors = {
    ...createTintAndShades({ baseline: '#f5f5f5', name: 'whiteSmoke' }),
    ...createTintAndShades({ baseline: '#101921', name: 'graphite' }),
    ...createTintAndShades({ baseline: '#eff0fb', name: 'oldIvory' }),
    ...createTintAndShades({ baseline: '#eeedec', name: 'skeletonLight' }),
    ...createTintAndShades({ baseline: '#fffd66', name: 'mark' }),
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    inherit: 'inherit',
};
