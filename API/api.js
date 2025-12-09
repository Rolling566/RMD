//example https://dummyjson.com/docs/auth#auth-me
// pegar dados do localStorage (opcional)
const refresh_token = localStorage.getItem('refresh')
const token = localStorage.getItem('token');

async function aboutUser() {
    try {
        // pegar token do localStorage
        if (!token || token == undefined || token == null) {
            alert('Usuário não autorizado');
            window.location.href = '../navegação/login/login.html';
            return;
        }

        // fazer requisição para pegar dados do usuário
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
        //console.log(` Estes são os dados do usuario: ${JSON.stringify(data, null, 2)}`)

        // guardar dados no localStorage /*
         /* localStorage.setItem('email', data.email);
        localStorage.setItem('nome', data.name);
        localStorage.setItem('id', data.id);
        localStorage.setItem('foto', data.avatar);
        localStorage.setItem('username', data.username); */
        
    } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
    }
}
window.addEventListener('DOMContentLoaded', aboutUser);

//dados do user
//const username = localStorage.getItem('username');
const id = localStorage.getItem('id');
const email = localStorage.getItem('email');
const nome = localStorage.getItem('nome');
const foto = localStorage.getItem('foto');



