"use strict";var _this=void 0;function _newArrowCheck(c,d){if(c!==d){throw new TypeError("Cannot instantiate an arrow function")}}sessionStorage.setItem("prime2",43);var isPrime=function isPrime(e){_newArrowCheck(this,_this);for(var d=2,f=Math.sqrt(e);d<=f;d++){if(e%d===0){return false}}return e>1}.bind(void 0);