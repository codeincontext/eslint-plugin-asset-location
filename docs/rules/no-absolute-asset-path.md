# Only allow assets co-located with the importing file (no-absolute-asset-path)

Some projects have best practices about co-location of assets.

## Rule Details

This rule enforces that assets (like images) are located alongside the javascript component or file that uses them, rather than in a central "images" folder.

Examples of **incorrect** code for this rule:

```js
import loading from "static/images/loading.png";
const loading = require("static/images/loading.png");
```

Examples of **correct** code for this rule:

```js
import loading from "./loading.png";
import loading from "../loading.png";
const loading = require("./loading.png");
```

### Options

None so far. The extensions used to find assets are `['jpg', 'jpeg', 'png', 'gif', 'css', 'woff', 'svg', 'ico']`.

## When Not To Use It

Don't use this rule if you want your assets in a central directory.

## Further Reading

None.
