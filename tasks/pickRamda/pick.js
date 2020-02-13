function pick(array, object) {
    const result = {};

    array.forEach((value) => {
        if (object[value]) {
            result[value] = object[value];
        }
    });
    return result;
}

export default pick;
