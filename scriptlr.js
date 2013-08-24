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
var Scriptlr = (function(document) {

  'use strict';

  var App = App || {};

  App.create = function(source) {
    var script = document.createElement('script');
    script.src = source + '.js';
    document.body.appendChild(script);
  };

  App.check = function(source) {
    if (Array.isArray(source)) {
      source.forEach(App.create);
    } else {
      App.create(source);
    }
  };

  return {
    init: function(source) {
      App.check(source);
    }
  };

})(window.document);
