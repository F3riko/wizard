checkIfAccessIsAllowed(4)

const nextPageButton = document.getElementById('next-page-button');
const imageUrlInput = document.getElementById('image-url');
const errorMessage = document.getElementById('error-message');
const prevPageButton = document.getElementById('prev-page-button');
const hobbiesInput = document.getElementById('hobbies');
const hobbiesList = document.getElementById('hobbies-list');
imageUrlInput.addEventListener('input', validateImageUrl);

const submitForm = () => {
  const formPhase3 = document.getElementById("formPhase3");

  formPhase3.addEventListener("submit", (e) => {
      e.preventDefault();
      // get data from form
      const formData = new FormData(formPhase3);
      const img = formData.get("image-url");
      const hobbiesList = [];
      formData.getAll('hobbies').forEach(hobby => {
        hobbiesList.push(hobby);
      });

      // prepare data to be sent to local storage
      userDataObj.image = img;
      userDataObj.hobbies = hobbiesList;
      userDataObj.accessLvl += 1   
      if (isValidImageUrl(img)) {
          setDataInLocStorage(userDataObj)
          goNextPage(4)
      }
  });

}

prevPageButton.addEventListener('click', () => {
  goPreviousPage(4);

})

const fillWithExistingData = () => {
  const formPhase3 = document.getElementById("formPhase3");
  if (userDataObj) {
    const formElements = formPhase3.elements;
    formPhase3.elements["image-url"].value = userDataObj.image;
    
    for (const element of formElements) {
      if (element.type === "checkbox" && userDataObj.hobbies.includes(element.value)){
        element.checked = true;
      }
    }
  }
}

fillWithExistingData()
submitForm();