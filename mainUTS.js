function handleSubmit(event) {
    event.preventDefault(); 
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;


    var result = "Email: " + email + "\nSubject: " + subject + "\nMessage: " + message;
    alert(result);
}