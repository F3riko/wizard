checkIfAccessIsAllowed(2)
 
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


checkIfAccessIsAllowed();
submitForm();
goBack()