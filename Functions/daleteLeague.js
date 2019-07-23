const path = require('path')
let dataModels = require('../Mongoose/dataSchema')
const fs = require('fs')

async function deleteLeague(league) {
    await dataModels.updateModels()
    dataModels = require('../Mongoose/dataSchema')
    await dataModels[league].remove({})
    await dataModels.Relevant.findOneAndRemove({ name: league })
    const delpath19 = path.join(__dirname, "/..", "/ExelData/", `${league + "19"}.csv`)
    try {
        fs.unlinkSync(delpath19)
        //file removed
    } catch (err) {
        console.error(err)
    }
    const delpath20 = path.join(__dirname, "/..", "/ExelData/", `${league + "20"}.csv`)
    try {
        fs.unlinkSync(delpath20)
        //file removed
    } catch (err) {
        console.error(err)
    }
}

module.exports = deleteLeague
