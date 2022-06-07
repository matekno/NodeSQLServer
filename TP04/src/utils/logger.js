import { createLogger, format, transports } from 'winston';
const { splat, combine, timestamp, printf } = format;

import path from 'path';

const logFormat = printf(({ timestamp, level, message, meta }) => {
    return `${timestamp};${level};${JSON.stringify(message)}}`;
});

const logger = createLogger({
    format: combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // label({ label: 'right meow!' }),
        timestamp(),
        splat(),
        format.colorize(),
        logFormat
    ),
    transports: [
        new transports.Console({
            json: true,
            stringify: (obj) => JSON.stringify(obj)
        }),
        new transports.File({ filename: 'combined.log' })
    ]
});

export default logger;