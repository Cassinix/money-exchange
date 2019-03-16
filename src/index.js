// PLEASE DON'T change function name

module.exports = function makeExchange(currency) {
    const result = {};
    //const dollars = [50, 25, 10, 5, 1];
    /*
    const calculate = (n) => {
        return (currency - (currency % n)) / n;
    }
    */
    const calc = (currency) => {
    if (currency > 1000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange"
        return result;
    }
    else if (currency >= 50 && currency <= 1000) {
        result.H = (currency - (currency % 50)) / 50;
        return calc(currency % 50);
    }
    
    else if (currency >= 25 && currency < 50) {
        result.Q = (currency - (currency % 25)) / 25;
        return calc(currency % 25);
    }
    else if (currency >= 10 && currency < 25) {
        result.D = (currency - (currency % 10)) / 10;
        return calc(currency % 10);
    }
    else if (currency >= 5 && currency < 25) {
        result.N = (currency - (currency % 5)) / 5;
        return calc(currency % 5);
    }
    else if (currency >= 1 && currency < 5) {
        result.P = (currency - (currency % 1)) / 1;
        return calc(currency % 1);
    }
    return result;
    }
    return calc(currency);
}
