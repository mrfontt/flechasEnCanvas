var teclas = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
             };
//console.log(teclas); Así se ve el objeto creado con las variables
/*
    Casi nunca un bloque de código termina con punto y coma, la diferencia es que esta vez
    la variable es una sola linea de código que contiene a las demás. Básicamente creamos un objeto en js,
    de ahí la extensión '.json'
*/

document.addEventListener("keydown", dibujarTeclado)    
/*
    "keydown" contabiliza siempre que la tecla siga presionada, en cambio
    "keyup" contabiliza solo cuando se suelta la tecla
*/

function dibujarTeclado(evento)
{
    //console.log("Ya la oprimiste");  En el inspeccionador se va contando cada ves que se oprime una tecla
    //console.log(evento.keyCode);    De esta manera se conoce el keyCode de cada tecla
    
    var colorcito = "green";
    var movimiento = 1;
    
    switch(evento.keyCode)
    {
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;

        default:
            console.log("Esta no es una flecha");
        break;    
    }
}

var cuadro = document.getElementById("areaDibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("green", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();                 //Así es como JS le llama a iniciar un trazo
  lienzo.strokeStyle = color;         //Este atributo/propiedad es para definir el color de la línea
  lienzo.lineWidth = 3;               //Se define el ancho en pixeles de la línea
  lienzo.moveTo(xinicial, yinicial);  //Método para mover el lapiz a donde va a arrancar la línea
  lienzo.lineTo(xfinal, yfinal);      //Es la función de trazar una línea
  lienzo.stroke();                    //Esta función dibuja la línea
  lienzo.closePath();                 /*Función para cerrar el trazo ("levantar el lapiz"),
                                        si no se invoca la línea sigue por ese camino*/
}