// estamos creando una variable y se ultiliza para ello la palabra clave LET, 
//UNA VEZ CREADA SE FINALIZA con punto y coma.
let Hola; //paso 2
let caracter;//actualmente no tiene un valor con el = podemos asignarle uno/ PASO 3
let  hola = "Hola";//variable inicializada paso 4
let desarrollador= "Naomi";
console.log (desarrollador);//muestro por pantalla con esta palabra y asu vez le indico que debe mostrar lo que se encuentra en la variable desarrolador.PASO 5
//LA CONVENCION CAMEL CASE SE usa para escribir variables que tengan las de una palabra  
//ejemplo: variableUno se usa la primera palabra en minuscula y la segunda SOLO con su primera letra en Mayuscula sin espacio entre ambas  PASO 6

//let secondCharter; //paso 9
//secondCharter = "prueba";//paso 9
let character; //paso 9
//console.log(secondCharter);// no tiene valor porque no esta definida solo esta iniciaolizada  paso 7// si le asigno la palabra prueba ahora si tiene valor  paso 8

let count = 8;  //paso 10
//let array =[]; // asi se delacra un array o matris que esta vacia paso 11
//let rows =[];  // asi declaro una variable llamara rows (filas) pero que esta vacia  paso 11
//let array=["First","Second"]; //paso 12 lleno una matris con dos valores separados AMBOS POR COMA
//let rows=["London","New York", "Mumbai"];//paso 12 creo otra matriz con los siguientes datos
//console.log(rows);// muestro los valores por pantalla
//console.log(rows[0]);// asi muestro una psicione dentro de la matriz cada valor tiene asignada una posicion comenzando desde el cero(0), 
//indico el nombre de la variable que voy a analizar en este caso (rows) y la posicion que quiero buscar en este caso la primera que seria la cero. PASO 13
let array =[1,2,3]; //LLENO UNA MATRIS CON VALORES NUMERICOS
 array [1]= 25; // las matrices son mutables esto significa que puedo re asignarles valores en la posicion que yo desee en este caso
// creo una matris con tres valores y cambio un valor asignando uno nuevo pero indicando en que posicion quiero que cambio[] recorda que las posiciones arrancan en cero
// y luego le doy el nuevo valor paso 14
console.log(array);// muestra la modificacion del codigo
rows[2]=10;//paso 14 modifico la matriz fila creada en el paso 12 y cambio el valor de la posicion 2 por el numero 10  ESTO SE LLAMA MUTACION PASO 15
console.log(rows);//muEstro por pantalla como deberia quedar ["london","New York",10]
array [array.length -1];// si no conocemos la cantidad de elementos de nuestro array podemos indicarlo asi con la propiedad LENGTH y nos devuelve el ultimo elemento paso 15
array.push(12);//metodo PUSH permite empujar un valor al final de la matriz paso 17
array.push("PARIS");//agrego la palabra paris al final del array[1,2,3,"PARIS"] del paso 14 y queda asi  PASO 17
console.log(array);// muestro por pantalla asi PASO 17
rows.push("PARIS"); // hago lo mismo con la matriz fila(rows) del paso 12 y agrego la palabra paris al final y queda asi ["London","New York", "Mumbai","PARIS" ] PASO 17
//console.log(rows);//y tambien lo nuestro por pantalla
const popped = rows.pop();//paso 18 este metodo llamado .pop() perimite eliminar el ULTIMO  elemento de la matriz Y LO DEVUELVE POR PANTALLA
console.log(popped);
function padRow(name){
  return name;
}//muestro por pantalla paso 18
const call =padRow("Silvia");
console.log(call);
for(let i=0;i<count;i+i++){
  rows.push(character.repeat(i+i));//muestra por pantalla el valor de i PASO 24,25,26,27
  }

  let result= "";

  for (const row of rows) {
    result = result + "\n" + row;//agrega un salto de linea "\n"para crear la piramide correcta/ paso 32
    }
 
 console.log(result);
let characterAlmohadilla ="#";//cambiamos el valor character y su nombre lo creamos en el paso 9 recuerdausar la CONVENCION CAMEL CASE para palabras compuestas.paso 21
//console.log(characterAlmohadilla);//muestro por pantalla en #
//para genear una piramide necesito varias filas , para ello debo usar un bucle , en este caso usaremos un FOR basico compuesto de la siguiente SINTAXIS
//for(iterador;condition;iteration){}paso 22
//const count=8;
//utilizaremos el iterador (i) como una variable que se puede declarar especificamente en dicho bucle FOR,LUEGO SE EVALUA LA CONDICION: 
//para (i) siempre que (i) sea menor al valor de la variable count que fue asignada con el valor de 8 y mientras i sume de uno en uno 

//for(let index=100;"second";"third"){}paso 23

//let resultado=" ";//declaro una variable resultado y con las comillas dobles le asigno una cadena vacia. paso 28
//console.log(resultado);// se muestra un espacio vacio porque no hay nada dentro de la variable resultado.paso 29
//for(const value of iterable){} se utiliza este bucle de manera especial para manipular la cadena de resultados.
// utilizo el bloque for iterar entre las filas paso 30
//for(const row of rows){
 //console.log(row);// muestra cada fila en filas
//}
//for (const row of rows) {
 //      result = result + row;
//}    

 

//for (let i = 0; i < count; i = i + 1) {
       //rows.push(caracter);
      //}
      //let result = ""
    //este bucle recorre el array rows (filas)
     // for (const characterAlmohadilla of rows) {
       //result = result + "\n" + characterAlmohadilla;
     // }





   



















