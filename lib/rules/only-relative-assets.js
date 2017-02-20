/**
 * @fileoverview Only allow assets co-located with the importing file
 * @author Adam Howard
 */
"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Only allow assets co-located with the importing file',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null,
    schema: [],
  },

  create: function(context) {
    var FILE_EXTENSION_REGEX = /[^.]+$/
    var ASSET_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'css', 'woff', 'svg', 'ico']

    function checkPath(argument) {
      var value = argument.value

      var extensionMatch = value.match(FILE_EXTENSION_REGEX)
      var extension = extensionMatch && extensionMatch[0]
      if (extension && ASSET_EXTENSIONS.indexOf(extension) === -1) {
        return
      }

      if (value.indexOf('.') !== 0) {
        context.report({
          node: argument,
          message: 'Asset referenced with absolute path. Prefer co-locating assets in same directory',
        })
      }
    }

    return {
      ImportDeclaration: function(node) {
        checkPath(node.source)
      },

      CallExpression: function(node) {
        if (node.callee.name === 'require') {
          checkPath(node.arguments[0])
        }
      },
    };
  }
};
