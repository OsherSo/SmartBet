const download = require('download-file')
const path = require('path')
async function downloadFunc(url, filename) {
    const options = {
        directory: path.join(__dirname, "/..", "/ExelData"),
        filename: `${filename}.csv`
    }

    download(url, options, function (err) {
        if (err) throw err
    })
}

module.exports = downloadFunc
