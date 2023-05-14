const pagesUrls = {
    1: '../Pages/phase1.html',
    2: '../Pages/phase2.html',
    3: '../Pages/phase3health.html',
    4: '../Pages/phase3.html',
    5: '../Pages/phase4.html'}

function goNextPage(currentPhaseNumber) {
    if (currentPhaseNumber + 1 <= Object.values(pagesUrls).length) {
        window.location.href = pagesUrls[currentPhaseNumber + 1]
        
    }
}

function goPreviousPage(currentPhaseNumber) {
    if (currentPhaseNumber - 1 >= 1) {
        window.location.href = pagesUrls[currentPhaseNumber - 1]
    }
}