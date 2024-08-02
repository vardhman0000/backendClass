let timeLogger = (req,res,next) => { 

    let iniTime = new Date();
    next();
    let finTime = new Date();
    let resTime = finTime - iniTime;
    console.log(`Response Time -> ${resTime} ms`);

}
module.exports = (timeLogger)