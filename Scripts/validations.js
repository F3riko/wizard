function validateName(firstName, lastName) {
    const namePattern = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
    return namePattern.test(`${firstName} ${lastName}`);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateDateOfBirth(dateOfBirth) {
    const dobPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    return dobPattern.test(dateOfBirth);
}

function getHouseNumber(houseNumberProvided) {
    return houseNumberProvided === "" || houseNumberProvided > 0 ? true : false;
}
function isValidImageUrl(url) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    return imageExtensions.some(extension => url.endsWith(extension));
}

function validateImageUrl() {
    const nextPageButton = document.getElementById('submitBtnPhase3');
    const imageUrl = imageUrlInput.value;
    if (!isValidImageUrl(imageUrl)) {
      errorMessage.textContent = 'Please enter a valid image URL';
      nextPageButton.disabled = true;
    } else {
      errorMessage.textContent = '';
      nextPageButton.disabled = false;
    }
}