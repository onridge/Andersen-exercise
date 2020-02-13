function intersection(array1, array2) {
    return array1.filter((elementArr1) => array2.includes(elementArr1));
}

export default intersection;
