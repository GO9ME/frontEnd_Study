const { format } = require("date-fns");
const { v4:uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message)=>{
    const datetime = format(new Date(), "yyyy-MM-dd\tHH:mm:ss");
    
    const logStr = `${datetime} ${uuid()} ${message} \n`;
    console.log( logStr );

    try{
        if( !fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, "..", 'logs'));
        }

        await fsPromises.appendFile(
          path.join(__dirname, "..", "logs", "eventLog.txt"), logStr
        )
    }catch(err){
        console.log(err);
    }
}

// logEvents('hello');
module.exports = logEvents;