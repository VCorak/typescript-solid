export class Engine {


    private readonly _FUEL_MILEAGE;
    private _engineStatus: boolean = false;


    constructor(FUEL_MILEAGE: number) {
        this._FUEL_MILEAGE = FUEL_MILEAGE;
    }


    get engineStatus(): boolean {
        return this._engineStatus;
    }


    get FUEL_MILEAGE() {
        return this._FUEL_MILEAGE;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }

}