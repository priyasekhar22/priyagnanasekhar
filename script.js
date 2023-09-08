var typed = new Typed("#element", {
  strings: ["<i>Frontend </i>Developer"],
  typeSpeed: 50,
});

function myFunction(){
  var navbar=document.getElementById('nav')
  navbar.classList.toggle('show')
}

// 
function Send(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("message").value;

  var body="Name: "+name + "<br/> Email: " + email + "<br/> Message: " +message
  

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "priyagnanasekhar@gmail.com",
    Password : "52FDE7CF31E3FE5925B105D073D27A8529EE",
    To : 'priyagnanasekhar@gmail.com',
    From : "priyagnanasekhar@gmail.com",
    Subject : "This is the subject",
    Body : body
}).then(
  message =>{
    if(message=="OK"){
      swal("Submitted!", "Your Data Successfully Received", "success")
    }
  }
);
}
