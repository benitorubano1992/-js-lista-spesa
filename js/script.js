//verifica collegamento 
console.log("collegato")
const listaSpesa=["verdure","frutta","carne","formaggio"];
const ulList=document.querySelector("ul");
let i=0;
let result="";
while(i<listaSpesa.length){
result+=`<li>${listaSpesa[i]}</li>`;
i++;
}
ulList.innerHTML=result;
console.log(ulList);