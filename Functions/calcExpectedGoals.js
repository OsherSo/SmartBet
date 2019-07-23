let dataModels = require('../Mongoose/dataSchema')
const calcExpectedGoals = async function (league, homeTeam, awayTeam) {
    await dataModels.updateModels()
    dataModels = require('../Mongoose/dataSchema')
    const allAvg = await dataModels[league].find({
        name: "allAvg"
    })
    const homeData = await dataModels[league].find({
        name: homeTeam,
        place: "Home"
    })
    const homeAvgFor = homeData[0].avgFor / allAvg[0].avgFor
    const homeAvgAgainst = homeData[0].avgAgainst / allAvg[0].avgAgainst

    const awayData = await dataModels[league].find({
        name: awayTeam,
        place: "Away"
    })

    const awayAvgFor = awayData[0].avgFor / allAvg[0].avgAgainst
    const awayAvgAgainst = awayData[0].avgAgainst / allAvg[0].avgFor

    return {
        homeExpextedGoals: homeAvgFor * awayAvgAgainst * allAvg[0].avgFor,
        awayExpextedGoals: awayAvgFor * homeAvgAgainst * allAvg[0].avgAgainst
    }
}
module.exports = calcExpectedGoals