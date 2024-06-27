function SendMail() {
    let parms = {
        subject : document.getElementById("subject").value,
        name : document.getElementById("name").value,
        message : document.getElementById("message").value,
        email : document.getElementById("email").value,
      
    }

emailjs.send("service_0i17y9c", "template_107a34n", parms).then(alert("Email Sent!!") )
} 
