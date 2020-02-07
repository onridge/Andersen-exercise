function spaceBetweenWords(str) {
    return str
        .split(' ')
        .map((word) => word.split('').join(' '))
        .join('  ');
}

export default spaceBetweenWords;
