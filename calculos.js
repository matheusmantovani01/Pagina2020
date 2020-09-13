let QualiNo 
let QualiOr 
let QuantDis 
let QuantCon 
let caso
let M = [false, false, false, false, false, false, false, false, false, false, false, false]
let V = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

QualiNo = false
QualiOr = true

let Vet = ["Grau de Escolaridade", "Ensino Superior", "Ensino Médio", "Ensino Fundamental", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "Ensino Superior", "Ensino Superior" , "Ensino Médio", "Ensino Médio", "Ensino Médio", "muito bom", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "pessimo", "Ensino Fundamental", "Ensino Médio","Ensino Médio", "Ensino Médio", "Ensino Fundamental"]

let Obj = {
    Titulo: "",
    Itens:{

    }
}
let Calcular = () =>{
    for(Verifica in Vet){
        if (Verifica == 0){
             Obj.Titulo = Vet[Verifica]
        } else{
            if(Obj.Itens.hasOwnProperty([Vet[Verifica]])){
                Obj.Itens[Vet[Verifica]]++
            }else{
                Obj.Itens[Vet[Verifica]] = 1
                
            }
        }
    } 

    console.log(Obj)

    const secao = document.querySelector('section')

    if (QualiNo){
        let criadiv = document.createElement('div')
        criadiv.innerHTML += "Título da pesquisa: " + Obj.Titulo + '<br/>' + '<br/>'

        for(Atual in Obj.Itens){
            criadiv.innerHTML +=  Atual + " Tendo: "+ Obj.Itens[Atual] + '<br/>'
        }
        secao.appendChild(criadiv)

    }else if (QualiOr) {
        for(Atual in Obj.Itens){
            Atual.toUpperCase
            if (Atual == ("Janeiro" || "Fevereiro" || "Março" || "Abril" || "Maio" || "Junho" || "Julho" || "Agosto" || "Setembro" || "Outubro" || "Novembro" || "Dezembro").toUpperCase()){
                caso = 1
                break
            }else if(Atual.indexOf("DOUTORADO" || "MESTRADO" || "PÓS GRADUAÇÃO" || "PÓS-GRADUAÇÃO" || "POS GRADUAÇÃO" || "POS-GRADUAÇÃO" || "MUITO-ALTO" || "MUITO ALTO" || "ALTO" || "SUPERIOR" || "MUITO BOM" || "MUITO-BOM" || "BOM" || "INTERMEDIÁRIO" || "INTERMEDIARIO" || "MEDIO"  || "MEDIANO"  || "RAZOAVEL"  || "FUNDAMENTAL" || "RUIM" || "MUITO-RUIM" || "MUITO RUIM" || "INFANTIL" || "PESSIMO"  || "PÉSSIMO" || "DETESTÁVEL"  || "DETESTAVEL")) {
                caso = 2
            }else{
                caso = 0
            }
        }
        switch (caso){
            case 1:
                 for(Atual in Obj.Itens){
                    Atual.toUpperCase()
                    switch (Atual){
                        case "JANEIRO":
                            M[0] = "JANEIRO"

                        case "FEVEREIRO":
                            M[1] = "FEVEREIRO"

                        case "MARÇO":
                            M[2] = "MARÇO"

                        case "ABRIL":
                            M[3] = "ABRIL"

                        case "MAIO":
                            M[4] = "MAIO"

                        case "JUNHO":
                            M[5] = "JUNHO"

                        case "JULHO":
                            M[6] = "JULHO"

                        case "AGOSTO":
                            M[7] =  "AGOSTO"

                        case "SETEMBRO":
                            M[8] = "SETEMBRO"

                        case "OUTUBRO":
                            M[9] = "OUTUBRO"

                        case "NOVEMBRO":
                            M[10] = "NOVEMBRO"

                        case "DEZEMBRO":
                            M[11] = "DEZEMBRO"

                    }   
                 }
            case 2:
                for(Atual in Obj.Itens){
                    String(Atual).toUpperCase()
                        if(Atual.indexOf("DOUTORADO")){
                            V[0] = "DOUTORADO"
                        }
                        if(Atual.indexOf("MESTRADO")){
                            V[1] = "MESTRADO"
                        }
                        if(Atual.indexOf("PÓS GRADUAÇÃO" || "PÓS-GRADUAÇÃO" || "POS GRADUAÇÃO" || "POS-GRADUAÇÃO")){
                            V[2] = "PÓS GRADUAÇÃO"
                        }
                        if(Atual.indexOf("MUITO-ALTO" || "MUITO ALTO")){
                            V[3] = "MUITO ALTO"
                        }
                        if(Atual.indexOf("ALTO")){
                            V[4] = "ALTO"
                        }
                        if(Atual.indexOf("SUPERIOR")){
                            V[5] = "SUPERIOR"
                        }
                        if(Atual.indexOf("MUITO BOM" || "MUITO-BOM")){
                            V[6] = "MUITO BOM"
                        }
                        if(Atual.indexOf("BOM")){
                            V[7] = "BOM"
                        }
                        if(Atual.indexOf("INTERMEDIÁRIO" || "INTERMEDIARIO" || "MEDIO"  || "MEDIANO")){
                            V[8] = "MEDIO"
                        }
                        if(Atual.indexOf("RAZOAVEL")){
                            V[9] = "RAZOAVEL"
                        }
                        if(Atual.indexOf("FUNDAMENTAL")){
                            V[10] = "FUNDAMENTAL"
                        }
                        if(Atual.indexOf("DOUTORADO")){
                            V[11] = "DOUTORADO"
                        }
                        if(Atual.indexOf("DOUTORADO")){
                            V[12] = "DOUTORADO"
                        }
                        if(Atual.indexOf("DOUTORADO")){
                            V[13] = "DOUTORADO"
                        }
                        if(Atual.indexOf("DOUTORADO")){
                            V[14] = "DOUTORADO"
                        }
                        if(Atual.indexOf("DOUTORADO")){
                            V[15] = "DOUTORADO"
                        }
                        
                }   
            
            case 0:

        }

    }else if (QuantDis) {
        
    }else {
      
    }
}
