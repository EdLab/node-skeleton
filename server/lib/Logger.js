import moment from 'moment'
import winston from 'winston'
const {
    combine,
    timestamp,
    printf,
    colorize
} = winston.format

const LoggerInit = (logLevel = 'debug') => {
    const Logger = winston.createLogger({
        exitOnError: false,
        level: logLevel,
        format: combine(
            timestamp(),
            colorize(),
            printf(info => {
                const isError = info instanceof Error
                let output = `${moment(info.timestamp).format('YYYY-MM-DD HH:mm:ss')} ${info.level}: ${info.message}`
                if (isError) {
                    output += `\n${info.stack}`
                }
                return output
            })

        ),
        transports: [
            new winston.transports.Console({
                handleExceptions: true
            }),
        ],

    })
    Logger[logLevel](`Current Winston Logger Level: ${Logger.level}`)
    return Logger
}
export default LoggerInit