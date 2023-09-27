// Pobieramy referencje do elementu formularza
const contactForm = document.querySelector('#contact-form');

// Obsługa zdarzenia przesyłania formularza
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Zapobiegamy domyślnemu zachowaniu przycisku Submit

    // Pobieramy dane z formularza
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Wysyłamy dane gdzieś, np. na serwer lub możemy wyświetlić je na stronie
    console.log(`Wysyłam wiadomość od ${name} (${email}):`);
    console.log(message);

    // Opcjonalnie można dodać kod do wyczyszczenia pól formularza po wysłaniu
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';

    // Opcjonalnie można dodać komunikat o wysłaniu wiadomości na stronie
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Wiadomość została wysłana!';
    contactForm.appendChild(confirmationMessage);
});
