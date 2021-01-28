function roadRadar(speed, area) {
    let law = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let difference = speed - law[area]

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${law[area]} zone`);
    } else {
        let status = ''
        if (difference > 40) {
            status = 'reckless driving'
        } else if (difference > 20) {
            status = 'excessive speeding'
        } else {
            status = 'speeding'
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${law[area]} - ${status}`);
    }
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')