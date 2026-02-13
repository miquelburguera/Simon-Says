const colors = ["#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"];
const sequencia = [];

/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */
//triar els colors
function inici() {
    numAleatori = Math.floor(Math.random() * colors.length);
    showNotification(colors[numAleatori]);
    sequencia.push(colors[numAleatori]);
    console.log(sequencia);
}


function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000);
}
//
// let resposta = ""
//
// function comprovacolors() {
//     let resposta = document.getElementById("numAleatori").value
//     console.log(resposta, paraulaOriginal)
//     if(resposta.toUpperCase() === paraulaOriginal) {
//         mostraMissatge("Siiuuu", "ok")
//     }else{
//         mostraMissatge("Noo...", "error")
//     }
//     console.log(resposta)
// }