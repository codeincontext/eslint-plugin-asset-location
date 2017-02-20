/**
 * @fileoverview Only allow assets co-located with the importing file
 * @author Adam Howard
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-absolute-asset-path')
var RuleTester = require('eslint').RuleTester

var parserOptions = {
  sourceType: 'module',
}

const ERROR_MESSAGE = 'Asset referenced with absolute path. Prefer co-locating assets in same directory'

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: parserOptions
})

ruleTester.run('no-aabsolute-asset-path', rule, {
  valid: [
    {
      code: 'import loading from "./loading.png";',
    },
    {
      code: 'import loading from "../loading.png";',
    },
    {
      code: 'import loading from "components/loading";',
    },
    {
      code: 'const loading = require("./loading.png");',
    },
  ],

  invalid: [
    {
      code: 'import loading from "static/images/loading.png";',
      errors: [{
        message: ERROR_MESSAGE,
      }]
    },
    {
      code: 'const loading = require("static/images/loading.png");',
      errors: [{
        message: ERROR_MESSAGE,
      }]
    },
  ]
})
