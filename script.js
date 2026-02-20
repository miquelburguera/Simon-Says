const colors = ["#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"];
const sequencia = [];

/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */
//triar els colors
function inici(){
    document.getElementById("botoComencar").hidden = true;
    nouColor()
}

function nouColor() {
    numAleatori = Math.floor(Math.random() * colors.length);
    sequencia.push(colors[numAleatori]);
    console.log(sequencia);
    comptadorMostrats = 0
    showNotification(sequencia);

}


function showNotification() {
        var notification = document.getElementById('notification');
        notification.style.backgroundColor = colors[comptadorMostrats];
        notification.style.display = 'block';

        setTimeout(function () {
            notification.style.display = 'none';

        }, 1000);


}

function comprovarColor(color) {
    console.log(color)

    if(color === sequencia[0]) {
        inici();
    }else{
        console.log('no')

    }
}




//
// let resposta = ""
//
// function comprovaColors() {
//     let resposta = document.getElementById("numAleatori").value
//     console.log(resposta, paraulaOriginal)
//     if(resposta.toUpperCase() === paraulaOriginal) {
//         mostraMissatge("Siiuuu", "ok")
//     }else{
//         mostraMissatge("Noo...", "error")
//     }
//     console.log(resposta)
// }
