function getCurrentTimeInSeconds() {
    const dateNowMs = Date.now();
    const dateNowStr = new Date(dateNowMs);
    const time = dateNowStr.toString().split(' ');
    const arrayTime = time[4].split(':');

    return Number(arrayTime[0]) * 3600 + Number(arrayTime[1]) * 60 + Number(arrayTime[2]);
}

export default getCurrentTimeInSeconds;
