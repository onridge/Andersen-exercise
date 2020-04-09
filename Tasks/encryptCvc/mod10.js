function mod10(a, b) {
    if (a < b) {
        return (10 + a - b) % 10;
    }
    return (a - b) % 10;
}

export default mod10;
