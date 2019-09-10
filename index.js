'use strict';

const mdRegexp = require('markdown-it-regexp');
const markdownIt = require('markdown-it');

module.exports = function spanPlugin(md) {
  md.use(mdRegexp(
      /(?<=^|\s)(?:\^)((?:[^:\^]|\\:)+)(?:(?<!\\)(:)([\w -]+))?(?:\^)/,
      function(match, utils) {
        const text = markdownIt().render(match[1]).replace(/<p>|<\/p>/g, '').replace('\\:', ':').trim();
        if (match[3]) {
          return `<span class="${utils.escape(match[3])}">${text}</span>`;
        }
        return `<span class="btn btn-primary">${text}</span>`;
      }
  ));
}
