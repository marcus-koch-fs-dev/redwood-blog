import { createLogger } from '@redwoodjs/api/logger'

/**
 * Creates a logger with RedwoodLoggerOptions
 *
 * These extend and override default LoggerOptions,
<<<<<<< HEAD
 * can define a destination like a file or other supported pino log transport stream,
 * and sets whether or not to show the logger configuration settings (defaults to false)
=======
 * can define a destination like a file or other supported pin log transport stream,
 * and sets where or not to show the logger configuration settings (defaults to false)
>>>>>>> feat/chapter5
 *
 * @param RedwoodLoggerOptions
 *
 * RedwoodLoggerOptions have
<<<<<<< HEAD
 * @param {options} LoggerOptions - defines how to log, such as redaction and format
=======
 * @param {options} LoggerOptions - defines how to log, such as pretty printing, redaction, and format
>>>>>>> feat/chapter5
 * @param {string | DestinationStream} destination - defines where to log, such as a transport stream or file
 * @param {boolean} showConfig - whether to display logger configuration on initialization
 */
export const logger = createLogger({})
