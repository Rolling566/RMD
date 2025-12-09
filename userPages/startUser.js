window.addEventListener('DOMContentLoaded', async () => {
const user = await aboutUser()

if(!user) {
    alert('não foi possível carregar os dados do usuário')
    return;
}

let item = document.createElement('h1');
item.innerHTML = `Bem-vindo ${user.name}`
item.style.textAlign = 'center'

let her = document.createElement('img')
her.src = user.avatar
her.style.display = 'block'
her.style.margin = 'auto'

document.body.appendChild(item)
document.body.appendChild(her)
})

