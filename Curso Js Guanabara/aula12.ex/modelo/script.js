function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
    if (hora >= 0 && hora <=12){
        //bom dia 
        img.src = 'foto-de-dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'foto-de-tarde.png'
        document.body.style.background = '#e46f0a'
    } else{
        //boa noite
        img.src = 'foto-de-noite.png'
        document.body.style.background = '#1e0c42'
    }
         
    
}