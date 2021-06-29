"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuel = void 0;
var Fuel = /** @class */ (function () {
    function Fuel(fuel, FUEL_MILEAGE, MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._fuel = fuel;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
    }
    Object.defineProperty(Fuel.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fuel.prototype, "FUEL_MILEAGE", {
        get: function () {
            return this._FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    Fuel.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    return Fuel;
}());
exports.Fuel = Fuel;
