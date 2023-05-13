// Get data from local storage
const userDataObj = JSON.parse(localStorage.getItem("user"))

function setDataInLocStorage(userObj) {
    localStorage.setItem('user', JSON.stringify(userObj))
// Check level access, call the checkLevlAccess() with corresponding level of each page
}

function checkLevlAccess(level){
    return userDataObj === null ? false: userDataObj.accessLvl >= level ? true : false
}

function checkIfAccessIsAllowed(level) {
    let accessGranted = checkLevlAccess(level)
    return accessGranted == true ? true : goPreviousPage(level)
}