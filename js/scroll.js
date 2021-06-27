// ANCORAS
const menuItems = document.querySelectorAll('.nav-desktop a')

menuItems.forEach(item => {
    item.addEventListener('click', scrollParaId)
})

function scrollParaId(event){
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const section = document.querySelector(id)

    window.scroll({
        top: section.offsetTop - 80,
        behavior: 'smooth',
    })
}

// ANIMAR ITENS

    //**Titulo
        setTimeout(() => {
            const tituloprincipal = document.querySelector('[data-titulo]')
            tituloprincipal.classList.add('tituloAnime')
        }, 300)

    //**********

const alvoAnimar = document.querySelectorAll('[data-anime]')
const classeAnimada = 'animate'

function animarScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight - 150)
    alvoAnimar.forEach(e => {
        if(windowTop > e.offsetTop) {
            e.classList.add(classeAnimada)
        } else {
            e.classList.remove(classeAnimada)
        }
    })
}

if(alvoAnimar.length){
    window.addEventListener('scroll', animarScroll )
}


// ANIMAR NAV
window.addEventListener('scroll', nav)
const elementoNav = document.querySelector('.nav-desktop')

function nav(){
    if(window.pageYOffset > 30){
        if(!elementoNav.classList.contains('nav-animate')){
           elementoNav.classList.add('nav-animate') 
        }
    } else {
        if(elementoNav.classList.contains('nav-animate')){
            elementoNav.classList.remove('nav-animate') 
         }
    }
}



// ALERTA SOBRE AS IMAGENS
alert('\nAVISO:\nAs imagens de projetos pertencem a Grupo W, elas foram utilizadas apenas como objeto de estudo.\n\n\nAcesse:\nwww.grupow.com.br')