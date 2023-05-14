checkIfAccessIsAllowed(3)

// DOM interactions
const form = document.querySelector('form')
const buttonBack = document.getElementById('buttonBack')


function validateRegFormPhase1(event) {
    event.preventDefault();
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    userDataObj.happy = data.happy
    userDataObj.skydiving = data.skydiving
    userDataObj.pocket = data.pocket
    userDataObj.accessLvl += 1
    setDataInLocStorage(userDataObj)
    goNextPage(3)
}

const fillWithExistingData = () => {
    if(userDataObj){
        const formData = new FormData(form);
        
        formData.set("happy", userDataObj.happy);
        formData.set("skydiving", userDataObj.skydiving);
        formData.set("pocket", userDataObj.pocket);

        form.elements.happy.value = formData.get("happy");
        form.elements.skydiving.value = formData.get("skydiving");
        form.elements.pocket.value = formData.get("pocket");
    }
}

buttonBack.addEventListener('click', () => {
    goPreviousPage(3)
})

fillWithExistingData()