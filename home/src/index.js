// change navbar style on scroll

window.addEventListener(
    'scroll' , 
    ()=> {document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 50)}
)

//show or hide freq answer

const freqss = document.querySelectorAll('.freq');
freqss.forEach(freq => {
    freq.addEventListener(
        'click', 
        () => {
            freq.classList.toggle("open");

            // if(freqss.target.getAttribute('display') != freq.getAttribute('display')) freq.classList.add('display-none');
            //     else freq.classList.add('block');

            //change icon
            const icon = freq.querySelector('.freq__icon i');
            if(icon.className === 'uil uil-plus'){
                icon.className = "uil uil-minus";
            }
            else  icon.className = "uil uil-plus";

    })
})

//tablet show / hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click' , () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline";
    menuBtn.style.display = "none";
})

// close nav menu 

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' , closeNav)
























