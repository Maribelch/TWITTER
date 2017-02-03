/*drawTasksList = lista--var listaTareas=[["tarea",true],["t2",false]];*/

var listaTareas = [
   {nombre:"tarea",isDone:true},
    {nombre:"t2",isDone:false}
];

function drawTasksList()
{
    var lista=document.getElementById("lista");
    
    for(var i in listaTareas){
        /*var html="<li>"+listaTareas[i]+"</li>";*/
        var html ="<li><input type='checkbox' " + 
            (listaTareas[i].isDone?"checked":"") +
            ">" + listaTareas[i].nombre+"</li>";
        lista.innerHTML+=html;
    }
}
function agregar()
{
    var texto=document.getElementById("palabra");
    if(texto == ""){
        alert("debes ingresar tarea");
    }
    else
        crear(lista , texto.value);
    
    texto.value="";
    texto.focus();
}

function crear(lista , texto){
    var div=document.createElement("div");
    var check=document.createElement("input");
    check.type="checkbox";
    var span = document.createElement("span");
    var icono = document.createElement("i");
   icono.className = "glyphicon  glyphicon-trash , pull-right , ico";
    span.innerText=texto;
    div.appendChild(check);
    div.className="div "
    div.appendChild(span);
    div.appendChild(icono);
    lista.appendChild(div);
    

var close = document.getElementsByClassName("ico");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
 
    
check.addEventListener('click', function(ev) {
  if (ev.target.checked) {
    ev.target.parentNode.className='checked';
  }
}, false);

}








































