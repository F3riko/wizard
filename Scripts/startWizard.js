window.onload = () => {
    if (JSON.parse(localStorage.getItem('screenShown'))) {
        window.location = "phase1.html"
    } else {
        const startWizard = document.getElementById("startWizard");
        localStorage.setItem('screenShown', JSON.stringify(true))
        startWizard.addEventListener("click", () => window.location = "phase1.html");
    }
}