module.exports = function toReadable (number) {
    const string = number.toString();
    let arr = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    let arrTwo = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety']
    let arrThree = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let result = '';
    if (string.length === 3) {
        switch (string[1]) {
            case '1':
            result = arr[string[0]] + ' hundred' + arrThree[string[2]];
            break;
            default:
            result = arr[string[0]] + ' hundred' + arrTwo[string[1]] + arr[string[2]];
            break;
        }
    } else if (string.length === 2) {
        switch (string[0]) {
            case '1':
            result = arrThree[string[1]];
            break;
            default:
            result = arrTwo[string[0]] + arr[string[1]];
            break;
            }
    } else if (string[0] == 0) {
    result = 'zero';
    } else {
    result = arr[string[0]];
    }
return result.trim();
}
