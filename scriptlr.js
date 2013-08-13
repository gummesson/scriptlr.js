/*
 * ~ Scriptlr ~
 *
 * Quick and dirty script loading.
 *
 *  Version: 0.1.0
 *  License: MIT
 *
 *  Usage:
 *  Scriptlr.init('foo');
 *  Scriptlr.init(['foo','path/to/bar']);
 *
 */
var Scriptlr = (function(window, document) {

  'use strict';

  var createScript = function(source) {
    var script = document.createElement('script');
    script.src = source + '.js';
    document.body.appendChild(script);
  };

  var checkSource = function(source) {
    if (Array.isArray(source)) {
      source.forEach(createScript);
    } else {
      createScript(source);
    }
  };

  return {
    init: function(source) {
      checkSource(source);
    }
  };

})(window, window.document);
