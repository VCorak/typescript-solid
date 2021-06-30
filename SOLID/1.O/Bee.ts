export class Bee {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'bee';
    }

    public makeSound(): string {
        return 'Bzzzz'
    }
}