function polyfillObjectCreate(objectPrototype) {
    function F() {}
    F.prototype = objectPrototype;
    return new F();
}

export default polyfillObjectCreate;
