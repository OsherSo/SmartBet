const poisson = require('./poisson')

const arrResults = function (obj) {
    const arr = []
    const x = obj.homeExpextedGoals
    const y = obj.awayExpextedGoals

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            arr.push({ homeGoals: i, awayGoals: j, chance: poisson(i, x) * poisson(j, y) * 100 })
        }
    }
    return arr
}

module.exports = arrResults