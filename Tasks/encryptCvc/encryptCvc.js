import mod10 from './mod10';

function encryptCvc(cvc, numbersRandom) {
    const m = mod10(cvc[0], numbersRandom[0]);
    const n = mod10(cvc[1], numbersRandom[1]);
    const l = mod10(cvc[2], numbersRandom[2]);

    return `${m}${n}${l}`;
}

export default encryptCvc;
