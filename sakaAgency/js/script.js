// ....Menu burger...................


const menuBurger = document.querySelector(".menu_burger");
menuBurger.addEventListener("click", function(){
    document.querySelector(".menu_burger_icon").classList.toggle("active");
    document.querySelector(".menu_mobile").classList.toggle("menu_mobile_active");
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider_dot");


function disableAll(){
    slides.forEach(element => {
        element.classList.remove('slide_active')
    });

    dots.forEach(element => {
        element.classList.remove('slider_dot_active')
    });
}

dots.forEach((dot, indexDot)=>{
    dot.addEventListener("click" , function(){
        disableAll()
        slides[indexDot].classList.add('slide_active')
        dots[indexDot].classList.add('slider_dot_active')
    })
})


// ..code validation..........................

const email = document.querySelector(".email_input");
const buttonForm = document.querySelector(".serd_button");
const messageError = document.querySelector(".message_about_error");
let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
buttonForm.addEventListener("click", function(event){
    event.preventDefault();
    if(!regularExpression.test(email.value)){
        messageError.classList.add("active_error")
    }else{
        messageError.classList.remove("active_error");
        email.classList.remove("border_for_email");
    }
    if(email.value == ""){
        email.classList.add("border_for_email");
        messageError.classList.remove("active_error")
    }else{
        email.classList.remove("border_for_email");
    }
});