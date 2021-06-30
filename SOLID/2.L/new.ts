//This is called a Union, the discountType can only contain the following 2 values:

type discountType = "variable" | "fixed" | "none";
const variable: discountType = 'variable';
const fixed: discountType = 'fixed';
const none: discountType = 'none';

interface Discount {
    readonly _type: discountType;
    readonly _value: number;

    apply(price : number) : number;
    showCalculation(price : number) : string;

}

