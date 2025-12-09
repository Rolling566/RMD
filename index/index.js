//banner login
let bannerLog = document.getElementById('login');
try {
    bannerLog.addEventListener('click', () => {
    bannerLog.href = 'navegação/login/login.html'
    })
} catch (error) {
    console.log('Este evento não pertence a esta página.')
}

//Distribuição digital
const distribs = document.querySelectorAll('.distribDig')
distribs.forEach(distrib => {
    distrib.href = 'index/Distriuição_digital/distrib.html'
})

//aderir pelo botão
const aders = document.querySelectorAll('.aderir')
aders.forEach(ader => {   
    ader.addEventListener('click', () => {
        window.location.href = 'navegação/login/login.html'
    });
});

//banner slides
const avan = document.getElementById('avançar')
const volt = document.getElementById('voltar')
const slides = document.getElementById('slides')
const banner2 = document.getElementById('banner2')

if (!volt) {
    console.log(`O elemento "voltar" não foi encontrado`)
}
else {
    // Ao iniciar a página
    volt.style.display = 'none'; 
}

try{
    // avançar
    avan.addEventListener('click', () => {
        slides.style.transform = 'translateX(-50%)';
        banner2.style.textAlign = 'start';
        volt.style.display = 'block';
        avan.style.display = 'none';
    })

    // voltar
    volt.addEventListener('click', () => {
        slides.style.transform = 'translateX(0%)'
        volt.style.display = 'none'
        avan.style.display = 'block'
    })
} catch (error) {
    console.log('Este evento não pertence a esta página')
}

//FAQ
const faqs = document.querySelectorAll('.FAQ');

faqs.forEach(faq => {
  const res = faq.nextElementSibling; // pega o <p> logo após o <h2>
  
  faq.addEventListener('click', () => {
    res.classList.toggle('mostrar');
  });
});

