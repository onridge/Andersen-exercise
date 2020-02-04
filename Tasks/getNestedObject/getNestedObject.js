function getNestedObject(str) {
    const arrayWords = str.split('.');

    return arrayWords.reduceRight((obj, value) => {
        const newObj = {
            [value]: obj,
        };

        return newObj;
    }, null);
}

module.exports = getNestedObject;
