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

let tipo // muda a o tipo do grafico
let media
let moda
let modas // auxiliar da moda
let mediana
let medianas // auxiliar da mediana
let caso = 0 // ainda sem uso
let contador = 0 // auxiliar
let guardar // auxiliar
let guardar2 // auxiliar
let passou = false // idenficidaor para tarefas que n podem ser repitidas
let I = [] // valor do item
let G = [] // nome do item
let M = [] // media dos itens
let soma // auxiliar para somar itens
let Frs = [] // Frequencia Relativa Simples
let Fas = [] // Frequencia Acumulada Simples
let Fr = [] // Frequencia Relativa %
let Fa = [] // Frequencia Acumulada %
let criaitem = document.createElement('th')
let desvio // Desvio padrão
let cofvaria // coeficiente de variação
let percent // porcentagem da medida separatriz calculada
let posicao // posição em que resultou a medida
let MedidaSeparitriz // guarda o valor da medida direto em sua porcenagem

let Quartil
let Quintil
let Decil
let Percentil


QualiNo = true
QualiOr = false
QuantDis = false


//let Vet = ["Titulo", "Rio de Janeiro", "Porto de Galinhas", "Porto de Galinhas", "Gramado", "Rio de Janeiro", "Gramado", "Porto de Galinhas", "Salvador", "Salvador", "Gramado", "Rio de Janeiro", "Gramado", "Gramado", "Rio de Janeiro", "Porto de Galinhas", "Gramado", "Fernando de Noronha", "Fernando de Noronha", "Fernando de Noronha", "Gramado"]

//let Vet = ["Roi", "111", "90", "121", "105", "122", "61", "128", "112", "128", "93", "108", "138", "88", "110", "112", "112", "97", "128", "102", "125", "87", "119", "104", "116", "96", "114", "107", "113", "80", "113", "123", "95", "115", "70", "115", "101", "114", "127", "92", "103", "78", "118"]

//let Vet = ["Titulo", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,]

let Vet = ["Titulo", 32, 46, 90, 40, 57, 32, 32, 33, 50, 42, 35, 38, 35, 41, 34, 52, 32, 75, 69, 44, 36, 42, 60, 56, 30, 38, 37, 79, 45, 37, 30, 32, 62, 50, 45, 41, 59, 31, 66, 39, 43, 33, 70, 50, 47, 30, 36, 40, 67, 39, 80, 89, 90, 35, 36, 89, 76, 78, 90, 49, 54, 63, 37, 36, 78, 89, 45, 56, 67, 78, 69, 47, 36, 57, 68, 79, 88, 76, 72, 91, 92, 93, 54, 65, 66, 38, 37, 48, 100, 65, 67, 89, 79, 89, 81, 82, 53, 65, 78, 90]

//objeto que guarda os itens
let Obj = {
    Titulo: "",
    Itens:{

    }
}

// a function adiciona os itens do vetor ao objeto
let Objeto = () =>{
    for(Verifica in Vet){
        
            if(Obj.Itens.hasOwnProperty([Vet[Verifica]])){
                Obj.Itens[Vet[Verifica]]++
            }else{
                Obj.Itens[Vet[Verifica]] = 1
                
            }
        console.log(Obj)
    }
} 


// define a medida separatiz utilizada (ainda sem uso)
let Medida = () => {
    if(Quartil){
        MedidaSeparitriz = Quartil
    }else if(Quintil){
        MedidaSeparitriz = Quintil
    }else if(Decil){
        MedidaSeparitriz = Decil
    }else if(Percentil){
        MedidaSeparitriz = Percentil
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

    if (QualNominal){
        // define o tipo do grafico
        tipo = "pie"

        //retira o primeiro item do vetor e trnasforma  em titulo
        Obj.Titulo = Vet.shift()

        //transforma o vet no obj
        Objeto()

        //calculos para poder utlizar as medidas separatrizes
        MedidaSeparitriz = 25
        percent = (MedidaSeparitriz * Vet.length) / 100
        percent = parseInt(percent)

        //transforma o obj em vetores separados de itens e quantidade exemplo I[0] corresponde ao valor do item 1 e G[0] corresponde ao titulo do item 1
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
                //identifica se ja está na posição que foi calculada para a medida separatriz
                if (contador == percent){
                    //salva a posição como texto
                    posicao = G[contador]
                }
                //calcula as Freuências
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

            //calcula moda media e meidana
            media = "não tem"
            mediana = parseInt(Vet.length/2)
            medianas = 0
            moda = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            for(moderar in I){
                medianas += I[moderar]
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
            
            // reseta a variavel "passou"
            passou = false
            
            

            
    }else if (QualOrdinal) {
        //neste momento faz o mesmo que a anterior, então leve em conta os mesmos comentarios
        tipo = "pie"

        Obj.Titulo = Vet.shift()

        MedidaSeparitriz = 25
        percent = (MedidaSeparitriz * Vet.length) / 100
        percent = parseInt(percent)
        contador = 0

        Objeto()
        // Devido a falta do banco de dados disponível, o metodo utilizado será sempre o anterior, como se ocorresse um erro
        // O codigo que iria ser utilizado para uma tentativa de subistituição está disponicel no arquvivo "utilizar depois ou removidos"

        
                //alert("Esse tipo não pode ser utilizado com as informações passadas, Utilizaremos o Metodo Qualitativo Nomimal...")
               

        soma = Vet.length
        console.log(soma)
        contador = 0
            for(item of I){
                if (contador == percent){
                    posicao = G[contador]
                }
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

    }else if (QtDiscreta) {
        // define o tipo do grafico
        tipo = "bar"

        //retira o primeiro item do vetor e trnasforma  em titulo
        Obj.Titulo = Vet.shift()

        //transforma as variaveis em numerico
        for (let prop in Vet) {
            Vet[prop] = parseFloat(Vet[prop])
        }

        //transforma o vet no obj
        Objeto()

        //calculos para poder utlizar as medidas separatrizes
        MedidaSeparitriz = 25
        percent = (MedidaSeparitriz * Vet.length) / 100
        percent = parseInt(percent)

        contador = 0
        for(Atual in Obj.Itens){
            //identifica se ja está na posição que foi calculada para a medida separatriz
            if (Atual == percent){
                //salva a posição como texto
                posicao = Obj.Itens[Atual]
            }
            //transforma o obj em vetores separados de itens e quantidade exemplo I[0] corresponde ao valor do item 1 e G[0] corresponde ao titulo do item 1 e os ordena
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
        console.log(Vet)

        //calcula as Freuências
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

            //calcula a moda, media e meidana
            media = 0 
            for(mediar of Vet){
                media += mediar
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

            //calcula o desvio
            desvio = 0
            for(mediar in I){
                guardar = G[mediar] - media
                guardar2 = Math.pow(guardar, 2)
                guardar = guardar2 * I[mediar]
                desvio += guardar
            }
            desvio = desvio / Vet.length
            desvio = Math.sqrt(desvio)
            console.log(desvio)

            //calcula o coeficiente de variação
            cofvaria = (desvio / media) * 100
            
            console.log(cofvaria)

            passou = true
    }else {
        // define o tipo do grafico
        tipo = "bar"

        //retira o primeiro item do vetor e trnasforma  em titulo
        Obj.Titulo = Vet.shift()

        //transforma as variaveis em numerico
            for (let prop in Vet) {
                Vet[prop] = parseFloat(Vet[prop])
            }
        
        //ordena o vetor
        Vet.sort(function(a, b) {
        return a - b;
        });
        
        //caucula a classe
        guardar = Vet.length - 1
        let At = Vet[guardar] - Vet[0] + 1
        guardar =Math.sqrt(Vet.length)
        let clasess = parseInt(guardar)

        //calcula o intervalo
        let intervalo
        while(passou == false){
            if(At % (clasess - 1) == 0){
                passou = true
                intervalo =  At / (clasess - 1)
                console.log("1")
            }else if (At % clasess == 0){
                passou = true
                intervalo =  At / clasess
                console.log("2")                
            }else if(At % (clasess + 1) == 0){
                passou = true
                intervalo =  At / (clasess + 1)
                console.log("3")
            }else{
                At ++
            }
        }

        //calculos para poder utlizar as medidas separatrizes
        MedidaSeparitriz = 25
        percent = (MedidaSeparitriz * Vet.length) / 100
        percent = parseInt(percent)

        console.log(MedidaSeparitriz + " oi")
        console.log(Vet)
        console.log(At)
        console.log(clasess)
        console.log(intervalo)

        // transforma o Vetor em objetos e calcula a medida separatriz e a media de cada item
        let nome
        guardar = Vet[0]
        let soma = 0
        contador = 0
        for(Add in Vet){
            if (Add == percent){
                posicao = nome
            }
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

        //transforma o obj em vetores separados de itens e quantidade exemplo I[0] corresponde ao valor do item 1 e G[0] corresponde ao titulo do item 1        
        contador = 0
        for(Atual in Obj.Itens){
            I[contador] = Obj.Itens[Atual]
            G[contador] = Atual
            contador ++
        }
        console.log(I)
        console.log(G)

        // Calcula as frquencias
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
        
        //calcula a media geral
        contador = 0
        media = 0
        for(mediar of M){
            media += (mediar * I[contador])
            contador ++
        }

        // define moda media e meidana
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

        //calcula o coeficiente de variação e desvio padrão
        guardar = 0
        guardar2 = 0
        desvio = 0
        for(mediar in I){
            guardar = M[mediar] - media
            guardar2 = Math.pow(guardar, 2)
            guardar = guardar2 * I[mediar]
            desvio += guardar
        }
        desvio = desvio / Vet.length
        desvio = Math.sqrt(desvio)
        console.log(desvio)
        cofvaria = (desvio / media)*100
        console.log(cofvaria)

        passou = true
    }

    // passa os items gerados pelos possiveis calculos para a tabela

    //cria a linha
    var linha = document.createElement('tr');
    //cria os campos dentro da linha
    var campo_nome = document.createElement('td');
    var campo_Frs = document.createElement('td');
    var campo_Fr = document.createElement('td');
    var campo_Fas = document.createElement('td');
    var campo_Fa = document.createElement('td');

    //cria um texto
    var texto_nome = document.createTextNode(Obj.Titulo);
    var texto_Frs = document.createTextNode("Frquência Relativa Simples:");
    var texto_Fr = document.createTextNode("Frquência Relativa (%):");
    var texto_Fas = document.createTextNode("Frquência Acumulada Simples:");
    var texto_Fa = document.createTextNode("Frquência Acumulada (%):");

    //adiciona o texto aos campos
    campo_nome.appendChild(texto_nome);
    campo_Frs.appendChild(texto_Frs);
    campo_Fr.appendChild(texto_Fr);
    campo_Fas.appendChild(texto_Fas);
    campo_Fa.appendChild(texto_Fa);

    //adiciona os campos a linha
    linha.appendChild(campo_nome);
    linha.appendChild(campo_Frs);
    linha.appendChild(campo_Fr);
    linha.appendChild(campo_Fas);
    linha.appendChild(campo_Fa);

    //define uma classe css para a linha
    linha.className = "tg"

    //faz com que a tabela receba a nova linha
    tabela.appendChild(linha)

    //(os comentarios acima servem para os demais abaixo)
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
    var campo1 = document.createElement('td');
    var campo_Moda = document.createElement('td');
    var campo_Media = document.createElement('td');
    var campo_Mediana = document.createElement('td');
    var campo2 = document.createElement('td');

    var texto_Moda = document.createTextNode("Moda");
    var texto_Media = document.createTextNode("Media");
    var texto_Mediana = document.createTextNode("Mediana");

    if(passou){
        var texto_desvio = document.createTextNode("Desvio Padrão");
        var texto_cofvaria = document.createTextNode("Coeficiente de varição (%)");
        
        campo1.appendChild(texto_desvio);
        campo2.appendChild(texto_cofvaria);
    }

    campo_Moda.appendChild(texto_Moda);
    campo_Media.appendChild(texto_Media);
    campo_Mediana.appendChild(texto_Mediana);
   
    if(passou){
        linha.appendChild(campo_Moda);
        linha.appendChild(campo_Media);
        linha.appendChild(campo_Mediana);
        linha.appendChild(campo1);
        linha.appendChild(campo2);
    }else{
        linha.appendChild(campo1);
        linha.appendChild(campo_Moda);
        linha.appendChild(campo_Media);
        linha.appendChild(campo_Mediana);
        linha.appendChild(campo2);
    }

    linha.className = "tg"

    tabela.appendChild(linha)

    var linha = document.createElement('tr');
    var campo1 = document.createElement('td');
    var campo_Moda = document.createElement('td');
    var campo_Media = document.createElement('td');
    var campo_Mediana = document.createElement('td');
    var campo2 = document.createElement('td');

    var texto_Moda = document.createTextNode(moda);
    var texto_Media = document.createTextNode(media);
    var texto_Mediana = document.createTextNode(mediana);
    if(passou){
        var texto_desvio = document.createTextNode(desvio);
        var texto_cofvaria = document.createTextNode(cofvaria);
        
        campo1.appendChild(texto_desvio);
        campo2.appendChild(texto_cofvaria);
    }

    campo_Moda.appendChild(texto_Moda);
    campo_Media.appendChild(texto_Media);
    campo_Mediana.appendChild(texto_Mediana);
   
    if(passou){
        linha.appendChild(campo_Moda);
        linha.appendChild(campo_Media);
        linha.appendChild(campo_Mediana);
        linha.appendChild(campo1);
        linha.appendChild(campo2);
    }else{
        linha.appendChild(campo1);
        linha.appendChild(campo_Moda);
        linha.appendChild(campo_Media);
        linha.appendChild(campo_Mediana);
        linha.appendChild(campo2);
    }

    linha.className = "tg"

    tabela.appendChild(linha)

    
    var linha = document.createElement('tr');
    var campo1 = document.createElement('td')
    var Texto = document.createTextNode(MedidaSeparitriz + "% ou menos esta na categoria: " + posicao );
    campo1.appendChild(Texto);
    linha.appendChild(campo1);

    linha.className = "tg"

    tabela.appendChild(linha)
}
