"use strict";
var _this = void 0;function _newArrowCheck(innerThis, boundThis) {if (innerThis !== boundThis) {throw new TypeError("Cannot instantiate an arrow function");}}var hash = function hash(text) {_newArrowCheck(this, _this);var enc = new TextEncoder();return `CTF{${enc.encode(text).join("")}}`;}.bind(void 0);
