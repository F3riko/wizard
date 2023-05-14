checkIfAccessIsAllowed(2)

// DOM interactions
const formPhase2 = document.getElementById("formPhase2");
 
const submitForm = () => {
    const formPhase2 = document.getElementById("formPhase2");

    formPhase2.addEventListener("submit", (e) => {
        e.preventDefault();
        // get data from form
        const formData = new FormData(formPhase2);
        const city = formData.get("city");
        const street = formData.get("street");
        const number = formData.get("number");
        
        // prepare data to be sent to local storage
        userDataObj.city = city;
        userDataObj.street = street;
        userDataObj.number = number;
        userDataObj.accessLvl +=1
        
        if (getHouseNumber(number)) {
            setDataInLocStorage(userDataObj)
            goNextPage(2)
        } else{
            alert("Leave number empty or positive");
        }  
    });
}

const goBack = () => {
    const prevPage = document.getElementById("prevPage")
    prevPage.addEventListener("click", () =>{
        goPreviousPage(2)
    })
}

const fillWithExistingData = () => {
    if(userDataObj){
        const formData = new FormData(formPhase2);
        
        formData.set("city", userDataObj.city);
        formData.set("street", userDataObj.street);
        formData.set("number", userDataObj.number);

        formPhase2.elements.city.value = formData.get("city");
        formPhase2.elements.street.value = formData.get("street");
        formPhase2.elements.number.value = formData.get("number");
    }
}

fillWithExistingData()
submitForm();
goBack()