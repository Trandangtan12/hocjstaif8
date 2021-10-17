import * as constants from '../constans.js'

function logger(log, type = constants.TYPE_LOG){
    console[type](log)
}

export default logger