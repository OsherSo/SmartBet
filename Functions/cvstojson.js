const path = require('path')

const csvToJson = async function (excelName) {
    const csvFilePath = path.join(__dirname, "..", `/ExelData/${excelName}.csv`)
    const csv = require('csvtojson')
    const data = await csv().fromFile(csvFilePath)
    return data
}


module.exports = csvToJson