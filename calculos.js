let QualiNo = getElementById(QlN)
let QualiOr = getElementById(QlO)
let QuantDis = getElementById(QtD)
let QuantCon = getElementById(QtC)

QualiNo = true

let Vet = ["Grau de Escolaridade", "Ensino Superior", "Ensino Médio", "Ensino Fundamental", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "Ensino Superior", "Ensino Superior" , "Ensino Médio", "Ensino Médio", "Ensino Médio", "muito bom", "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "pessimo", "Ensino Fundamental", "Ensino Médio","Ensino Médio", "Ensino Médio"]

let Obj = {}

let Calcular = () =>{
    for(Verifica of Vet.length){
        if (Verifica == 0){
             Obj.titulo = Vet[Verifica]
        } else{
            if (Vet[Verifica] in Obj.Itens){
                Obj.Intens.Vet[Verifica] ++
            }else{
                 Obj.Itens.Vet[Verifica] = 1
            }
        }
     }
     
    if (QualiNo){
        
    }else if (QualiOr) {
        
    }else if (QuantDis) {
        
    }else {
      
    }
}