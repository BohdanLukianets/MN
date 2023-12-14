document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    // Add form validation and submission logic here
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation example
    if(name && email && message) {
        // Form is valid, you can send it to a server here
        console.log('Form Submitted!', name, email, message);
    } else {
        // Form is invalid
        console.log('Please fill all the fields.');
    }
});
