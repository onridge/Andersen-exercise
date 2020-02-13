function findAnagram(words1, words2) {
    const str1 = words1
        .split('')
        .sort()
        .join('');

    const str2 = words2
        .split('')
        .sort()
        .join('');

    return str1 === str2;
}

export default findAnagram;
