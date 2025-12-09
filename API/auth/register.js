const formNewAcc = document.getElementById('newAccount');

formNewAcc.addEventListener('submit', newUser);
async function newUser(e) {
    e.preventDefault();

    try {
        const newUserPass = document.getElementById('passwordNova').value.trim()
        const newUserPass2 = document.getElementById('passwordNova2').value.trim()

        const name = document.getElementById('name').value
        const userName = document.getElementById('user').value
        const emailNewAcc = document.getElementById('email').value

        //passwords não coincidem
        const msgErro = document.getElementById('passwordNova2');
        msgErro.setCustomValidity("");

        if (newUserPass != newUserPass2) {
            throw new Error('As palavras passes não coincidem.')
        }
        //console.log('Senhas coincidem')

        //Criar usário
        const newUser = {
            email: String(emailNewAcc),
            name: String(name),
            //username: userName,
            password: String(newUserPass2),
            role: "customer",    
            avatar: "https://i.pravatar.cc/150?img=3"         
        }

        const response = await fetch('https://api.escuelajs.co/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
        if (!response.ok) {
            //const message = await response.json()
            throw new Error('Não foi possível criar usuário, verifique os dados e tente novamente.')
        }
        
        const data = await response.json()
        //localStorage.setItem('token', data.accessToken)

        //mensagem
        throw new Error('A sua conta foi criada com successo.')

    }catch (error) {
        //Banner de erro
        let erroTela = {
            container: document.getElementById('passERR1'),
            message: document.getElementById('passERR'),
            closeBtn: document.getElementById('close'),

            show(errorMessage) {
            this.container.style.display = 'flex';

              // definir cor baseada no tipo de mensagem
            if (error.message === 'A sua conta foi criada com successo.') {
                this.message.style.color = "#28a745"; // verde
            } else {
                this.message.style.color = "#ff4d4f"; // vermelho
            }

            this.message.innerHTML = error.message;
            this.closeBtn.innerHTML = 'X';
            }   
        }
        //Palavra passes diferente
        if (error.message === 'As palavras passes não coincidem.') {
            erroTela.show(error.message);
        }
        //Resposta não ok
        else if (error.message === 'Não foi possível criar usuário, verifique os dados e tente novamente.') {
            erroTela.show(error.message);
        }
        //Conta criada com successo
        else if (error.message === 'A sua conta foi criada com successo.') {
            erroTela.show(error.message);
        }
        else {
            erroTela.show(error.message);
        }
    }

}
