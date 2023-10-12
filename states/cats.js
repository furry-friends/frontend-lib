"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CatContext = exports.CatProvider = void 0;
var react_1 = __importStar(require("react"));
var CatContext = (0, react_1.createContext)({
    cats: [],
    saveCat: function (_) { },
    setCats: function (_) { },
    deleteCat: function (_) { },
});
exports.CatContext = CatContext;
var CatProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), cats = _b[0], setCats = _b[1];
    /**
     * Add or update a cat.
     */
    var saveCat = function (cat) {
        var catIndex = cats.findIndex(function (c) { return c.id === cat.id; });
        if (catIndex === -1) {
            setCats(__spreadArray(__spreadArray([], cats, true), [cat], false));
        }
        else {
            var catsClone = __spreadArray([], cats, true);
            catsClone[catIndex] = cat;
            setCats(catsClone);
        }
    };
    var deleteCat = function (catId) {
        return setCats(cats.filter(function (cat) { return cat.id !== catId; }));
    };
    var contextValue = {
        cats: cats,
        saveCat: saveCat,
        deleteCat: deleteCat,
        setCats: setCats,
    };
    return (react_1.default.createElement(CatContext.Provider, { value: contextValue }, children));
};
exports.CatProvider = CatProvider;
