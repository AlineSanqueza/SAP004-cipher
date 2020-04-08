
//import cipher from './cipher.js';
//console.log(cipher);


function encode (){
    event.preventDefault()
    const text = document.getElementById("msg").value
    const offset = document.getElementById("key").value
    if (text == ""){
        alert("Digite uma mensagem")
    }else if (offset == 0){ 
        alert("Deslocamento inválido")
    }else {
     document.getElementById("msg").innerHTML= cipher (text, offset)
    }
    
    }
        document.getElementById("Encode").addEventListener("click", encode)

   
function decode(event){
    event.preventDefault()
    const text = document.getElementById("msg").value
    const offset = document.getElementById("key").value
    if (text == ""){
        alert("Digite a mensagem para ser decifrada")
    }else if (offset == 0)
        alert("Deslocamento inválido")
    }
    document.getElementById("Decode").addEventListener("click", decode)

    /*function encode1(event){
        event.preventDefault()
        const text = document.getElementById("msg").value
        const offset = document.getElementById("key").value
        document.getElementById("msg2").innerHTML = cipher.encode(text, offset)
    }
    document.getElementById("Encode").addEventListener("click", encode1)*/


