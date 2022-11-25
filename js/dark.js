// dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})


// submit to mail

function my() {
    alert("Message Sent Successfully!! Thank You")
}
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "username",
        Password: "password",
        To: 'chellabhargavi53@gmail.com',
        From: document.getElementById("email"),
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("body").value
            + "<br> Message: " + document.getElementById("message").value

    }).then(
        message => alert("Message sent Succesfully,Thank You!")
        // window.location("index.html")
    );
}