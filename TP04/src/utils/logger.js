import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // label({ label: 'right meow!' }),
        timestamp(),
        format.colorize(),
        myFormat
    ),
    transports: [new transports.Console()]
});


export default logger;