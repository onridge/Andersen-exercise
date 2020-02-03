function polyfillObjectCreate(objectPrototype) {
    function F() {}
    F.prototype = objectPrototype;
    return new F();
}

module.exports = polyfillObjectCreate;
