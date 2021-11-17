/*let number=0 ;

while( number<=100){
    console.log(number) ;
    number= number + 2 ;
}*/

/*let number= 1

while(number<=12){
    console.log(number) ;
    number = number +2 ;
}*/

/*
let number= 0

while(number<=11){
    number = number + 1 ;
    console.log(number) ;
    
}*/
/*
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
*/
/*
var medalForScore = function(score) {
    if (score < 3){
      return 'Bronze';
    }
    if (score < 7){
      return 'silver';
    }
    return 'Gold';
  }
  
  console.log(medalForScore(3));*/
  
  /*
  function suma(a,b){
    resultado = a+b
    return resultado 
  }
  let respuesta = suma(1,7);
  alert(respuesta);
  */
/*
  function add(a){
    resultado = a +100
    return resultado;
  }
  alert(add(6));
  */
/*
  let add = a =>a + 100;
  alert(add(6));
  */
/*
  const add = (x,y) => { return x + y };
  console.log(add(3,7));
*/
/*
const medallas = function(puntaje){
  if (puntaje < 3){
    return 'bronce';
  }

}
*/
/*
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}
*/
/*
function areacircunferencial(r){
  const pi = 3.14 ;
  Area = pi*(r*r) ;
  return Area
}

let radio = prompt('Ingrese el valor del raido: ');
resultado = areacircunferencial(radio);
console.log(resultado)
*/

function pasedenotas(nota){
  if(nota<=10){
    alert("te recomiendo estudiar más");
  }else if(nota>10){
    alert("Aprobaste");
  }

}

let tunota = prompt("introduce tu nota: ");
 resultado = pasedenotas(tunota);
 console.log(resultado);