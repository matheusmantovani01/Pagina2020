let QualiNo 
let QualiOr 
let QuantDis 
let QuantCon 
let Validar = true

QualiNo = true

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
             alert("Novo Título adicionado: ", Vet[Verifica])
        } else{
            console.log(Obj)
            if(Obj.Itens.hasOwnProperty([Vet[Verifica]])){
                Obj.Itens[Vet[Verifica]]++
                alert(Vet[Verifica], " foi Incrementado!")
            }else{
                Obj.Itens[Vet[Verifica]] = 1
                alert("Novo Item adicionado: ", Vet[Verifica])
            }
        }
    }
    
     console.log(Obj)
    if (QualiNo){
       
    }else if (QualiOr) {
        
    }else if (QuantDis) {
        
    }else {
      
    }
}
Calcular()