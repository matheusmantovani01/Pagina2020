const LTDA = () => {
    const readline = require('readline')
    const fs = require('fs')
    const readble = fs.createReadStream(varWindow)

    const rl = readline.createInterface({
        input: readble,
    })

    rl.on('line', (line)=>{
        console.log(line)
    })
}

let QualiNo = getElementById(QlN)
let QualiOr = getElementById(QlO)
let QuantDis = getElementById(QtD)
let QuantCon = getElementById(QtC)

if(QuliNo){

}else if(QualiOr){

}else if(QuantDis){
    
}else if(QuantCon){

}

function abrirPopup(){
    abrirWindow = window.open('', 'pagina')
    }
    
    function fecharPopup(){
    fecharWindow = abrirWindow.close()
    }