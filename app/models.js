const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('./data')
const { use } = require('./routes')

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id 
 */
const getUserById = id => USER_MAIN_DATA
    .filter(user => user.id === id)
    .shift()


    /**
 * @description Retrieve the main users id  
 */
const getUsers =  () => USER_MAIN_DATA
    .map(user => [{id:user.id, firstName: user.userInfos.firstName}])
    

/**
 * @param {number} id 
 */
const getUserActivityById = id => USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id 
 */
const getUserAverageSession = id => USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id 
 */
const getUserPerformance = id => USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)
    .shift()

module.exports = {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance,
    getUsers
}
