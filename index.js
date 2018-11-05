'use strict';

var mdRegexp = require('markdown-it-regexp');

module.exports = function buttonPlugin(md) {
  md.use(mdRegexp(
      /(^|\s)(?:\^)([\w -]+)(?:\:([\w -]+))?(?:\^)/,
      function(match, utils) {
        if (match[3]) {
          return utils.escape(match[1]) + '<button class="' + utils.escape(match[3]) + '">' + utils.escape(match[2]) + '</button>';
        }
        return utils.escape(match[1]) + '<button>' + utils.escape(match[2]) + '</button>';
      }
  ));
}