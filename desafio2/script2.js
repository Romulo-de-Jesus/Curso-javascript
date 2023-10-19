alert('OOOOOOOOOOMAGA')


function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
// hora = 14
if (hora >= 0 && hora < 12){
//bom dia
img.src = "pexels-manha.png"
document.body.style.background = "#fdcf9d"

} else if (hora > 12 && hora <= 18){
//boa tarde
img.src = "pexels-tarde.png"
document.body.style.background = "#be7c72"

} else{
//boa noite
img.src = "pexels-noite.png"
document.body.style.background = "#314765"

}
}