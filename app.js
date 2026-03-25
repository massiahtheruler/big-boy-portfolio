// template_1s2j1el
// service_isnormh
// ZCV5aL5wDiIB1JwGY

let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX  * scaleFactor ;
    const y = event.clientY  * scaleFactor ;


    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

// // Attach mousemove listener to trigger shape movement
 document.addEventListener("mousemove", moveBackground);

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += "dark-theme"}
    else {
        document.body.classList.remove("dark-theme")
    }
}

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

}   

function toggleModal() {
    document.body.classList.toggle("modal--open");
}

// Close modal when exit button is clicked
document.querySelector(".modal__exit").addEventListener("click", toggleModal);
