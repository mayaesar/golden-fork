export const formatQuantity = (quantity: number) => {
    // Helper function to find the greatest common divisor
    const gcd = (a: number, b: number): number => {
        return b ? gcd(b, a % b) : a;
    };

    // If the quantity is an integer, return it as a string
    if (Number.isInteger(quantity)) {
        return {
            wholePart: quantity,
            fraction: "",
        };
    }

    // If the quantity is a float, handle it
    const tolerance = 1e-6; // tolerance to handle floating point precision issues
    const maxDenominator = 100; // limit to prevent excessively large denominators

    const wholePart = Math.floor(quantity);
    const decimalPart = quantity - wholePart;

    let numerator = 1;
    let denominator = 1;

    // Loop to find the best fraction representation
    for (let d = 1; d <= maxDenominator; d++) {
        const n = Math.round(decimalPart * d);
        if (Math.abs(decimalPart - n / d) < tolerance) {
            numerator = n;
            denominator = d;
            break;
        }
    }

    // Simplify the fraction
    const commonDivisor = gcd(numerator, denominator);
    numerator /= commonDivisor;
    denominator /= commonDivisor;

    // If the whole part is 0, just return the fraction
    if (wholePart === 0) {
        return {
            wholePart: 0,
            fraction: `${numerator}/${denominator}`,
        };
    }

    // Otherwise, return the mixed number
    return {
        wholePart,
        fraction: `${numerator}/${denominator}`,
    };
};
