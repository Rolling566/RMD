//marcar página
const navs = document.getElementsByClassName('navegacao')
for (let i = 0; i < navs.length; i++) {
    const nav = navs[i]

    //ficar marcado quando se está nessa página
    if (nav.href === window.location.href) {
        nav.style.transform = 'scale(1.3)'
        nav.style.color = '#FF8E1C'
    }
} 

//heder constante
const head = document.getElementsByTagName('header')[0]

window.addEventListener('scroll', ()=> {
    //fixar o header
    if (  window.scrollY >= head.offsetHeight) {
        head.style.position = 'fixed'
        head.style.top = '0'
        head.style.width = '100%'
        head.style.height = '2.4em'
        head.style.zIndex = '9999'
    }
    //voltar ao normal
    else {
        head.style.position = 'relative'
        head.style.top = 'auto';
        head.style.height = '2.4em'
        head.style.zIndex = 'auto';
    }
}) 
//aderir pelo botão
function aderir() {
    window.location.href = 'login/login.html'
}
document.getElementById('aderir').addEventListener('click', aderir)

//banner slides
const avan = document.getElementById('avançar')
const volt = document.getElementById('voltar')
const slides = document.getElementById('slides')
const banner2 = document.getElementById('banner2')

let atual = 0 // 0 = banner1, 1 = banner2

// Ao iniciar a página
volt.style.display = 'none'

// avançar
avan.addEventListener('click', () => {
    atual = 1
    slides.style.transform = 'translateX(-50%)'

    banner2.style.textAlign = 'start'
    avan.style.display = 'none'
    volt.style.display = 'flex'
})

// voltar
volt.addEventListener('click', () => {
    atual = 0
    slides.style.transform = 'translateX(0%)'

    volt.style.display = 'none'
    avan.style.display = 'flex'
})

//FAQ
const faqs = document.querySelectorAll('.FAQ');

faqs.forEach(faq => {
  const res = faq.nextElementSibling; // pega o <p> logo após o <h2>
  
  faq.addEventListener('click', () => {
    res.classList.toggle('mostrar');
  });
});

