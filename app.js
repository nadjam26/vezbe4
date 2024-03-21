let listaDestinacija = document.getElementById("lista-destinacija");
console.log(listaDestinacija);

let naslov = document.getElementsByClassName("title");
console.log(naslov);

let element = document.getElementsByTagName("li");
console.log(element);

let wrap = document.querySelector("#wrapper");
console.log(wrap);

let destinacije = document.querySelectorAll(".naziv");
console.log(destinacije);

console.log("Parent node liste destinacije:",listaDestinacija.parentNode);

console.log("Child node su:",listaDestinacija.childNodes);
//childNodes vraca nam sve elemente
//children vraca smao tagove HTML elemente

console.log("listaDestinacija nextSibling je:", listaDestinacija.nextElementSibling);
console.log("listaDestinacija nextSibling je:", listaDestinacija.previousElementSibling);

let baner = document.querySelector("#page-banner");
console.log("Node name je:",baner.nodeName);
console.log("Node name je:",baner.nodeType);
console.log("Node name je:",baner.nodeValue);

let destinacija1 = document.querySelector(".naziv");
//destinacija1.textContent = "Grad svetlosti";
destinacija1.innerHTML = "<b> Grad </b> svetlosti";

let dugmici = document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from(dugmici).forEach(function (dugme){
    dugme.addEventListener("click",function (e){
        const li=e.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    })
})

let forme = document.forms;
console.log(forme);

let forma1=document.forms["dodaj-destinaciju"];
console.log(forma1);

forma1.addEventListener("submit",function (e){
    e.preventDefault();
    let vrednost=document.forms["dodaj-destinaciju"]["polje"].value;
    console.log(vrednost);
})