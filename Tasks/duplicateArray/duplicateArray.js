/* eslint-disable no-extend-native */

Array.prototype.duplicate = function() {
    return this.concat(this);
};
