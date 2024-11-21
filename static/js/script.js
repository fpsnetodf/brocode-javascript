let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let number = document.querySelector('#number');
let simb = document.querySelector('#simb');
let imgs = document.querySelectorAll('img')
const img = document.createElement("img")
const buttons = document.querySelectorAll('input[type="checkbox"]');
console.log(buttons)
buttons.forEach((button, i) =>{
    // console.log(buttons[i].getAttribute("src"))

    button.addEventListener("click", (e)=>{       
        console.log(`o botao de id ${e.target.id} foi clicado`)        
        if (e.target.checked){
            
            imgs[i].setAttribute("src", "static/img/check.png")
            button.setAttribute("hidden", true)
            // console.log("está checado", e)
        }else{ 
            
            imgs[i].setAttribute("src", "static/img/close.png")
                       
            // console.log("não está checado!!", e)
        }
    })
})
