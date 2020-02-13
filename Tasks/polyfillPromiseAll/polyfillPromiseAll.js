function polyfillPromiseAll(promiseArray) {
    return new Promise((resolve, reject) => {
        const result = [];

        let currentIndex = 0;

        return promiseArray.forEach((promise, index) => {
            promise
                .then((value) => {
                    result[index] = value;
                    currentIndex++;
                    if (currentIndex === promiseArray.length) {
                        return resolve(result);
                    }
                })
                .catch((error) => reject(error));
        });
    });
}

export default polyfillPromiseAll;
