'use strict';

var mdRegexp = require('markdown-it-regexp');

module.exports = function spanPlugin(md) {
  md.use(mdRegexp(
      /(^|\s)(?:\^)([^:]+)(?:\:([\w -]+))?(?:\^)/,
      function(match, utils) {
        const text = md.render(match[2]).replace(/<p>|<\/p>/g, '');
        if (match[3]) {
          return utils.escape(match[1]) + '<span class="' + utils.escape(match[3]) + '">' + text + '</span>';
        }
        return utils.escape(match[1]) + '<span class="btn btn-primary">' + text + '</span>';
      }
  ));
}
