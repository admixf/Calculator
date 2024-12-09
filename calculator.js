const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divide: '/',
    percent: '%',
    power: '^'};
function calculate({a, b, operation}) {
    let result = null
   switch (operation) {
    case OPERATIONS.sum:
        result = sum(a, b);
        break;
    case OPERATIONS.substract:
        result = substract(a, b);
        break;
    case OPERATIONS.multiply:
        result = multiply(a, b);
        break;
    case OPERATIONS.divide:
        result = divide(a, b);
        break;
    case OPERATIONS.percent:
        result = percent(a, b);
        break;
    case OPERATIONS.power:
        result = power(a, b);
        break;
    default:
        break;}
    return result;}
