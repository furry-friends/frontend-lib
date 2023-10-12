"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
var debounce = function (delay) {
    var timeoutId;
    return function (fun) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fun, delay);
    };
};
exports.debounce = debounce;
