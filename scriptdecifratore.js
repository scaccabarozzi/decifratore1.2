document.getElementById('submitButton').addEventListener('click', function() {
    const errorCode = document.getElementById('errorCode').value;
    const errorOutput = document.getElementById('errorOutput');

    if (errorCode) {
        const errorMessages = Decifratore.messaggioerroreOUTPUT(errorCode);
        if (errorMessages.length > 0) {
            errorOutput.innerHTML = errorMessages.join('<br>');
            errorOutput.classList.add('show');
        } else {
            errorOutput.innerHTML = "Nessun errore rilevato o codice non valido.";
            errorOutput.classList.add('show');
        }
    } else {
        errorOutput.innerHTML = "Per favore, inserisci un codice di errore.";
        errorOutput.classList.add('show');
    }
});
