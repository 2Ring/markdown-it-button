'use strict';

const mdRegexp = require('markdown-it-regexp');
const markdownIt = require('markdown-it');

module.exports = function spanPlugin(md) {
  md.use(mdRegexp(
      /(^|\s)(?:\^)((?:[^:\^]|\\:)+)(?:(?<!\\):([\w -]+))?(?:\^)/,
      function(match, utils) {
        const text = markdownIt().render(match[2]).replace(/<p>|<\/p>/g, '').replace('\\:', ':');
        if (match[3]) {
          return utils.escape(match[1]) + '<span class="' + utils.escape(match[3]) + '">' + text + '</span>';
        }
        return utils.escape(match[1]) + '<span class="btn btn-primary">' + text + '</span>';
      }
  ));
}
