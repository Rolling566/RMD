//favicon e marcar página
const navs = document.querySelectorAll('.navegacao')
for (let i = 0; i < navs.length; i++) {
    const nav = navs[i]
 
    //ficar marcado quando se está nessa página
    window.addEventListener('load', () => {       
        if (nav.href == window.location.href) {
            nav.style.transform = 'scale(1.3)'
            nav.style.color = '#FF8E1C'
        }
    });
} 

//favicon
const head = document.getElementsByTagName('head')[0]
const link1 = document.createElement('link')
link1.rel = 'shortcut icon'
link1.type = 'image/x-icon'
if (location.pathname.endsWith('index.html')){
    link1.href = 'imagens/favicon/RMD logotipo transparente 50px.png'
}
else if (location.pathname.endsWith('start.html')) {
    link1.href =  '../imagens/favicon/RMD logotipo transparente 50px.png'
}
else if (location.pathname.endsWith('recoverPAss.html')) {
    link1.href = '../../../imagens/favicon/RMD logotipo transparente 50px.png'
}
else {
    link1.href = '../../imagens/favicon/RMD logotipo transparente 50px.png'
}
head.appendChild(link1)
