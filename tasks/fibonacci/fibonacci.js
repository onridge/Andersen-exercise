function fibonacci(num) {
    return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

export default fibonacci;
