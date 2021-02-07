function carFactory(input) {

    function getEngine(power) {
        const enginesList = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 },
        ]

        return enginesList.find(el => el.power >= power)
    }

    function getWheels(sizeIn) {
        if (sizeIn % 2 == 0) {
            sizeIn -= 1
        }
        let wheelsArr = [];
        for (let i = 0; i < 4; i++) {
            wheelsArr.push(sizeIn)
        }
        return wheelsArr;
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: { type: input.carriage, color: input.color },
        wheels: getWheels(input.wheelsize)
    }


}
let result = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}

console.log(carFactory(result));
