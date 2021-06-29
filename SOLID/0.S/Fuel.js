"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuel = void 0;
var Fuel = /** @class */ (function () {
    function Fuel(fuel) {
        this._fuel = 0;
        this._fuel = fuel;
    }
    Object.defineProperty(Fuel.prototype, "level", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    Fuel.prototype.addFuel = function (fuel, MAXIMUM_FUEL_CAPACITY) {
        this._fuel = Math.min(fuel + this._fuel, MAXIMUM_FUEL_CAPACITY);
    };
    return Fuel;
}());
exports.Fuel = Fuel;
