import fs from "fs";

const logger = () => {
    let instence = {};
    const FILE_NAME = "log.txt";

    const _getTime = () => {
        const date = new Date();
        const time = date.toUTCString();
        return time.toString();
    }

    instence.addLog = (abr) => {
        const msg = _getTime() + "\tABR: " + abr + "\n";
        fs.appendFile(FILE_NAME, msg, (err) => {
            if (err) throw err;
            console.log(msg);
        });
    };

    return instence;
};

export default logger;
