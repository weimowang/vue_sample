/**
 * set the data in localstorage by key 
 * @param {String} tableid set the key 
 * @param {*} data set the value 
 */
export const setLocstorage = (tableid, data) => {
    return window.localStorage.setItem(tableid, data)
}

/**
 * get the data from localstorage by key 
 * @param {String} tableid  the key 
 */
export const getLocstorage = (tableid) => {
    return window.localStorage.getItem(tableid)
}

/**
 * delete the data in localstorage by key 
 * @param {String} tableid the key 
 */
export const delLocstorage = (tableid) => {
    return window.localStorage.removeItem(tableid)
}
export default { setLocstorage, getLocstorage, delLocstorage };