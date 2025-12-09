const criarCon = document.getElementById('criarCon')
const fechar =  document.getElementById('fechar')
const newAccount = document.getElementById('newAccount')
const form = document.getElementById('form')

//abrir aba de criar conta
criarCon.addEventListener('click', () => {
    newAccount.style.display = 'flex';
    newAccount.style.flexDirection = 'column'
    newAccount.style.textAlign = 'center'
    form.style.textAlign = 'start'
    form.style.height = '100%'
    form.style.display = 'flex'
    form.style.flexDirection = 'column' 
    form.style.gap = '30px'
    form.style.color = '#f8a528'
})

//fechar aba de criar conta
fechar.addEventListener('click', () => {
    newAccount.style.display = 'none';
})

//fechar mensagem de erro nos dados do login
let fechar2 = document.getElementById('close');
fechar2.addEventListener('click', () => {
    const passERR = document.getElementById('passERR1')
    passERR.style.display = 'none'
})

//mostrar senhas
const passwordContainers = document.querySelectorAll('.passShow');

passwordContainers.forEach(input => {
    const toggle = input.nextElementSibling; // pegar o span ao lado do input
    const img = toggle.querySelector('img');

    toggle.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            img.src = 'Img/eyeShow.png'; 
        } else {
            input.type = 'password';
            img.src = 'Img/eyeUnShow.png';
        }
    });
});