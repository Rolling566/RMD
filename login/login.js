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