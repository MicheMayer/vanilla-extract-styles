# @michemayer/vanilla-extract-styles

A collection of useful styles implemented in [@vanilla-extract](https://github.com/vanilla-extract-css/vanilla-extract) aimed at standardizing design principals across repos.

## Usage:

## Installation

`npm install @michemayer/vanilla-extract-styles`

### Import styles
```typescript
    import { sprinkles, vars } from '@michemayer/vanilla-extract-styles'

    // ... integrate in code here
```

### Use global css reset
Import the file `global.css.ts` in your root source file to apply a css reset.
This reset file is designed to be as little opinionated as possible.

`index.ts`:
```typescript
import 'global.css.ts'

// rest of your implementation
```

## Contribute
Set credentials.
`npm set "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN"`

Publish a new version of this package
`npm publish    `