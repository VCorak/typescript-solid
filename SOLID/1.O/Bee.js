"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bee = void 0;
var Bee = /** @class */ (function () {
    function Bee() {
    }
    Object.defineProperty(Bee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bee.prototype, "type", {
        get: function () {
            return 'bee';
        },
        enumerable: false,
        configurable: true
    });
    Bee.prototype.makeSound = function () {
        return 'Bzzzz';
    };
    return Bee;
}());
exports.Bee = Bee;
