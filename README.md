# eslint-plugin-import-location

Enforces the location of imports. For example, that assets are co-located with components

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-import-location`:

```
$ npm install eslint-plugin-import-location --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-location` globally.

## Usage

Add `import-location` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-location"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "import-location/only-relative-assets": 1
    }
}
```

## Supported Rules

### only-relative-assets [docs](docs/rules/only-relative-assets.md)

Enforces that assets are co-located with javascript files/components.

```js
// Allowed
import loading from "./loading.png";
import loading from "../loading.png";
const loading = require("./loading.png");

// Not allowed
import loading from "static/images/loading.png";
const loading = require("static/images/loading.png");
```
