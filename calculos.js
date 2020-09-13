let QualiNo 
let QualiOr 
let QuantDis 
let QuantCon 
let caso

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
    }else if (QuantDis) {
        
    }else {
      
    }
}
