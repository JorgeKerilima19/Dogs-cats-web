/* Herencia Prototipal antes del 2015
function animal(nombre,genero){
    this.nombre=nombre;
    this.genero=genero;
};
Butters= new animal("perro","macho")
Snopy= new animal("gato","hembra")
animal.prototype.saludar=function(){
    console.log("Guau Guau")
}
animal.prototype.decir=function(){
    console.log("Yoko")
}
const Ktrin=new animal("Alu","macho")
Ktrin.decir()
Ktrin.saludar()
function perro(nombre,genero,tamanio){
    this.super=animal;
    this.super(nombre,genero);
    this.tamanio=tamanio
}
perro.prototype=new animal();
perro.prototype.constructor= perro;

perro.prototype.saludar=function(){
    console.log("Hola XD")}
const hola=new perro("Bau","macho","grande")
hola.saludar()
hola.decir()*/

//Las clases son palabras reservadas que se transpilan en JS vanilla en el navegador
//(prototype)
class animal{
    constructor(nombre,especie, genero){
        this.nombre=nombre
        this.especie=especie
        this.genero=genero
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}`)
    }
    decir(){
        console.log(`Hola XD`)
    }
    static queEres(){ //Los metodos estaticos se pueden inicializar sin la necesidad de crear una instancia
        console.log(`Soy un animal corriente ${this.nombre}`)//NOTA: el "this.name" retornará undefined pq 
                                                            //no se le pasa argumento al momento de inicializarla
    }
}
const Miki= new animal("Miki","raton","macho");
/*Miki.decir()
Miki.saludar()
console.log(Miki)
*/
class perro extends animal{
    constructor(nombre,especie, genero, tamanio){
        super(nombre,especie, genero);
        this.tamanio=tamanio;
        this.raza=null;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y a chingar a su madre`)
    }
    presentarse(){
        console.log(`soy una especie ${this.tamanio} `)
    }
    get getRaza(){
        return this.raza
    }//Los metodos setters y getter se trabajan como propiedades y no como metodos
    set setRaza(raza){
        this.raza=raza;
    }
}
const Crasy=new perro("Crasy","serpiente","hembra","Enorme");
/*Crasy.decir()
Crasy.saludar()
Crasy.presentarse()
console.log(Crasy)
animal.queEres()*/
/* El objeto console
console.log(Crasy.getRaza)
Crasy.setRaza="Boa"
console.log(Crasy.getRaza)
console.error("No sigas codeando :D")
console.warn("Yamete Kudasai!!!")
console.group("Grope x")
console.log("Saawglh")
console.log("Saawglh")
console.log("Saawglh")
console.groupEnd()
console.table(Object.entries(console).sort())*/
/* El objeto Date
let fecha= new Date()
console.log(fecha)
console.log(fecha.getDate()) //dia
console.log(fecha.getFullYear())//año
console.log(fecha.getMonth())//mes     //REMINDER: todos los dias/meses/horas son int formato 24
console.log(fecha.getDay())//Dia
console.log(fecha.toDateString())
console.log(fecha.toString())//dato completo
console.log(fecha.toLocaleDateString())//Fecha corta
console.log(fecha.toLocaleString())//fecha + min
console.log(fecha.getUTCDate())//Hora Meridiano Greenwich-Londres
console.log(Date.now()) //Segundos desde 1970 LIBRERIA-->>> momentjs.com*/
/*El objet Math
console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-5.8));//valor absoluto
console.log(Math.ceil(7.1))//Valor entero superior SIEMPRE
console.log(Math.floor(7.9))//Valor entero inferior SIEMPRE 
console.log(Math.round(7.5))//Valor entero al mas cercano
console.log(Math.sqrt(81))//Raiz cuadrada
console.log(Math.pow(3,4))//Potencia
console.log(Math.sign(-0.5));// Verificacion del signo -1 0 1 (negativo/cero/positivo)
console.log(Math.random())//Genera un número random entre 0 y 1(sin parametros)
console.log(Math.random()*60)//genera un número random entre y el numero de la mult. Se recomienda usar round*/

/*for (let i=1; i<=100;i++){
    if(i % 3===0 && i % 5===0 ){
        console.log("FizzBuzz");
    } else if (i%3===0){
        console.log("Fizz");
    }
    else if(i % 5===0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}*/

//User Interaction is really important and we can do that by using the next methods of the object window or just without it. They can be saved as variables
/*let alrt=alert("Hola"),
confrm=confirm("I'm dying"),
rompt=prompt("Habla CTMRE >:v")
console.log(alrt)   //undefined
console.log(confrm) //true or false
console.log(rompt)  //storaged values if none returns null*/

//Anonimus Functions: They should be encapsulated with a parentheses and an extro to be
//executed once the server is up.
//REMEMBER, always, ALWAYS put the semicolons properly >:'D

/*(function(){
    console.log("Hola :D")
})();
(function(d,w,c){
    console.log(d);
    console.log(w);
    c.log("A normal Console.log")
    
})(document,window,console);*/

//Asincrony, we have to functions that will keep running a function until it is
//told to stop
//To cancel the execution the function should be storaged inside a variable

/*let hour=setTimeout(()=>{//The first parameter executes a function
    console.log(new Date().toLocaleTimeString())
},1000);// The second parameter should be putted on ms
clearTimeout(hour);//this function will cancel any setTimeout function and clear the 
//console
console.log("All Done!!!")

let interval=setInterval(()=>{//This will execute the function to the infinity
    console.log(new Date().toLocaleTimeString());
},1000)//time interval
clearInterval(interval)
console.log("All Done!!!")*/

/*The object Set

let library=["Hola", "HOLA", 1, 2, 3, 4, 5, 2, 2, 1, 5, 3, true, false, true];
// The set type returns an arraywith unique elements of an array
const st=new Set(library); //the new is important, since set is an object
console.log(st)
console.log(st.size)//Set use size instead of lenght*/

/* (i of set){     //Itinerating the Set object
    console.log(i)
}
console.log("Initializing forEach");
set.forEach(item=> console.log((item)));*///forEach is implemented for Arr and Set
//console.log(set[0])   this will give an error bc set is not an Array
//So in order to access to the elements, we have to convert it into an Array.
/*let NewArray=Array.from(st);
console.log(NewArray);
console.log(NewArray[0]);
st.delete("HOLA") //to delete elements of the Set object

console.log(st.has("HOLA"))//returns a boolean
st.clear();//to delete the Set st*/

//The object map act like the setters and getters

//it allows us to use primitive types as keys DONT TRY
/*let mp= new Map();
mp.set("Name","Jorge");
mp.set("LastName","Quispe");
mp.set("Age",20)
console.log(mp)
console.log(mp.size)
console.log(mp.has("Age"))
console.log(mp.get("Age"))
mp.set("Name","Luis")
console.log(mp)
mp.delete("Age")
console.log(mp)
mp.set("Programer",true)
mp.set("Coder",false)
for(let[key,value]of mp){
    console.log(`Key: ${key}--> ${value}`)
}
const mp2=new Map([
    ["Name","Nala"],
    ["LastName","Insa"],
    ["Age",25],
    [null,"Null"]
]);
const Keys=[...mp2.keys()]
const Values=[...mp2.values()]

console.log(Keys)
console.log(Values)*/

//REMEMBER those two last objects have a weak type which is used in frameworks

//Iterables and Iterators
//We can Itinerate special and primitive types in an easier form with the 
//Iterator form:
/*
const iterablesArray=[1,2,3,4,6,4,5]
const iterablesString="Hello World"
const iterablesMaps=new Map([["Name","Sora"],["LastName","Koluma"]])
const iterablesSets=new Set([1,2,3,4,6,4,5])

const iteratr=iterablesMaps[Symbol.iterator]();
console.log(iterablesArray)
console.log(iteratr)*/
//The next Method acts like a generator, every time is called, produced a "i+1" elm
//However, it has two insides, the Value(element) and the Done(is it finished?)
/* 
console.log(iteratr.next())
console.log(iteratr.next())*/
//We can use the Done property two make a while loop so we can itinerate easier
/*let next=iteratr.next()
while(!next.done){
    console.log(next.value)
    next=iteratr.next()
}*/

/*-------------------------------DOM(document object module----------------------- */

/*console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("tit"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("dogo"))
//These last three had been replaced by the querySelector which accpets CSS tags
console.log(document.querySelector("#dogo"))
//query just return the first coincidence- so we use "all"
console.log(document.querySelectorAll("li"))
document.querySelectorAll("li").forEach(element => {console.log("element",element)});*/
const $linkDOM=document.querySelector(".link-DOM")
/* DIfferent ways to access the CSS styles from DOM*/
/*console.log($linkDOM.style)//will show what elements were modified
console.log($linkDOM.getAttribute("style"))//display the modified atributes
console.log($linkDOM.style.backgroundColor)*/

//The Window object shows us the whole properties
//while the up ones just the ones with atributes

/*console.log(window.getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color"))*/
//Modifying the properties with set
/*$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
//Using the "." to modify CSS properties
$linkDOM.style.width="50%"
$linkDOM.style.textAlign="center"
$linkDOM.style.margin="auto"
console.log($linkDOM.getAttribute("style"))*/

//Using CSS variables or custom CSS properties 
/*const $html=document.documentElement,
$body=document.body
let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor)
$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor

$html.style.setProperty("--dark-color","violet")*/
//once the atribute of a cssV has changed we have to update the JS var

/*varYellowColor=getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.color=varYellowColor*/
//CSS VAR METHODS 
//Important!! we can work this way:

/*const $card=document.querySelector(".card");
$card.style.setProperty("filter","sepia(1)");
console.log($card.style);*/

//or by using CSS variables
/*const $card=document.querySelector(".card");
console.log($card)
console.log($card.className)//imprime nombre de la clase con sus variables
console.log($card.classList)//imprime un token list de la clase con sus vars

console.log($card.classList.contains("Sepia"))//returns a bolean of properties
$card.classList.add("Sepia")//-add adds to the CSS var to the properties
$card.classList.add("rotate")
console.log($card.classList.contains("Sepia"))
console.log($card.classList)
$card.classList.remove("rotate")//deletes a property from the Token list
$card.classList.toggle("rotate-135")//first toggle to add
console.log($card.classList.contains("rotate-135"))
$card.classList.toggle("rotate-135")//second toggle to remove
$card.classList.add("rotate")   
$card.classList.replace("rotate","rotate-135")
console.log($card.className)*/


//--------------------------------HTML DOOM

const $changeContent=document.getElementById("change")

let text= "sfas";

$changeContent.textContent=text;
//------------------DOM transversing

/* manupulating nodes taking a selector as a reference
const $pictures=document.querySelector(".imgs");

console.log($pictures)
console.log($pictures.children)
console.log($pictures.children[2])
console.log($pictures.parentElement)
console.log($pictures.lastElementChild)
console.log($pictures.firstElementChild)
console.log($pictures.previousElementSibling)
console.log($pictures.nextElementSibling)
//the method alwats look up for the requested etiquete
console.log($pictures.closest("div"))
console.log($pictures.children[1].closest("section"))*/

//--Controling and ading new elements from the DOM in the html
/*
$add=document.querySelector(".imgs") //We have to selects the main Node
$newImage=document.createElement("img") //Creating an element we want to add

$newImage.setAttribute("width","100") //atributes to the etiquete
$newImage.setAttribute("src","./Images/dogs.jpg")   //more atributes
$newImage.classList.add("card") //adding styles (none in this case)
$add.appendChild($newImage) //adding the element to the main Node*/

//With the forEach function we hit the DOM as many times as it loops
//that's why we need to use fragments nodes to make just one insertion

let meses=["Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero","Enero"]

$ulFinal=document.createElement("ul");
$fragment=document.createDocumentFragment();
meses.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $fragment.appendChild($li)
})
document.write("<h3>MOTHS...OR LIKELY</h3>");
$ulFinal.appendChild($fragment);
document.body.appendChild($ulFinal)








