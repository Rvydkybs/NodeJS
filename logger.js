var url="http://mylogger.io/log";
function log(message) {
    //send an http request to the server
    console.log( message);
}
module.exports.log = log;
// module.exports.endPoint = url;