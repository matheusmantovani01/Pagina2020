//const { error } = require("console")
/*
let Acumulada
let Relativa 
let QualiNo 
let QualiOr 
let QuantDis 
let QuantCon 
*/

const QualNominal =  document.getElementById("QualNominal") //Qualitativa Nominal
const QualOrdinal   =  document.getElementById("QualOrdinal")  //Qualitativa Ordinal
const QtDiscreta  =  document.getElementById("QtDiscretal")//Quantitativa Discreta
const QtContinua  =  document.getElementById("QtContinua")//Quantitativa Continua 
const Relativa    =  document.getElementById("Relativa")//Relativa
const Acumulada   =  document.getElementById("Acumulada")//Acumulada
const Amostra     =  document.getElementById("Amostra ")//Amostra
const Popula  =  document.getElementById("Popula")//Popula

let caso = 0
let it
let contador = 0
let guardar
let guardar2
let passou = false
let I = []
let G = []
let soma
let Frs = []
let Fas = []
let Fr = []
let Fa = []
let criaitem = document.createElement('th')


QualiNo = true
QualiOr = false
QuantDis = false


///let Vet = ["Grau de Escolaridade", "Ensino Superior", "Ensino Médio", "Ensino Fundamental", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "Ensino Superior", "Ensino Superior" , "Ensino Médio", "Ensino Médio", "Ensino Médio", "muito bom", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "pessimo", "Ensino Fundamental", "Ensino Médio","Ensino Médio", "Ensino Médio"]

let Vet = ["111", "90", "121", "105", "122", "61", "128", "112", "128", "93", "108", "138", "88", "110", "112", "112", "97", "128", "102", "125", "87", "119", "104", "116", "96", "114", "107", "113", "80", "113", "123", "95", "115", "70", "115", "101", "114", "127", "92", "103", "78", "118"]

let Obj = {
    Titulo: "",
    Itens:{

    }
}
let Objeto = () =>{
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
        console.log(Obj)
    }
} 


let Calcular = () =>{
    console.log(QualNominal)
    console.log(QualOrdinal)
    console.log(QtDiscreta)
    console.log(QtContinua)
    console.log(Relativa)
    console.log(Acumulada)
    console.log(Amostra)
    console.log(Popula)
    
    

    const tabela = document.querySelector('tr')

    if (false){
        Objeto()
        for(Atual in Obj.Itens){
            criaitem.innerHTML +=  Atual + " Tendo: "+ Obj.Itens[Atual] + '<br/>'
        }

        contador = 0
        for(Atual in Obj.Itens){
            I[contador] = Obj.Itens[Atual]
            G[contador] = Atual
            contador ++
        } 
        console.log(I)
        console.log(G)

        soma = Vet.length
        console.log(soma)
        contador = 0
        
            for(item of I){
                Fr[contador] = (item / soma) * 100
                Frs[contador] = item
                if (contador == 0){
                    Fa[contador] = (item / soma) * 100
                    Fas[contador] = item 
                }else{
                    Fa[contador] = (item / soma) * 100 + Fa[contador - 1] 
                    Fas[contador] = item + Fas[contador - 1] 
                }
                contador ++
            }

    }else if (false) {
        Objeto()
        // Devido a falta do banco de dados disponível, o metodo utilizado será sempre o anterior, como se ocorresse um erro
        // O codigo que iria ser utilizado para uma tentativa de subistituição está disponicel no arquvivo "utilizar depois ou removidos"

        criaitem.innerHTML += "Tipo da pesquisa: " + "Qualitativa Ordinal" + '<br/>'
        criaitem.innerHTML += "Título da pesquisa: " + Obj.Titulo + '<br/>' + '<br/>'

        switch (caso){
            case 1:
            case 2:
            case 0:
                alert("Esse tipo não pode ser utilizado com as informações passadas, Utilizaremos o Metodo Qualitativo Nomimal...")
                criaitem.innerHTML +=  "Novo tipo da pesquisa:" + " Sendo agora qualitativa nominal: " + '<br/>'
                for(Atual in Obj.Itens){
                    criaitem.innerHTML +=  Atual + " Tendo: "+ Obj.Itens[Atual] + '<br/>'
                }
        }

    }else if (false) {
        Objeto()
        contador = 0
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
            contador ++
        }
        console.log(I)
        console.log(G)

        
        soma = Vet.length
        console.log(soma)
        contador = 0
            for(item of I){
                Fr[contador] = (item / soma) * 100
                Frs[contador] = item
                if (contador == 0){
                    Fa[contador] = (item / soma) * 100
                    Fas[contador] = item 
                }else{
                    Fa[contador] = (item / soma) * 100 + Fa[contador - 1] 
                    Fas[contador] = item + Fas[contador - 1] 
                }
                contador ++
            }
        criaitem.innerHTML += "Tipo da pesquisa: " + "Quantitativa Discreta" + '<br/>'
        criaitem.innerHTML += "Título da pesquisa: " + Obj.Titulo + '<br/>' + '<br/>'

        for(var Atual = 0; Atual < I.length; Atual++){
            if (Relativa){
                criaitem.innerHTML +=  G[Atual] + " Tendo: "+ I[Atual] + " Frquência Relativa: "+ F[Atual] + '<br/>'
            }else{
                criaitem.innerHTML +=  G[Atual] + " Tendo: "+ I[Atual] + " Frquência Acumulada: "+ F[Atual] + '<br/>'
            }
        }

    }else {

            for (let prop in Vet) {
                Vet[prop] = parseFloat(Vet[prop])
            }

        Vet.sort(function(a, b) {
        return a - b;
        });

        let At = Vet[Vet.length - 1] - Vet[0] + 1
        let clasess = parseInt(Math.sqrt(Vet.length))
        let intervalo

        while(passou == false){
            if(At % (clasess - 1) == 0){
                passou = true
                intervalo =  At / clasess - 1
            }else if (At % clasess == 0){
                passou = true
                intervalo =  At / clasess                
            }else if(At % (clasess + 1) == 0){
                passou = true
                intervalo =  At / clasess + 1
            }else{
                At ++
            }
        }

        console.log(Vet)
        console.log(At)
        console.log(clasess)
        console.log(intervalo)
        let nome
        guardar = Vet[0]
        let soma = 0
        for(Add in Vet){

           if(Vet[Add] < guardar + 13){
                nome = String(guardar + "|---" + (guardar + 13))
                if (guardar == Vet[Add]){
                    Obj.Itens[nome] = 1
                }else{
                    Obj.Itens[nome] ++
                }
                
           }else {
               guardar = Vet[Add]
               nome = String(guardar + "|---" + (guardar + 13))
               Obj.Itens[nome] = 1
           }
        }
        console.log(Obj)

        contador = 0
        for(Atual in Obj.Itens){
            I[contador] = Obj.Itens[Atual]
            G[contador] = Atual
            contador ++
        }
        console.log(I)
        console.log(G)

    
        soma = Vet.length
        console.log(soma)
        contador = 0
            for(item of I){
                Fr[contador] = (item / soma) * 100
                Frs[contador] = item
                if (contador == 0){
                    Fa[contador] = (item / soma) * 100
                    Fas[contador] = item 
                }else{
                    Fa[contador] = (item / soma) * 100 + Fa[contador - 1] 
                    Fas[contador] = item + Fas[contador - 1] 
                }
                contador ++
            }

        criaitem.innerHTML += "Tipo da pesquisa: " + "Quantitativa Discreta"
        tabela.createElement = criaitem
        criaitem.innerHTML += "Título da pesquisa: " + Obj.Titulo
        tabela.createElement = criaitem

        for(var Atual = 0; Atual < I.length; Atual++){
            tabela.appendChild=  G[Atual] + " Tendo: "+ I[Atual] + " Frquência Relativa: "+ Fr[Atual] + " Frquência Acumulada: "+ Fa[Atual] +  " Frquência Relativa Simples: "+ Frs[Atual] + "/" + soma + " Frquência Acumulada Simples: "+ Fas[Atual] + "/" + soma  + '<br/>' +'<br/>'
                
        }
        console.log(Fr)
        console.log(Fa)
        console.log(Frs)
        console.log(Fas)
    }

    
}
