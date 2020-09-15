/*const readline = require('read)
c'onst fs = require('fs');
const redable = fs.createReadStream('Dados_Apresentacao_Programa_teste')

const rl = readline.crateInterface({
   input: redable
  , ut: process.stdout
})
;
*/

//let vetP = string1.split(',')

let QualiNo 
let QualiOr 
let QuantDis 
let QuantCon 
let caso = 0
let it
let contador = 0
let guardar
let guardar2
let passou = false
let I = []
let G = []
let criadiv = document.createElement('div')


QualiNo = false
QualiOr = false
QuantDis = false

//let Vet = ["Grau de Escolaridade", "Ensino Superior", "Ensino Médio", "Ensino Fundamental", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "Ensino Superior", "Ensino Superior" , "Ensino Médio", "Ensino Médio", "Ensino Médio", "muito bom", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "pessimo", "Ensino Fundamental", "Ensino Médio","Ensino Médio", "Ensino Médio"]

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
    

    const secao = document.querySelector('section')

    if (QualiNo){
        Objeto()
        for(Atual in Obj.Itens){
            criadiv.innerHTML +=  Atual + " Tendo: "+ Obj.Itens[Atual] + '<br/>'
        }


    }else if (QualiOr) {
        Objeto()
        // Devido a falta do banco de dados disponível, o metodo utilizado será sempre o anterior, como se ocorresse um erro
        // O codigo que iria ser utilizado para uma tentativa de subistituição está disponicel no arquvivo "utilizar depois ou removidos"

        criadiv.innerHTML += "Tipo da pesquisa: " + "Qualitativa Ordinal" + '<br/>'
        criadiv.innerHTML += "Título da pesquisa: " + Obj.Titulo + '<br/>' + '<br/>'

        switch (caso){
            case 1:
            case 2:
            case 0:
                alert("Esse tipo não pode ser utilizado com as informações passadas, Utilizaremos o Metodo Qualitativo Nomimal...")
                criadiv.innerHTML +=  "Novo tipo da pesquisa:" + " Sendo agora qualitativa nominal: " + '<br/>'
                for(Atual in Obj.Itens){
                    criadiv.innerHTML +=  Atual + " Tendo: "+ Obj.Itens[Atual] + '<br/>'
                }
        }

    }else if (QuantDis) {
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

        criadiv.innerHTML += "Tipo da pesquisa: " + "Quantitativa Discreta" + '<br/>'
        criadiv.innerHTML += "Título da pesquisa: " + Obj.Titulo + '<br/>' + '<br/>'
        for(var Atual = 0; Atual < I.length; Atual++){
            criadiv.innerHTML +=  G[Atual] + " Tendo: "+ I[Atual] + '<br/>'
        }

    }else {
        for (let prop in Vet) {
            Vet[prop] = parseFloat(Vet[prop])
        }

        Vet.sort(function(a, b) {
        return a - b;
        });

        console.log(Vet)
    }

    secao.appendChild(criadiv)
}
