/*=========================================togger style switch =================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


/*======== scroll  =================*/
window.addEventListener("scroll", () =>{
if(  document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*========================================= cambiar icono y fuente  =================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("icon-contrast");
    dayNight.querySelector("i").classList.toggle("icon-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})



// const colors = document.querySelector(".colors");
//     colors.addEventListener("click", () =>{
//     colors.querySelector("span").classList.toggle("icon-home3");
//     colors.querySelector("span").classList.toggle("icon-facebook");
//     document.body.classList.toggle("darwin");
// })
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("darwin"))
//     {
//         colors.querySelector("span").classList.add("fa-sun");
//     }
//     else
//     {
//         colors.querySelector("span").classList.add("fa-moon");
//     }
// })


const color1 = document.querySelector(".color1");
    color1.addEventListener("click", () =>{
    color1.querySelector("span").classList.toggle("icon-home3");
    color1.querySelector("span").classList.toggle("icon-happy2");
    document.body.classList.toggle("darwin");
})
const color2 = document.querySelector(".color2");
    color2.addEventListener("click", () =>{
    color2.querySelector("span").classList.toggle("icon-home3");
    color2.querySelector("span").classList.toggle("icon-smile");
    document.body.classList.toggle("darwin2");
})
const color3 = document.querySelector(".color3");
    color3.addEventListener("click", () =>{
    color3.querySelector("span").classList.toggle("icon-home3");
    color3.querySelector("span").classList.toggle("icon-smile2");
    document.body.classList.toggle("darwin3");
})
const color4 = document.querySelector(".color4");
    color4.addEventListener("click", () =>{
    color4.querySelector("span").classList.toggle("icon-home3");
    color4.querySelector("span").classList.toggle("icon-cool");
    document.body.classList.toggle("darwin4");
})
const color5 = document.querySelector(".color5");
    color5.addEventListener("click", () =>{
    color5.querySelector("span").classList.toggle("icon-home3");
    color5.querySelector("span").classList.toggle("icon-flickr4");
    document.body.classList.toggle("darwin5");
})