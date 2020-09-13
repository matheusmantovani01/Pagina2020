let QualiNo 
let QualiOr 
let QuantDis 
let QuantCon 
let caso = 0
let it
let M = [false, false, false, false, false, false, false, false, false, false, false, false]
let V = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let I = []
let G = []
let criadiv = document.createElement('div')


QualiNo = false
QualiOr = false
QuantDis = true

let Vet = ["Grau de Escolaridade", "Ensino Superior", "Ensino Médio", "Ensino Fundamental", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "Ensino Superior", "Ensino Superior" , "Ensino Médio", "Ensino Médio", "Ensino Médio", "muito bom", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "pessimo", "Ensino Fundamental", "Ensino Médio","Ensino Médio", "Ensino Médio"]

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

        for(Atual in Obj.Itens){
            criadiv.innerHTML +=  Atual + " Tendo: "+ Obj.Itens[Atual] + '<br/>'
        }


    }else if (QualiOr) {
        for(Atual in Obj.Itens){
            String(Atual)
            Atual.toUpperCase()
            console.log(Atual.toUpperCase())
            if (Atual.toUpperCase() == ("Janeiro" || "Fevereiro" || "Março" || "Abril" || "Maio" || "Junho" || "Julho" || "Agosto" || "Setembro" || "Outubro" || "Novembro" || "Dezembro").toUpperCase()){
                caso = 1
                break
            }else if(Atual.indexOf("DOUTORADO" || "MESTRADO" || "PÓS GRADUAÇÃO" || "PÓS-GRADUAÇÃO" || "POS GRADUAÇÃO" || "POS-GRADUAÇÃO" || "MUITO-ALTO" || "MUITO ALTO" || "ALTO" || "SUPERIOR" || "MUITO BOM" || "MUITO-BOM" || "BOM" || "INTERMEDIÁRIO" || "INTERMEDIARIO" || "MEDIO"  || "MEDIANO"  || "RAZOAVEL"  || "FUNDAMENTAL" || "RUIM" || "MUITO-RUIM" || "MUITO RUIM" || "INFANTIL" || "PESSIMO"  || "PÉSSIMO" || "DETESTÁVEL"  || "DETESTAVEL" || "HORRIVEL" || "HORRÍVEL").toUpperCase()) {
                caso = 2
                break
            }
        }
        criadiv.innerHTML += "Tipo da pesquisa: " + "Qualitativa Ordinal" + '<br/>'
        criadiv.innerHTML += "Título da pesquisa: " + Obj.Titulo + '<br/>' + '<br/>'
        switch (caso){
            case 1:
                /* for(Atual in Obj.Itens){
                    Atual.toUpperCase()
                    switch (Atual){
                        case "JANEIRO":
                            M[0] = Obj.Itens.Atual

                        case "FEVEREIRO":
                            M[1] = Obj.Itens.Atual

                        case "MARÇO":
                            M[2] = Obj.Itens.Atual

                        case "ABRIL":
                            M[3] = Obj.Itens.Atual

                        case "MAIO":
                            M[4] = Obj.Itens.Atual

                        case "JUNHO":
                            M[5] = Obj.Itens.Atual

                        case "JULHO":
                            M[6] = Obj.Itens.Atual

                        case "AGOSTO":
                            M[7] =  Obj.Itens.Atual

                        case "SETEMBRO":
                            M[8] = Obj.Itens.Atual

                        case "OUTUBRO":
                            M[9] = Obj.Itens.Atual

                        case "NOVEMBRO":
                            M[10] = Obj.Itens.Atual

                        case "DEZEMBRO":
                            M[11] = Obj.Itens.Atual

                    }
                 }
                    if (M[0]){
                        criadiv.innerHTML += "" + " = " + M[0]
                    }
                    if (M[1]){
                        criadiv.innerHTML += "" + " = " + M[1]
                    }
                    if (M[2]){
                        criadiv.innerHTML += "" + " = " + M[2]
                    }
                    if (M[3]){
                        criadiv.innerHTML += "" + " = " + M[3]
                    }
                    if (M[4]){
                        criadiv.innerHTML += "" + " = " + M[4]
                    }
                    if (M[5]){
                        criadiv.innerHTML += "" + " = " + M[5]
                    }
                    if (M[6]){
                        criadiv.innerHTML += "" + " = " + M[6]
                    }
                    if (M[7]){
                        criadiv.innerHTML += "" + " = " + M[7]
                    }
                    if (M[8]){
                        criadiv.innerHTML += "" + " = " + M[8]
                    }
                    if (M[9]){
                        criadiv.innerHTML += "" + " = " + M[9]
                    }
                    if (M[10]){
                        criadiv.innerHTML += "" + " = " + M[10]
                    }
                    if (M[11]){
                        criadiv.innerHTML += "" + " = " + M[11]
                    }   */

            case 2:
               /* for(Atual in Obj.Itens){
                    it = Atual
                    String(Atual).toUpperCase()
                        if(Atual.indexOf("DOUTORADO")){
                            V[0] = Obj.Itens.it
                        }
                        if(Atual.indexOf("MESTRADO")){
                            V[1] = Obj.Itens.it
                        }
                        if(Atual.indexOf("PÓS GRADUAÇÃO" || "PÓS-GRADUAÇÃO" || "POS GRADUAÇÃO" || "POS-GRADUAÇÃO")){
                            V[2] = Obj.Itens.it
                        }
                        if(Atual.indexOf("MUITO-ALTO" || "MUITO ALTO")){
                            V[3] = Obj.Itens.it
                        }
                        if(Atual.indexOf("ALTO")){
                            V[4] = Obj.Itens.it
                        }
                        if(Atual.indexOf("SUPERIOR")){
                            V[5] = Obj.Itens.it
                        }
                        if(Atual.indexOf("MUITO BOM" || "MUITO-BOM")){
                            V[6] = Obj.Itens.it
                        }
                        if(Atual.indexOf("BOM")){
                            V[7] = Obj.Itens.it
                        }
                        if(Atual.indexOf("INTERMEDIÁRIO" || "INTERMEDIARIO" || "MEDIO"  || "MEDIANO")){
                            V[8] = Obj.Itens.it
                        }
                        if(Atual.indexOf("RAZOAVEL")){
                            V[9] = Obj.Itens.it
                        }
                        if(Atual.indexOf("FUNDAMENTAL")){
                            V[10] = Obj.Itens.it
                        }
                        if(Atual.indexOf("RUIM")){
                            V[11] = Obj.Itens.it
                        }
                        if(Atual.indexOf("MUITO-RUIM" || "MUITO RUIM")){
                            V[12] = Obj.Itens.it
                        }
                        if(Atual.indexOf("INFANTIL")){
                            V[13] = Obj.Itens.it
                        }
                        if(Atual.indexOf("PESSIMO"  || "PÉSSIMO")){
                            V[14] = Obj.Itens.it
                        }
                        if(Atual.indexOf("DETESTÁVEL"  || "DETESTAVEL" || "HORRIVEL" || "HORRÍVEL")){
                            V[15] = Obj.Itens.it
                        }
                    }
                    if (V[0]){
                        criadiv.innerHTML += "DOUTORADO" + " = " + V[0]
                    }
                    if (V[1]){
                        criadiv.innerHTML += "MESTRADO" + " = " + V[1]
                    }
                    if (V[2]){
                        criadiv.innerHTML += "PÓS GRADUAÇÃO" + " = " + V[2]
                    }
                    if (V[3]){
                        criadiv.innerHTML += "MUITO ALTO" + " = " + V[3]
                    }
                    if (V[4]){
                        criadiv.innerHTML += "ALTO" + " = " + V[4]
                    }
                    if (V[5]){
                        criadiv.innerHTML += "SUPERIOR" + " = " + V[5]
                    }
                    if (V[6]){
                        criadiv.innerHTML += "MUITO BOM" + " = " + V[6]
                    }
                    if (V[7]){
                        criadiv.innerHTML += "BOM" + " = " + V[7]
                    }
                    if (V[8]){
                        criadiv.innerHTML += "MEDIO" + " = " + V[8]
                    }
                    if (V[9]){
                        criadiv.innerHTML += "RAZOAVEL" + " = " + V[9]
                    }
                    if (V[10]){
                        criadiv.innerHTML += "FUNDAMENTAL" + " = " + V[10]
                    }
                    if (V[11]){
                        criadiv.innerHTML += "RUIM" + " = " + V[11]
                    }
                    if (V[12]){
                        criadiv.innerHTML += "MUITO RUIM" + " = " + V[12]
                    }  
                    if (V[13]){
                        criadiv.innerHTML += "INFANTIL" + " = " + V[13]
                    }  
                    if (V[14]){
                        criadiv.innerHTML += "PÉSSIMO" + " = " + V[14]
                    }  
                    if (V[15]){
                        criadiv.innerHTML += "DETESTÁVEL" + " = " + V[15]
                    }     */
                
            case 0:
                alert("Esse tipo não pode ser utilizado com as informações passadas, Utilizaremos o Metodo Qualitativo Nomimal...")
                criadiv.innerHTML +=  "Novo tipo da pesquisa:" + " Sendo agora qualitativa nominal: " + '<br/>'
                for(Atual in Obj.Itens){
                    criadiv.innerHTML +=  Atual + " Tendo: "+ Obj.Itens[Atual] + '<br/>'
                }
        
        }

    }else if (QuantDis) {

        let contador = 0
        let guardar
        let guardar2

        for(Atual in Obj.Itens){
            if (contador == 0) {
                I[contador] = Obj.Itens[Atual]
                G[contador] = Atual
            }else{
                if (Obj.Itens[Atual] > I[contador - 1]){
                    guardar = I[contador - 1]
                    guardar2 = G[contador - 1]
                    I[contador - 1] = Obj.Itens[Atual]
                    G[contador - 1] = Atual
                    I[contador] = guardar
                    G[contador] = guardar2
                }else{
                    I[contador] = Obj.Itens[Atual]
                    G[contador] = Atual
                }
            }
            console.log(typeof(Obj.Itens[Atual]))
            contador ++
        }
        console.log(I)
        console.log(G)

        criadiv.innerHTML += "Tipo da pesquisa: " + "Quantitativa Discreta" + '<br/>'
        criadiv.innerHTML += "Título da pesquisa: " + Obj.Titulo + '<br/>' + '<br/>'
        for(var Atual = 0; Atual < I.length; Atual++){
            criadiv.innerHTML +=  G[Atual] + " Tendo: "+ I[Atual] + '<br/>'
        }
        
    }else {
      
    }
    secao.appendChild(criadiv)
}
