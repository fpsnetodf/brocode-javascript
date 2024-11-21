from django.shortcuts import render
from password import geraSenha

# Create your views here.



def GeraSenha(request):
    if request.method == "POST":
        total = request.POST.get("lenSenha")
        includeLower =  True if request.POST.get("lowercase") == "on" else False 
        includeUpper = True if request.POST.get("uppercase") == "on" else False
        includeNumber = True if request.POST.get("number") == "on" else False
        includeSimb =  True if request.POST.get("simb") == "on" else False
        if total == '' or int(total) < 6 :
            password = "Você precisa informar um número maior ou igual a 6"
        elif (includeLower !=True and includeUpper != True and includeNumber != True and includeSimb !=True):
            password = "Você precisa selecionar algum caractere: minúsculo, maiúsculo, números ou símbolos."
            return render(request, "geraSenha/geraSenha.html", {"total": total, "password": password, "includeUpper": includeUpper, "includeLower": includeLower })            
        else:
            password = geraSenha(total, includeLower, includeUpper, includeNumber, includeSimb)
        return render(request, "geraSenha/geraSenha.html", {"total": total, "password": password, "includeUpper": includeUpper, "includeLower": includeLower })
    else:        
        return render(request, "geraSenha/geraSenha.html" )