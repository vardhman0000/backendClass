const fs = require('fs');

let reqLogger = (req,res,next) => { 
    let message = `${req.method} request made on ${req.url} at ${new Date()}`;
    fs.appendFileSync("./log.txt", message + `\n`)
    console.log(message);
    next();
}

module.exports = (reqLogger);