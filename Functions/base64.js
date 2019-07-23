
function encode(str) {
    let buff = new Buffer(str);
    return buff.toString('base64');
}
function decode(str) {
    let buff = new Buffer(str, 'base64');
    return buff.toString('ascii');
}

module.exports = {encode, decode}