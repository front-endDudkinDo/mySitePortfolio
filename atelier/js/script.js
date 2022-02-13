const menuBurger = document.querySelector(".menu_burger");
menuBurger.addEventListener("click", function(){
    document.querySelector(".menu_burger_icon").classList.toggle("active");
    document.querySelector(".menu_mobile").classList.toggle("menu_mobile_active");
});
