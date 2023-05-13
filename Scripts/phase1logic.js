// DOM interactions
const form = document.querySelector('form')

// On submission validate form details, create new user, add it to localStorage
function validateRegFormPhase1(event) {
    event.preventDefault();
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    if (validateName(...(data.name.split(' ')))) {
        if (validateEmail(data.email)) {
            if (validateDateOfBirth(data.birthdate)) {
                setDataInLocStorage(createUserInstance(data.name, data.email, data.birthdate))
                goNextPage(1)
            } else {
                alert("Input correct date of birth!")
            }
        } else {
            alert("Input correct email!")
        }
    } else {
        alert("Input correct name (name and surname separated by space)!")
    }
}