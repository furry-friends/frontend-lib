"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCatsBy = void 0;
var sortCatsBy = function (cats, sortBy) {
    var clone = __spreadArray([], cats, true);
    clone.sort(function (a, b) {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'age':
                return b.age - a.age;
            default:
                return a.id - b.id;
        }
    });
    return clone;
};
exports.sortCatsBy = sortCatsBy;
