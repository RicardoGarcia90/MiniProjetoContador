'user strict'   

function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Preencha todos os dados'
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if ( i > f){
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} - `
            }
        } else {
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} - `
            }
        }
    }
    res.innerHTML += ` FIM!!`
}

function limpa() {
    if(document.getElementsByClassName('box').value!="") {
      res.innerHTML = 'Preencha os dados para ver a contagem'
      document.getElementById('inicio').value="";
      document.getElementById('fim').value="";
      document.getElementById('passo').value="";
    }
 }
 





