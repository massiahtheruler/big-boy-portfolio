// template_1s2j1el
// service_isnormh
// ZCV5aL5wDiIB1JwGY

function contact(event) {
    event.preventDefault();
    const load = document.querySelector('.modal__overlay--load')
const success = document.querySelector('.modal__overlay--success')
load.classList += " modal__overlay--visible"
    
emailjs
     .sendForm(
         'service_isnormh',
     'template_1s2j1el',
 event.target,
 'ZCV5aL5wDiIB1JwGY'
     ).then(() => {
            load.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
 }).catch(() => {
    load.classList.remove("modal__overlay--visible")
    alert(
        "the email service is temporarily unavailable. Please contact me directly @Justin.Henry0024@gmail.com"
    )

 })
setTimeout(() => {

    console.log('it worked')
}, 1000);

}   
