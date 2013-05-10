/*
 * ~ Scriptlr ~
 *
 * Quick and dirty script loading.
 *
 *  Version: 0.1.0
 *  License: MIT
 *
 *  Usage:
 *  Scriptlr.init("foo");
 *  Scriptlr.init(["foo","path/to/bar"]);
 *
 */
var Scriptlr = (function(window) {

  "use strict";

  var _document_ = window.document;

  var _create_ = function(source) {
    var script = _document_.createElement("script");
    script.src = source + ".js";
    _document_.body.appendChild(script);
  };

  var _check_ = function(source) {
    var array = Array.isArray(source);
    if (array === true) {
      source.forEach(_create_);
    } else {
      _create_(source);
    }
  };

  return {
    init: function(source) {
      _check_(source);
    }
  };

})(window);
