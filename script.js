const submitbtn = document.getElementById("submit");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const message= document.getElementById("message");



submitbtn.addEventListner("click",function(){

    if(fname !== "" || email !== "" || message !== "" ){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    
        }
});




// Get elements
const image1 = document.getElementById("image1");
const button = document.getElementById("link-button");

// Change opacity on mouseover
image1.addEventListener("mouseover", function() {
    image1.style.opacity = 0.5; // Set opacity to 50% on hover
    button.style.display = "block"; // Show the button
});

// Change opacity back and hide the button on mouseout
image1.addEventListener("mouseout", function() {
    image1.style.opacity = 1; // Set opacity back to 100% on mouse out
    button.style.display = "none"; // Hide the button
});
let bar = document.getElementsByClassName("bar");
let navbar = document.getElementsByClassName("navbar");


bar.addEventListener("click" , function(){

    navbar.style.display = "block";
    navbar.style.flexDirectioc = "column";
})



