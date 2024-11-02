# vanilla-extract-styles

I collection of useful styles implemented in [@vanilla-extract](https://github.com/vanilla-extract-css/vanilla-extract) aimed at standardizing design principals across repos.

## Usage:

### Import the module
```typescript
    import { sprinkles, vars } from @miche-mayer/vanilla-extract-styles

    // ... integrate in code here
```

### Use global css reset
Import the file `global.css.ts` in your root source file to apply a css reset.
This reset file is design to be as litle opinionated as possible.

`index.ts`:
```typescript
import global.css.ts

// rest of your implementation
```