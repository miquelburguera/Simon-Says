const colors = ["#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "rgba(174, 32, 18, 0.89)", "#9b2226"];
const sequencia = [];
let comptadorResultats;

const missatgeDisplay = document.getElementById("message");
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
    comptadorResultats=0
    showNotification(sequencia);
    console.log(missatgeDisplay);
    missatgeDisplay.innerHTML = "<h1>Estas en el nivell " + sequencia.length + "</h1>"

}


function showNotification() {
        var notification = document.getElementById('notification');
        notification.style.backgroundColor = sequencia[comptadorMostrats];
        notification.style.display = 'block';

        setTimeout(function () {
            notification.style.display = 'none';
            comptadorMostrats += 1;
            if(comptadorMostrats <sequencia.length ){
                setTimeout(function () {
                    showNotification(sequencia);

                }, 200);
            }
        }, 1000);


}

function comprovarColor(color) {
    console.log(color)


        if (color === sequencia[comptadorResultats]) {
            comptadorResultats += 1
            if (comptadorResultats === sequencia.length) {
                nouColor()
            }
        } else {
            console.log('no')
            missatgeDisplay.innerHTML = '<h3>GAME OVER!!!</h3>' + '<h2>Has arribat al nivell ' + sequencia.length + '</h2>'

        }

}


