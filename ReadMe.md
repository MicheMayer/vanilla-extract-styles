# @michemayer/vanilla-extract-styles

A collection of useful styles implemented in [@vanilla-extract](https://github.com/vanilla-extract-css/vanilla-extract) aimed at standardizing design principals across repos.

> [!NOTE]
> Beware that this is typescript-only package at the moment.

## Usage:

## Installation

`npm install @michemayer/vanilla-extract-styles`

### Import styles
```typescript
    import { sprinkles, vars } from '@michemayer/vanilla-extract-styles'

    // ... integrate in code here
```

### Import types
```typescript
    import type { Color } from '@michemayer/vanilla-extract-styles'

    // ... integrate in code here
```

### Use global css reset
Import `global/reset.css` in your root source file to apply a css reset.
This reset file is designed to be as little opinionated as possible.

`index.ts`:
```typescript
import '@michemayer/vanilla-extract-styles/global/reset.css'

// rest of your implementation
```

### Set global font sizes
Import `global/font-sizes.css` in your root source file to set global font-sizes as variables.

`index.ts`:
```typescript
import '@michemayer/vanilla-extract-styles/global/font-sizes.css'

// rest of your implementation
```

### Load font faces
Import `global/font-faces.css` in your root source file and load custom font-faces.

`index.ts`:
```typescript
import { customFontFaces } from '@michemayer/vanilla-extract-styles/global/font-faces.css'

const fontFaces: FontFace[] = [
    {
        fontFamily: 'Bookman Old Style',
        src: '/fonts/bookman_old_style/bookman_old_style.ttf',
        fontWeight: 'normal',
        fontStyle: 'normal',
        preload: true,
    },
    {
        fontFamily: 'Harlow Solid',
        src: '/fonts/harlow/harlow-solid.ttf',
        fontWeight: 'normal',
        fontStyle: 'normal',
        preload: true,
    },
] as const

customFontFaces(fontFaces);

// rest of your implementation
```

## Contribute
Set credentials.
`npm set "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN"`

Publish a new version of this package
`npm run prepublish && npm publish`

### Testing package integration locally
This Repository provides a Dev Container under `./integration/`.

Use the command `npm run pack-locally` to pack a new version of this package.

In the container use `npm install packages/michemayer-vanilla-extract-styles-1.x.x.tgz` (replace version number according to package.json of the package). 