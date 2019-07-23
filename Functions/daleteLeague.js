const path = require('path')
let dataModels = require('../Mongoose/dataSchema')
const fs = require('fs')

async function deleteLeague(league) {
    await dataModels.updateModels()
    dataModels = require('../Mongoose/dataSchema')
    await dataModels[league].remove({})
    await dataModels.Relevant.findOneAndRemove({ name: league })
    const delpath = path.join(__dirname, "/..", "/ExelData/", `${league}.csv`)
    try {
        fs.unlinkSync(delpath)
        //file removed
    } catch (err) {
        console.error(err)
    }
}

module.exports = deleteLeague
