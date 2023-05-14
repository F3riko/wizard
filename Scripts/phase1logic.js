// DOM interactions
const form = document.querySelector('form')

// if user has already fill an input and submitted, this function will show that info hosted at the local storage
const fillWithExistingData = () => {
    if(userDataObj){
        const formData = new FormData(form);
        
        formData.set("name", userDataObj.name);
        formData.set("email", userDataObj.email);
        formData.set("birthdate", userDataObj.birthdate);

        form.elements.name.value = formData.get("name");
        form.elements.email.value = formData.get("email");
        form.elements.birthdate.value = formData.get("birthdate");
    }
}

function validateRegFormPhase1(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const nameLastN = data.name.split(" ")

    if (nameLastN.length >= 2 && validateName(nameLastN[0], nameLastN[1])) {
        if (validateEmail(data.email)) {
            if (validateDateOfBirth(data.birthdate)) {
                setDataInLocStorage(createUserInstance(data.name, data.email, data.birthdate))
                goNextPage(1)
            }
        }
    } else {
        const inputNameLastN = document.getElementById("name");
        inputNameLastN.style.border = "1px solid red"
    }
}

fillWithExistingData()