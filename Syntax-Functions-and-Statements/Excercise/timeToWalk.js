function timeToWalk(steps, footprint, speed) {
    let lengthM = steps * footprint;
    let speedM = speed * 1000
    let addedMins = Math.floor(lengthM / 500)
    let timeMins = (lengthM * 60 / speedM + addedMins) * 10

    let hours = Math.floor(timeMins / 600)
    timeMins -= hours * 600
    let minutes = Math.floor(timeMins / 10)
    timeMins -= minutes * 10;
    let seconds = timeMins * 6

    let result = '';
    let data = [hours, minutes, seconds]

    for (let i = 0; i < 3; i++) {
        if (data[i] < 10) {
            result += '0'
            result += data[i].toFixed()
        } else {
            result += data[i].toFixed()
        }

        if (i < 2) {
            result += ':'
        }
    }


    console.log(result)
}
// timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)