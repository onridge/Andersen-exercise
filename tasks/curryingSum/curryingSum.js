function curryingSum(num) {
    let result = num;

    function secondFn(num2) {
        result += num2;
        return secondFn;
    }

    secondFn.toString = function() {
        return result;
    };
    return secondFn;
}

export default curryingSum;
