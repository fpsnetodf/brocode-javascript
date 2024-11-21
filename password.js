// RANDOM PASSWORD GENETATOR


function gerarSenha(passwordLenght, inclcudeLowerCase, includeUpperCase, includeNumber, includeSimb){

    
    const LowerChar = "abcdefghijklmnopqrstuvxz"
    const UpperChar = "ABCDEFGHIJKLMNOPQRSTUVXZ"
    const Num = "0123456789"
    const Simb = '"!@#$%&*()_.,:;?/\|'

    let allowedChars = ""
    let password = ""

    allowedChars += inclcudeLowerCase ? LowerChar : ""
    allowedChars += includeSimb ? Simb : ""
    allowedChars += includeUpperCase ? UpperChar : ""
    allowedChars += includeNumber ? Num : ""
    

    for(let i = 0; i < passwordLenght; i ++){
        let char = Math.floor(Math.random() * allowedChars.length )
        if(char == 24 ){
            char -=1 
        }
        // Mostra o caracter e o numero sorteado aleatoriamente
        // console.log(allowedChars[char], " = " , char)
        if(allowedChars[char] !== undefined){
            password += allowedChars[char] 
            
        }
    }

    return password
}

const passwordLenght = 10
const inclcudeLowerCase = true
const includeUpperCase = true
const includeNumber = true
const includeSimb = true




const password = gerarSenha(
                            passwordLenght, 
                            inclcudeLowerCase,
                            includeUpperCase, 
                            includeNumber,
                            includeSimb
                        )

console.log(`Senha gerada foi: ${password}  :(${password.length})`)