const icons = document.querySelectorAll('.section-1-icons i')
let i=1
 

setInterval(()=>{
    i++
    const icon = document.querySelector('.change')
    icon.classList.remove('change');
    if (i>icons.length) {
        icons[0].classList.add('change')
        i=1
    }else{

        icon.nextElementSibling.classList.add('change')
    }


},4000)


const menu = document.querySelector('.menu');
menu.addEventListener('click',()=>{
    const navBar = document.querySelector('.navbar'),
          navLinks = document.querySelectorAll('.navbar-link')
    navBar.classList.toggle('active')
    menu.classList.toggle('active')
    navLinks.forEach((link)=>{
        link.classList.toggle('active')
    })
})








