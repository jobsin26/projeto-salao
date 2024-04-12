const menuDiv = document.getElementById('nav-bar')
const btnAnimation = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animation)

function animation(){
    menuDiv.classList.toggle('ativation')
    btnAnimation.classList.toggle('ativation2')
}