let formLog = document.getElementById('int_login')
let verify = '';

formLog.addEventListener('submit', fetchAcc)
async function  fetchAcc(e) {
    e.preventDefault();

    try{     
        let userEmail = document.getElementById('userEmailLog').value
        let userPassword = document.getElementById('userPassordLog').value

        const user = {
            email: userEmail,
            password: userPassword
        }

        //enviar os dados para verificação
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(user)    
        });

        if (!response.ok) {
            //const message = await response.json();
            //mensagem de erro
            throw new Error('Credenciais incorretas.')
        }
                
        const data = await response.json();
        //Guaradar token
        localStorage.setItem('refresh', data.refresh_token)
        localStorage.setItem('token', data.access_token);

        window.location.href = '../../pt/start.html';
    } 
    catch (error) {
        let erroTela = {
            container: document.getElementById('passERR1'),
            message: document.getElementById('passERR'),
            closeBtn: document.getElementById('close'),

            show(errorMessage) {
            this.container.style.display = 'flex';
            this.message.style.color = "#ff4d4f"; // vermelho
            
            if (error.message === 'Credenciais incorretas.') {
                this.message.innerHTML = error.message;
            }
            else {
                this.message.innerHTML = `${error.message}! Verifique os dados e tente novamente.`
            }
            this.closeBtn.innerHTML = 'X';
            }   
        }
        //mensagem de erro
        erroTela.show(error.message);
    }
}
