'use strict';

var mdRegexp = require('markdown-it-regexp');

module.exports = function buttonPlugin(md) {
  md.use(mdRegexp(
      /(^|\s)(\^[^\s]+\^)/i,
      function(match, utils) {
        return utils.escape(match[1]) + '<button>' + utils.escape(match[2]) + '</button>';
      }
  ));
}