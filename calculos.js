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

var tabela = document.querySelector("tbody")

let tipo
let media
let moda
let modas
let mediana
let medianas
let caso = 0
let it
let contador = 0
let guardar
let guardar2
let passou = false
let I = []
let G = []
let M = []
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

let Vet = ["Roi", "111", "90", "121", "105", "122", "61", "128", "112", "128", "93", "108", "138", "88", "110", "112", "112", "97", "128", "102", "125", "87", "119", "104", "116", "96", "114", "107", "113", "80", "113", "123", "95", "115", "70", "115", "101", "114", "127", "92", "103", "78", "118"]

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
        tipo = "pie"

        Objeto()

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

            media = "não tem"
            mediana = parseInt(Vet.length/2)
            medianas = 0
            moda = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            for(moderar in I){
                medianas = medianas + I[moderar]
                if(passou == false){
                    if(medianas >= mediana){
                        mediana = G[moderar]
                        passou = true
                    }
                }
                if(I[moderar] > moda){
                    moda = I[moderar]
                    modas = moderar
                }
            }
            moda = G[modas]
            console.log(media)
            console.log(moda)
            console.log(mediana)
            
            
            

            
    }else if (false) {
        tipo = "pie"
        Objeto()
        // Devido a falta do banco de dados disponível, o metodo utilizado será sempre o anterior, como se ocorresse um erro
        // O codigo que iria ser utilizado para uma tentativa de subistituição está disponicel no arquvivo "utilizar depois ou removidos"

        
                alert("Esse tipo não pode ser utilizado com as informações passadas, Utilizaremos o Metodo Qualitativo Nomimal...")
               

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

            media = "não tem"
            mediana = parseInt(Vet.length/2)
            medianas = 0
            moda = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            for(moderar in I){
                medianas = medianas + I[moderar]
                if(passou == false){
                    if(medianas >= mediana){
                        mediana = G[moderar]
                        passou = true
                    }
                }
                if(I[moderar] > moda){
                    moda = I[moderar]
                    modas = moderar
                }
            }
            moda = G[modas]
            console.log(media)
            console.log(moda)
            console.log(mediana)

    }else if (false) {
        tipo = "bar"
        for (let prop in Vet) {
            Vet[prop] = parseFloat(Vet[prop])
        }
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

            for(mediar of Vet){
                media = media + mediar
            }
            media = media/Vet.length
            mediana = parseInt(Vet.length/2)
            medianas = 0
            moda = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            for(moderar in I){
                medianas = medianas + I[moderar]
                if(passou == false){
                    if(medianas >= mediana){
                        mediana = G[moderar]
                        passou = true
                    }
                }
                if(I[moderar] > moda){
                    moda = I[moderar]
                    modas = moderar
                }
            }
            moda = G[modas]
            console.log(media)
            console.log(moda)
            console.log(mediana)

        

    }else {

        tipo = "bar"

        Obj.Titulo = Vet.shift()

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
        contador = 0
        for(Add in Vet){

           if(Vet[Add] < guardar + intervalo){
                nome = String(guardar + "|---" + (guardar + intervalo))
                if (guardar == Vet[Add]){
                    Obj.Itens[nome] = 1
                }else{
                    Obj.Itens[nome] ++
                }
                M[contador] = (guardar*2 + intervalo) /2
           }else {
               guardar = Vet[Add]
               nome = String(guardar + "|---" + (guardar + intervalo))
               Obj.Itens[nome] = 1
               contador ++
               M[contador] = (guardar*2 + intervalo) /2
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
        
        contador = 0
        media = 0
        for(mediar of M){
            media += (mediar * I[contador])
            contador ++
        }

        passou = false
        media = media/Vet.length
        console.log(media)
        mediana = 0
        contador = 0
        guardar = 0

        for(mediar of I){
            console.log(mediar)
            mediana += mediar
            if(passou == false){
                if(mediana >= (Vet.length / 2)){
                    medianas = mediana - mediar
                    guardar = mediar
                    passou = true
                }
            }
            contador ++
        }
        
        mediana = media +((((Vet.length / 2) - medianas) / guardar)* intervalo)
        console.log(M)
        console.log(mediana)
        

        contador = 0
        guardar = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        for(mediar of I){
            if(mediar > guardar){
                guardar = mediar
                moda = M[contador]
            }
            contador ++
        }
        console.log(moda)


        console.log(Fr)
        console.log(Fa)
        console.log(Frs)
        console.log(Fas)
    }

    var linha = document.createElement('tr');
    var campo_nome = document.createElement('td');
    var campo_Frs = document.createElement('td');
    var campo_Fr = document.createElement('td');
    var campo_Fas = document.createElement('td');
    var campo_Fa = document.createElement('td');

    var texto_nome = document.createTextNode(Obj.Titulo);
    var texto_Frs = document.createTextNode("Frquência Relativa Simples:");
    var texto_Fr = document.createTextNode("Frquência Relativa (%):");
    var texto_Fas = document.createTextNode("Frquência Acumulada Simples:");
    var texto_Fa = document.createTextNode("Frquência Acumulada (%):");

    campo_nome.appendChild(texto_nome);
    campo_Frs.appendChild(texto_Frs);
    campo_Fr.appendChild(texto_Fr);
    campo_Fas.appendChild(texto_Fas);
    campo_Fa.appendChild(texto_Fa);

    linha.appendChild(campo_nome);
    linha.appendChild(campo_Frs);
    linha.appendChild(campo_Fr);
    linha.appendChild(campo_Fas);
    linha.appendChild(campo_Fa);

    linha.className = "tg"

    tabela.appendChild(linha)

    for(var Atual = 0; Atual < I.length; Atual++){
        var linha = document.createElement('tr');
        var campo_nome = document.createElement('td');
        var campo_Frs = document.createElement('td');
        var campo_Fr = document.createElement('td');
        var campo_Fas = document.createElement('td');
        var campo_Fa = document.createElement('td');

        var texto_nome = document.createTextNode(G[Atual]);
        var texto_Frs = document.createTextNode(Frs[Atual]);
        var texto_Fr = document.createTextNode(Fr[Atual]);
        var texto_Fas = document.createTextNode(Fas[Atual]);
        var texto_Fa = document.createTextNode(Fa[Atual]);

        campo_nome.appendChild(texto_nome);
        campo_Frs.appendChild(texto_Frs);
        campo_Fr.appendChild(texto_Fr);
        campo_Fas.appendChild(texto_Fas);
        campo_Fa.appendChild(texto_Fa);

        linha.appendChild(campo_nome);
        linha.appendChild(campo_Frs);
        linha.appendChild(campo_Fr);
        linha.appendChild(campo_Fas);
        linha.appendChild(campo_Fa);

        linha.className = "tg"

        tabela.appendChild(linha)
            
    }
    
    var linha = document.createElement('tr');
    var vazio = document.createElement('td');
    var campo_Moda = document.createElement('td');
    var campo_Media = document.createElement('td');
    var campo_Mediana = document.createElement('td');
    var vazio2 = document.createElement('td');

    var texto_Moda = document.createTextNode("Moda");
    var texto_Media = document.createTextNode("Media");
    var texto_Mediana = document.createTextNode("Mediana");

    campo_Moda.appendChild(texto_Moda);
    campo_Media.appendChild(texto_Media);
    campo_Mediana.appendChild(texto_Mediana);
   
    linha.appendChild(vazio);
    linha.appendChild(campo_Moda);
    linha.appendChild(campo_Media);
    linha.appendChild(campo_Mediana);
    linha.appendChild(vazio2);

    linha.className = "tg"

    tabela.appendChild(linha)

    var linha = document.createElement('tr');
    var vazio = document.createElement('td');
    var campo_Moda = document.createElement('td');
    var campo_Media = document.createElement('td');
    var campo_Mediana = document.createElement('td');
    var vazio2 = document.createElement('td');

    var texto_Moda = document.createTextNode(moda);
    var texto_Media = document.createTextNode(media);
    var texto_Mediana = document.createTextNode(mediana);

    campo_Moda.appendChild(texto_Moda);
    campo_Media.appendChild(texto_Media);
    campo_Mediana.appendChild(texto_Mediana);
   
    linha.appendChild(vazio);
    linha.appendChild(campo_Moda);
    linha.appendChild(campo_Media);
    linha.appendChild(campo_Mediana);
    linha.appendChild(vazio2);

    linha.className = "tg"

    tabela.appendChild(linha)
  
}
