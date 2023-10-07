var agora = new Date()
var hora = agora.getHours()
console.log("Agora são exatamente " + (hora) + " horas")
if (hora < 12){
    console.log("Bom dia!")
} else if (hora < 18){
    console.log("Boa tarde")
} else{
    console.log("Boa noite")
}

exp = 1

switch (exp){

    case 1:
        console.log("Mamão")
        break;

    case 2:
        console.log("Melancia")
        break;

    case 3:
        console.log("manga")
        break;

    case 4:
        console.log("Uva")
        break;

    default:
        console.log("Insira um número válido!")
        break;
}
