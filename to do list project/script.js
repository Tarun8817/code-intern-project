let inputs =document.getElementById("inp");
let text =document.querySelector(".text");

function add(){
    if(inputs.value==""){
        alert("please enter task")
    }else 
    {
    let newEle =document.createElement("ul");
    newEle.innerHTML=`${inputs.value} `;
    text.appendChild(newEle);
    inputs.value=""; 
    newEle.querySelector("i").addEventListener("click", remove);
    function remove(){
        newEle.remove()
    }
    }
}