"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(MAXIMUM_FUEL_CAPACITY) {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0;
        this.FUEL_MILEAGE = 10;
        this._MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "MAXIMUM_FUEL_CAPACITY", {
        get: function () {
            return this._MAXIMUM_FUEL_CAPACITY;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function (fuel, engine) {
        if (engine.status === false || fuel.level <= 0) {
            return;
        }
        fuel.level -= 1;
        this._miles += engine.FUEL_MILEAGE;
    };
    return Car;
}());
exports.Car = Car;
