checkIfAccessIsAllowed(5)

// DOM interactions 
const userInfoTable = document.querySelector('table')
const imageSpot = document.querySelector('span')
const buttonBack = document.querySelector('button')
const resetAndBackHome = document.getElementById("resetAndBackHome")

function createRowFromData(cellName, cellData) {
    let row = userInfoTable.insertRow()
    let name = row.insertCell()
    let data = row.insertCell()
    let capitalizedCellName = `${cellName.charAt(0).toUpperCase()}${cellName.slice(1)}:`
    name.appendChild(document.createTextNode(capitalizedCellName))
    data.appendChild(document.createTextNode(cellData))
}

function renderUserInfoTable() {
    Object.keys(userDataObj).forEach(propertyKey => {
        if (propertyKey != 'image' && propertyKey != 'accessLvl' && Boolean(userDataObj[propertyKey])) {
            createRowFromData(propertyKey, userDataObj[propertyKey])
        }
    })
}

function renderImage() {
    if (Boolean(userDataObj['image'])) {
        let img = document.createElement('img')
        img.src = userDataObj['image']
        imageSpot.appendChild(img)
    }
}

buttonBack.addEventListener('click', () => {
    goPreviousPage(5)
})

renderUserInfoTable()
renderImage()

// reset data at local storage and go to phase 1

resetAndBackHome.addEventListener("click", () => {
    localStorage.removeItem("user");
    localStorage.removeItem("screenShown")
    window.location = "splash.html";
})