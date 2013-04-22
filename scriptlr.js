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
var Scriptlr = function() {

  var _document = window.document;

  var _create = function(source) {
    var script = _document.createElement("script");
    script.src = source + ".js";
    _document.body.appendChild(script);
  };

  var _check = function(source) {
    var array = Array.isArray(source);
    if (array === true) {
      source.forEach(_create);
    }
    else {
      _create(source);
    }
  };

  return {
    init: function(source) {
      _check(source);
    }
  };

}();
