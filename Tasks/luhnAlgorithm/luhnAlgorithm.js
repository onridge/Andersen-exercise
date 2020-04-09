function calc(number) {
    return number * 2 < 10 ? number * 2 : number * 2 - 9;
}

function luhnAlgorithm(cardNumber) {
    return (
        cardNumber
            .split('')
            .map((element, index) => (index % 2 === 0 ? calc(element) : parseInt(element, 10)))
            .reduce((accumulator, currentValue) => accumulator + currentValue) % 10 === 0
    );
}

export default luhnAlgorithm;
