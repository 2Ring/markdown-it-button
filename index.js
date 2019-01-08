'use strict';

var mdRegexp = require('markdown-it-regexp');

module.exports = function buttonPlugin(md) {
  md.use(mdRegexp(
      /(^|\s)(?:\^)([\w -]+)(?:\:([\w -]+))?(?:\^)/,
      function(match, utils) {
        if (match[3]) {
          return utils.escape(match[1]) + '<span class="' + utils.escape(match[3]) + '">' + utils.escape(match[2]) + '</span>';
        }
        return utils.escape(match[1]) + '<span class="btn btn-primary">' + utils.escape(match[2]) + '</span>';
      }
  ));
}
