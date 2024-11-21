
from random import randint

def geraSenha(total, includeLower, includeUpper, includeNumber, includeSimb):
    
    charLower = "abcdefghijlkmnopqrstuvxz"
    charUpper = "ABCDEFGHIJKLMNOPRSTUVWXZ"
    charNumber = "0123456789"
    charSimb = "!#$%&*()+?:><|/;"
    
    password = ''
    caracteres = ""
    
    if includeLower:
        caracteres += charLower
        
    if includeUpper:
      caracteres += charUpper  
            
    if includeNumber:
      caracteres += charNumber
      
    if includeSimb:
        caracteres += charSimb
        # print(len(caracteres))    
    
    # print(caracteres)
    # print(type(total),  total)
    
    for x in range(0, int(total)):
        char = randint(0, len(caracteres)-1)
        # print(char)
        password += caracteres[char]  
        # print(f'{caracteres[char]} =  {char}')    
    
    # print(f"{password} = {len(password)}")
    if len(password) < 1:
      return "Você precisa escolher as opções: lower case, upper case e/ou numeros "
    else: 
      return password
    
# total = "20"
# includeLower = True
# includeUpper = False
# includeNumber = True
# includeSimb =  True

# geraSenha(total, includeLower, includeUpper, includeNumber, includeSimb)