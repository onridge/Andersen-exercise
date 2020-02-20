import getCurrentTimeInSeconds from '../getCurrentTimeInSeconds';

function convertTime(seconds) {
    const convertSeconds = (seconds % 60).toString();
    const convertMinutes = Math.floor((seconds / 60) % 60).toString();
    const convertHours = Math.floor((seconds / 60 / 60) % 60).toString();

    return `${convertHours.padStart(2, '0')}:${convertMinutes.padStart(2, '0')}:${convertSeconds.padStart(2, '0')}`;
}

function currentTime() {
    const dateNowMs = Date.now();
    const dateNowStr = new Date(dateNowMs);
    const time = dateNowStr.toString().split(' ');

    return time[4];
}

test('should be return Number after calling function', () => {
    const time = getCurrentTimeInSeconds();

    expect(typeof time).toBe('number');
});

test('should be return String after calling convert function', () => {
    const convertedTime = convertTime(getCurrentTimeInSeconds());

    expect(typeof convertedTime).toBe('string');
});

test('should currentTime equal convert time', () => {
    const time = currentTime();
    const convertedTime = convertTime(getCurrentTimeInSeconds());

    expect(time === convertedTime).toBeTruthy();
});
