"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat(_b) {
        var _this = this;
        var id = _b.id, name = _b.name, gender = _b.gender, birthday = _b.birthday, bio = _b.bio, picture = _b.picture;
        this.copyWith = function (props) {
            return new _a(__assign(__assign({}, _this), props));
        };
        this.toString = function () {
            return JSON.stringify({
                id: _this.id,
                name: _this.name,
                gender: _this.gender,
                birthday: _this.birthday,
                bio: _this.bio,
                picture: _this.picture,
            });
        };
        this.id = id;
        this.gender = gender.trim().toLowerCase();
        this.name = name;
        this.birthday = birthday;
        this.bio = bio;
        this.picture = picture;
    }
    Object.defineProperty(Cat.prototype, "isNew", {
        /**
         * Returns true if the cat is new which has not been saved to the database.
         */
        get: function () {
            return this.id === -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "age", {
        /**
         * Returns the age of the cat in days.
         * If the birthday is not set or invalid, returns 0.
         */
        get: function () {
            if (this.birthday === '') {
                return 0;
            }
            try {
                var birthDate = new Date(this.birthday);
                return Math.round((new Date().getTime() - birthDate.getTime()) / 86400000);
            }
            catch (e) {
                return 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    var _a;
    _a = Cat;
    Cat.empty = function () {
        return new _a({
            id: -1,
            name: '',
            gender: '',
            birthday: '',
            bio: '',
        });
    };
    Cat.fromJson = function (json) {
        var _b, _c, _d, _e, _f;
        var id = Number(json.id);
        var birthday = (_b = json.birthday) === null || _b === void 0 ? void 0 : _b.toString();
        var gender = (_c = json.gender) === null || _c === void 0 ? void 0 : _c.toString();
        var name = (_d = json.name) === null || _d === void 0 ? void 0 : _d.toString();
        var bio = (_e = json.bio) === null || _e === void 0 ? void 0 : _e.toString();
        var picture = (_f = json.picture) === null || _f === void 0 ? void 0 : _f.toString();
        if (typeof id !== 'number' ||
            isNaN(id) ||
            name === undefined ||
            _a.isValidBirthday(birthday) === false ||
            _a.isValidGender(gender) === false) {
            throw new Error('Invalid cat data');
        }
        return new _a({
            id: id,
            name: name,
            gender: gender,
            birthday: birthday,
            bio: bio !== null && bio !== void 0 ? bio : '',
            picture: picture,
        });
    };
    Cat.isValidBirthday = function (birthday) {
        return birthday !== undefined && /^\d{4}-\d{2}-\d{2}$/.test(birthday);
    };
    Cat.isValidGender = function (gender) {
        return gender !== undefined && /^\s*(?:boy|girl)\s*$/i.test(gender);
    };
    return Cat;
}());
exports.Cat = Cat;
