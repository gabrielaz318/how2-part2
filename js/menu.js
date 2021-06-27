const menuAbrir = document.querySelector('.iconeAbrir')
const menuFechar = document.querySelector('.iconeFechar')
const bgFundo = document.querySelector('.mobileBgPreto')
const navMobile = document.querySelector('.nav-mobile')
const inicio = document.querySelector('#btn-inicio')
const projetos = document.querySelector('#btn-projetos')
const sobre = document.querySelector('#btn-sobre')
const contato = document.querySelector('#btn-contato')

menuAbrir.addEventListener('click', menu)
menuFechar.addEventListener('click', menu)
bgFundo.addEventListener('click', menu)

contato.addEventListener('click', menu)
sobre.addEventListener('click', menu)
contato.addEventListener('click', menu)
projetos.addEventListener('click', menu)
inicio.addEventListener('click', menu)

function menu() {
    if(!menuAbrir.classList.contains('dNone')){
        menuAbrir.classList.add('dNone')
        menuFechar.classList.remove('dNone')
        bgFundo.classList.remove('dNone')
        navMobile.classList.remove('dNone')
        navMobile.classList.add('menu-animado')

    } else {
        menuAbrir.classList.remove('dNone')
        menuFechar.classList.add('dNone')
        bgFundo.classList.add('dNone')
        navMobile.classList.add('dNone')
        navMobile.classList.remove('menu-animado')
    }
}