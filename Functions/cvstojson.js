const path = require('path')

const csvToJson = async function (excelName) {
    const csvFilePath19 = path.join(__dirname, "..", `/ExelData/${excelName + "19"}.csv`)
    const csvFilePath20 = path.join(__dirname, "..", `/ExelData/${excelName + "20"}.csv`)
    const csv = require('csvtojson')
    let data = await csv().fromFile(csvFilePath19)
    let data2 = await csv().fromFile(csvFilePath20)
    for (game of data2) {
        data.push(game)
    }
    data = data.reverse()
    return data
}


module.exports = csvToJson